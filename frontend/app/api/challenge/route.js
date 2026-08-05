import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function getApiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;

  const envPath = path.resolve(process.cwd(), "../backend/.env");
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf8");
    const match = content.match(/^\s*GEMINI_API_KEY\s*=\s*(.+)\s*$/m);
    if (match) return match[1].replace(/^["']|["']$/g, "");
  }
  return "";
}

export async function POST(request) {
  try {
    const { analysis, answer } = await request.json();

    if (!analysis) {
      return NextResponse.json(
        { error: "Data analisis tidak ditemukan. Jalankan analisis terlebih dahulu." },
        { status: 400 },
      );
    }

    if (!answer || !answer.trim()) {
      return NextResponse.json(
        { error: "Jawaban tidak boleh kosong." },
        { status: 400 },
      );
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY belum diatur di backend/.env" },
        { status: 500 },
      );
    }

    const prompt = `
Kamu analis energi rumah tangga Indonesia.

HASIL ANALISIS SEBELUMNYA:
- Total konsumsi: ${analysis.totalKwhPerDay || "tidak diketahui"} kWh/hari
- Perangkat paling boros: ${(analysis.wastefulDevices || []).join(", ")}
- Pertanyaan: ${analysis.followUpQuestion || "tidak diketahui"}
- Jawaban pengguna: ${answer}

TUGAS:
1. Buat 3 tantangan hemat energi yang bisa dipilih pengguna (spesifik, terukur, ada durasi).
2. Untuk tiap tantangan, buat 1 deskripsi singkat aksi yang harus dilakukan.
3. Beri prediksi dampak jika tantangan dilakukan (perkiraan penghematan kWh & rupiah).

Balas HANYA JSON (tanpa teks lain), format:
{
  "challenges": [
    { "id": 1, "urutan": 1, "tantangan": "tantangan 1", "des": "deskripsi/aksi tantangan 1" },
    { "id": 2, "urutan": 2, "tantangan": "tantangan 2", "des": "deskripsi/aksi tantangan 2" },
    { "id": 3, "urutan": 3, "tantangan": "tantangan 3", "des": "deskripsi/aksi tantangan 3" }
  ],
  "impactPrediction": "Menghemat sekitar X kWh atau Rp Y per bulan"
}
`.trim();

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data?.error?.message ?? "Terjadi kesalahan pada Gemini API." },
        { status: response.status },
      );
    }

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    const jsonMatch =
      text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/\{[\s\S]*\}/);
    const parsed = jsonMatch
      ? JSON.parse(jsonMatch[1] ?? jsonMatch[0])
      : { challenge: text };

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Terjadi kesalahan pada server." },
      { status: 500 },
    );
  }
}
