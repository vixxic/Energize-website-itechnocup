"use client";

import "./BottomNav.css";
import { useContext } from "react";

import { Menu } from "antd";

// menu
import { items } from "../../context/menuItems";

// context
import { DashboardContext } from "../../context/DashboardContext";

function BottomNav() {
  const { currentMenu, setCurrentMenu } = useContext(DashboardContext);

  const onClick = (e) => {
    setCurrentMenu(e.key);
  };

  return (
    <div className="bottom-nav-wrapper">
      <Menu
        className="bottom-nav-dashboard"
        onClick={onClick}
        selectedKeys={[currentMenu]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
}

export default BottomNav;
