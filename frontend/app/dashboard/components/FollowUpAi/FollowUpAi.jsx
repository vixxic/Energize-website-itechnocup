"use client";

import { useState, useContext } from "react";
import { DashboardContext } from "../../context/DashboardContext";
import "./FollowUpAi.css";

export default function FollowUpAi() {
  const { analysis, setAnalysis } = useContext(DashboardContext);
  const [selected, setSelected] = useState("");
  const [other, setOther] = useState("");

  const options = analysis?.followUpOptions || [
    "Untuk tidur",
    "Untuk bekerja / belajar",
    "Lainnya",
  ];

  const topDevices = analysis?.wastefulDevices?.[0];
  const question = analysis?.followUpQuestion || `Mengapa ${topDevices} dipakai setiap hari?`;
  const summary = analysis?.summary;

  async function HandleChallenge() {

  }

  return (
    <div className="followUpCard">
      <div className="followHeader">
        <div className="followIcon">
          ❄️
        </div>
        <div>
          <h2>Perangkat Paling Boros: AC</h2>
          <p>
            AC adalah perangkat dengan konsumsi energi tertinggi
            di rumah Anda.
          </p>
        </div>
      </div>
      <div className="followBody">
        <h3>Mengapa AC digunakan selama 8 jam/hari?</h3>
        <p className="subtitle">
          Pilih alasan yang paling sesuai atau tulis jawaban Anda sendiri.
        </p>
        {options.map((item) => (
          <label className="radioCard" key={item}>
            <input
              type="radio"
              checked={selected === item}
              onChange={() => setSelected(item)}
            />
            <span>{item}</span>
          </label>
        ))}
        {selected === "Lainnya" && (
          <input
            className="otherInput"
            placeholder="Tulis jawaban..."
            value={other}
            onChange={(e) => setOther(e.target.value)}
          />

        )}

      </div>

      <button className="submitBtn">
        Kirim Jawaban →
      </button>
    </div>
  );
}