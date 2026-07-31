"use client";

import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [currentMenu, setCurrentMenu] = useState("dashboard");

  return (
    <DashboardContext.Provider
      value={{
        currentMenu,
        setCurrentMenu,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
