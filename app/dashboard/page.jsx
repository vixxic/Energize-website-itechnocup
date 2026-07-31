"use client";

import "./dashboard.css";
import { useContext } from "react";

// components
import BottomNav from "./components/BottomNav/BottomNav";
import SiderNav from "./components/SiderNav/SiderNav";
import FormInputData from "./components/FormInputData/FormInputData";

// icons
import { MdWavingHand } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoWallet } from "react-icons/io5";
import { HiOutlineChartBar } from "react-icons/hi";
import { TbPercentage25 } from "react-icons/tb";

import { Layout, Button } from "antd";

const { Header, Sider, Content, Footer } = Layout;

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100vw",
  height: "100vh",
};

const userDataListrik = [
  {
    icon: <BsFillLightningChargeFill color="#7956EA" size={25} />,
    bgColor: "#F8F2FA",
    title: "Total konsumsi Estimasi",
  },
  {
    icon: <IoWallet color="#34A749" size={25} />,
    bgColor: "#F6F6EA",
    title: "Estimasi Biaya Listrik",
  },
  {
    icon: <HiOutlineChartBar color="#F4A94E" size={25} />,
    bgColor: "#FDF6E8",
    title: "Rata-rata per Hari",
  },
  {
    icon: <TbPercentage25 color="#0592F8" size={25} />,
    bgColor: "#F1F4F9",
    title: "Dibanding Sebelumnya",
  },
];

import { DashboardContext } from "./context/DashboardContext";

function Dashboard() {
  const { currentMenu } = useContext(DashboardContext);

  return (
    <Layout style={layoutStyle}>
      <Sider className="sider-dashboard-con" width="20%">
        <SiderNav />
      </Sider>

      <Content className="content-dashboard">
        {currentMenu === "dashboard" ? (
          <div>
            <div className="header-text-con-dashboard">
              <p>
                Halo, Orang! <MdWavingHand color="#F6BB3C" />
              </p>
              <p>Berikut adalah hasil analisis penggunaan energi rumah anda</p>
            </div>
            <div className="data-listrik-user">
              {userDataListrik.map((data, index) => (
                <div className="data-con">
                  <div style={{ backgroundColor: data.bgColor }}>
                    {data.icon}
                  </div>
                  <div>
                    <p>{data.title}</p>
                    <p></p>
                    <p></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : currentMenu === "analisis" ? (
          <div>
            {" "}
            <FormInputData />
          </div>
        ) : currentMenu === "tantangan" ? (
          <div>
            <p>halaman tantangan</p>
          </div>
        ) : currentMenu === "riwayat" ? (
          <div>
            <p>halaman riwayat</p>
          </div>
        ) : currentMenu === "profil" ? (
          <div>
            <p>halaman profil</p>
          </div>
        ) : (
          "404 Halaman Tidak di Temukan"
        )}
      </Content>
      <Footer className="bottom-nav-dashboard" style={footerStyle}>
        <BottomNav />
      </Footer>
    </Layout>
  );
}

export default Dashboard;
