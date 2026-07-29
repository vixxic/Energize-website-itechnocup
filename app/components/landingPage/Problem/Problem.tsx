import "./Problem.css";

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

function Problem() {
  return (
    <div className="problem-section padding">
      <img className="awan-parallax" src="/problems-img/awan.png" />

      <h2>Dampak Tersembunyi Penggunaan Energi</h2>
      <p>
        Tagihan listrik bukan satu-satunya yang meningkat ketika kita
        menggunakan energi secara berlebihan
      </p>

      <div className="problems-con">
        {problemsData.map((problem, index) => (
          <div key={index}>
            <img src={problem.img} />

            <div>
              <div>{problem.icon}</div>
              <p>{problem.title}</p>
            </div>

            <p>{problem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problem;
