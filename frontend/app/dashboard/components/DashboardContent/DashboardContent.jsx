import "./DashboardContent.css";

// icons
import { MdWavingHand } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
import { TbPercentage25 } from "react-icons/tb";
import { IoMdPeople } from "react-icons/io";

// components
import PresentaseBoros from "../PresentaseBoros/PresentaseBoros";
import FollowUpAi from "../FollowUpAi/FollowUpAi";

const userDataListrik = [
  {
    icon: <IoMdPeople color="#0C0850" size={30} />,
    bgColor: "#f1f1f9",
    title: "Jumlah Penghuni",
  },
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

const tantanganAi = [
  {
    urutan: 1,
    tantangan: "dari ai #1",
    des: "tantangan nya apa",
  },
  {
    urutan: 2,
    tantangan: "dari ai #2",
    des: "tantangan nya apa",
  },
  {
    urutan: 3,
    tantangan: "dari ai #3",
    des: "tantangan nya apa",
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
      <div className="div-1-con data-listrik-user">
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
      <div className="div-2-con">
        <PresentaseBoros />
        <FollowUpAi />
      </div>

      <hr />

      <h4>
        Tiga langkah sederhana menuju penggunaan energi yang lebih efisien
      </h4>
      <p>Pilih tantangan pertama anda</p>

      <hr />

      <div className="div-3-con pilihan-tantangan">
        {tantanganAi.map((tantangan) => (
          <div key={tantangan.urutan}>
            <p>{tantangan.tantangan}</p>
            <p>{tantangan.des}</p>

            <button>Terima tantangan</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardContent;
