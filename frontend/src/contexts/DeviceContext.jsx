'use client'
import React, { createContext, useContext, useEffect, useState } from "react";

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDevice("mobile");
      } else if (width <= 1024) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);

    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  return (
    <DeviceContext.Provider value={{ device }}>
      {children}
    </DeviceContext.Provider>
  );
};

export const useDevice = () => useContext(DeviceContext);
