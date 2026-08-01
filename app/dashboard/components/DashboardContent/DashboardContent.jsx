import React from "react";

// icons
import { MdWavingHand } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
import { TbPercentage25 } from "react-icons/tb";

// components
import PresentaseBoros from "../PresentaseBoros/PresentaseBoros";

const userDataListrik = [
  {
    icon: <BsFillLightningChargeFill color="#7956EA" size={30} />,
    bgColor: "#F8F2FA",
    title: "Total konsumsi Estimasi",
  },
  {
    icon: <IoWallet color="#34A749" size={30} />,
    bgColor: "#F6F6EA",
    title: "Estimasi Biaya Listrik",
  },
  {
    icon: <HiOutlineChartBar color="#F4A94E" size={30} />,
    bgColor: "#FDF6E8",
    title: "Rata-rata per Hari",
  },
  {
    icon: <TbPercentage25 color="#0592F8" size={30} />,
    bgColor: "#F1F4F9",
    title: "Dibanding Sebelumnya",
  },
];

function DashboardContent() {
  return (
    <div>
      <div className="header-text-con-dashboard">
        <p>
          Halo, Orang! <MdWavingHand color="#F6BB3C" />
        </p>
        <p>Berikut adalah hasil analisis penggunaan energi rumah anda</p>
      </div>
      <div className="data-listrik-user">
        {userDataListrik.map((data, index) => (
          <div key={index} className="data-con">
            <div style={{ backgroundColor: data.bgColor }}>{data.icon}</div>
            <div>
              <p>{data.title}</p>
              <p></p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
      <PresentaseBoros />
    </div>
  );
}

export default DashboardContent;
