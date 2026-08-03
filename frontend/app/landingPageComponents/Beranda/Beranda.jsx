import "./Beranda.css";
import { useEffect } from "react";
import gsap from "gsap";

function Beranda() {
  useEffect(() => {
    gsap
      .timeline()
      .from(".beranda-text-con h1 ", {
        x: -100,
        opacity: 0,
        ease: "power1.out",
      })
      .from(".beranda-text-con p ", {
        x: -100,
        opacity: 0,
        ease: "power1.out",
      });
  }, []);
  return (
    <div className="beranda-section padding">
      <div className="beranda-text-con">
        <h1>Pahami Energi Anda</h1>
        <p>
          Kenali pola penggunaan listrik, temukan peluang penghematan, dan
          bangun kebiasaan energi yang lebih bijak.
        </p>
      </div>

      <div className="beranda-img-con">
        <img
          className="rumah-img"
          src="/rumah.png"
          alt="rumah ungu dengan elemen listrik"
        />
      </div>
    </div>
  );
}

export default Beranda;
