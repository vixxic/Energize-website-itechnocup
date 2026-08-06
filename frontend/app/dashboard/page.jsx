"use client";

import "./dashboard.css";
import { useContext } from "react";
import { DashboardContext } from "./context/DashboardContext";

// components
import BottomNav from "./components/BottomNav/BottomNav";
import SiderNav from "./components/SiderNav/SiderNav";
import FormInputData from "./components/FormInputData/FormInputData";
import DashboardContent from "./components/DashboardContent/DashboardContent";
import Info from "./components/Info/Info";
import Profile from "./components/Profile/Profile";

import { Layout, Button } from "antd";

const { Header, Sider, Content, Footer } = Layout;

function Dashboard() {
  const { currentMenu } = useContext(DashboardContext);

  return (
    <Layout>
      <Sider className="sider-dashboard-con" width={280}>
        <SiderNav />
      </Sider>

      <Content className="content-dashboard">
        {currentMenu === "dashboard" ? (
          <DashboardContent />
        ) : currentMenu === "analisis" ? (
          <div>
            <FormInputData />
          </div>
        ) : currentMenu === "tantangan" ? (
          <div>
            <Info />
          </div>
        ) : currentMenu === "riwayat" ? (
          <div>
            <p>halaman riwayat</p>
          </div>
        ) : currentMenu === "profil" ? (
          <div>
            <Profile />
          </div>
        ) : (
          "404 Halaman Tidak di Temukan"
        )}
      </Content>
      <Footer className="bottom-nav-dashboard">
        <BottomNav />
      </Footer>
    </Layout>
  );
}

export default Dashboard;
