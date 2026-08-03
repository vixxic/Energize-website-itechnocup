"use client";

import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [currentMenu, setCurrentMenu] = useState("dashboard");

  const [devicesData, setDevicesData] = useState([]);
  const [profilInfo, setProfilInfo] = useState({
    penghuni: 1,
    dayaListrikRumah: "",
    biayaListikBulanan: "",
  });

  return (
    <DashboardContext.Provider
      value={{
        currentMenu,
        setCurrentMenu,
        devicesData,
        setDevicesData,
        profilInfo,
        setProfilInfo,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
