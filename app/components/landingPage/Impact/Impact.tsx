"use client";

import "./Impact.css";
import Image from "next/image";

const impactData = [
  { img: "/impact-img/1 rumah.png" },
  { img: "/impact-img/10 rumah.png" },
  { img: "/impact-img/100 rumah.png" },
  { img: "/impact-img/1 komunitas.png" },
];

export default function Impact() {
  return (
    <section className="Impact-section">
      <h2>Dampak Kolektif</h2>

      <div className="impact-container">
        {impactData.map((item, index) => (
          <div className="impact-card" key={index}>
            <Image
              src={item.img}
              alt={`Impact ${index + 1}`}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>

      <p className="impact-text">
        Satu rumah dapat membuat perubahan. Ketika semakin banyak rumah tangga
        mengambil langkah yang sama, dampaknya menjadi lebih besar bagi
        komunitas.
      </p>
    </section>
  );
}