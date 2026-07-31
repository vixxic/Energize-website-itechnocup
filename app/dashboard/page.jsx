"use client";

import "./dashboard.css";

// components
import BottomNav from "./components/BottomNav/BottomNav";
import SiderNav from "./components/SiderNav/SiderNav";

// icons
import { MdWavingHand } from "react-icons/md";

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

function Dashboard() {
  return (
    <Layout style={layoutStyle}>
      <Sider className="sider-dashboard-con" width="20%">
        <SiderNav />
      </Sider>
      <Layout>
        <Content className="content-dashboard">
          <div className="header-text-con-dashboard">
            <p>
              Halo, "ceritanya nama orang"! <MdWavingHand />
            </p>
            <p>Berikut adalah hasil analisis penggunaan energi rumah anda</p>
          </div>
        </Content>
        <Footer className="bottom-nav-dashboard" style={footerStyle}>
          <BottomNav />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
