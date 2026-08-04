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

  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ profilInfo, devicesData }),
  });
  const data = await response.json();
  setAnalysis(data);

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
