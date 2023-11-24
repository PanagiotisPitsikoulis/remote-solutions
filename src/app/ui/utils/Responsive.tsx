"use client";
import React, { useEffect, useState, useCallback } from "react";
import clsx from "clsx";

interface ResponsiveProps {
  ContentDesktop: JSX.Element;
  ContentMobile: JSX.Element;
}

function Responsive({ ContentDesktop, ContentMobile }: ResponsiveProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const checkWindowSize = useCallback(() => {
    setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
  }, []);

  useEffect(() => {
    checkWindowSize(); // Initial check
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, [checkWindowSize]);

  return <div>{isSmallScreen ? ContentMobile : ContentDesktop}</div>;
}

export default Responsive;
