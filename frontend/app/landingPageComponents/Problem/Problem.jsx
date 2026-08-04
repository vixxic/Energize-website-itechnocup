"use client";

import "./Problem.css";
import { useEffect } from "react";

import { FaArrowTrendUp } from "react-icons/fa6";
import { BsLightningChargeFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";

const problemsData = [
  {
    title: "Biaya Meningkat",
    icon: <FaArrowTrendUp />,
    text: "Semakin boros listik, semakin tinggi tagihan yang harus di bayar",
    img: "/problems-img/image1.png",
  },
  {
    title: "Energi terbuang",
    icon: <BsLightningChargeFill />,
    text: "Semakin boros listik, semakin tinggi tagihan yang harus di bayar",
    img: "/problems-img/image2.png",
  },
  {
    title: "Dampak Lingkungan",
    icon: <FaLeaf />,
    text: "Semakin boros listik, semakin tinggi tagihan yang harus di bayar",
    img: "/problems-img/image3.png",
  },
];

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Problem() {
  return (
    <div className="problem-section padding">
      <div className="problems-con">
        <div className="problem-box box1">
          <img src="/problems-img/3.png" />
          <div className="pop-up-box1">
            Penggunaan energi yang berlebihan menyebabkan biaya listrik terus
            bertambah setiap bulan.
          </div>
        </div>
        <div className="problem-box box2">
          <img src="/problems-img/4.png" />
          <div className="pop-up-box2">
            Perangkat yang digunakan secara tidak efisien menyebabkan pemborosan
            energi dan meningkatkan tagihan listrik.
          </div>
        </div>
        <div className="problem-box box3">
          <img src="/problems-img/5.png" />
          <div className="pop-up-box3">
            Konsumsi energi yang berlebihan dapat meningkatkan emisi karbon dan
            memperburuk kondisi lingkungan.
          </div>
        </div>
      </div>

      <p>Dampak Tersembunyi Penggunaan Energi</p>
    </div>
  );
}

export default Problem;
