"use client";

import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [analysis, setAnalysis] = useState(null);
  const [challenge, setChallenge] = useState(null);

  const [currentMenu, setCurrentMenu] = useState("dashboard");
  const [devicesData, setDevicesData] = useState([]);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [analysisError, setAnalysisError] = useState("");
  const [profilInfo, setProfilInfo] = useState({
    penghuni: 1,
    dayaListrikRumah: "",
    biayaListikBulanan: "",
  });

// <<<<<<< HEAD
//   const response = fetch("/api/analyze", {
// =======
//   async function analyzeData() {
//     const response = await fetch("/api/analyze", {
// >>>>>>> e145a84cab28cc57df0e646fee009456d08157b1
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ profilInfo, devicesData }),
//   });
//   const data = response.json();
//   setAnalysis(data);
//   }

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
