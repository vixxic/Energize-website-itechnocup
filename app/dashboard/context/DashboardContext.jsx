"use client";

import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [currentMenu, setCurrentMenu] = useState("analisis");

  const [devicesData, setDevicesData] = useState([]);

  return (
    <DashboardContext.Provider
      value={{
        currentMenu,
        setCurrentMenu,
        devicesData,
        setDevicesData,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
