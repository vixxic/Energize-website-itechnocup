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
    const { profilInfo, devicesData } = await request.json();

    if (!devicesData || !Array.isArray(devicesData) || devicesData.length === 0) {
      return NextResponse.json(
        { error: "tidak ada data" },
        { status: 400 },
      );
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      return NextResponse.json(
        { error: "tidak ada API_KEY di backend/.env" },
        { status: 500 },
      );
    }

    const prompt = `
DAFTAR PERANGKAT:
${devicesData
  .map(
    (d, i) =>
      ``,
  )
  .join("\n")}
`.trim();

    const response = await fetch(
      ``,
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
        { error: data?.error?.message ?? "the gemini api error" },
        { status: response.status },
      );
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/\{[\s\S]*\}/);
    const parsed = jsonMatch ? JSON.parse(jsonMatch[1] ?? jsonMatch[0]) : { summary: text };

    return NextResponse.json(parsed);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "salah servernya" },
      { status: 500 },
    );
  }
}
