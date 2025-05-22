'use client';

// import { useMediaQuery } from 'react-responsive';

// export const useDeviceType = () => {
//   const isMobile = useMediaQuery({ maxWidth: 767 });
//   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
//   const isDesktop = useMediaQuery({ minWidth: 1024 });

//   return { isMobile, isTablet, isDesktop };
// };

// hooks/useDeviceType.js
import { useState, useEffect } from "react";

export default function useDeviceType() {
  const [device, setDevice] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      setDevice({
        isMobile: width <= 767,
        isTablet: width > 768 && width <= 1023,
        isDesktop: width > 1024,
      });
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return device;
}
