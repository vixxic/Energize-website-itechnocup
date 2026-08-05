"use client";

import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [analysis, setAnalysis] = useState(null);

  const [currentMenu, setCurrentMenu] = useState("dashboard");
  const [devicesData, setDevicesData] = useState([]);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [analysisError, setAnalysisError] = useState("");
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
        analysis,
        setAnalysis,
        analysisLoading,
        setAnalysisLoading,
        analysisError,
        setAnalysisError,
        profilInfo,
        setProfilInfo,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
