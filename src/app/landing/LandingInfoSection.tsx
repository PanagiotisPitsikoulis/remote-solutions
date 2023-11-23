"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface LandingInfoSectionProps {
  Elements: JSX.Element[];
  title?: string;
  horizontal?: boolean;
  direction?: "left" | "right";
}

function LandingInfoSection({
  Elements,
  horizontal,
  title,
  direction,
}: LandingInfoSectionProps) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkWindowSize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 640px)").matches);
    };

    checkWindowSize(); // Check window size on mount

    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  if (!isSmallScreen && !horizontal) {
    return (
      <div
        className={clsx(
          "flex justify-around p-12 items-center gap-10",
          { "md:flex-row flex-col": direction === "left" },
          { "md:flex-row-reverse flex-col": direction === "right" }
        )}
      >
        <h1 className='font-bold text-4xl'>{title}</h1>
        <div className='flex flex-col gap-5 md:p-12'>
          {Elements.slice(0, Elements.length / 2).map((asset) => asset)}
        </div>
        <div className='flex flex-col gap-5 md:p-12'>
          {Elements.slice(Elements.length / 2, Elements.length).map(
            (asset) => asset
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className='flex flex-row overflow-scroll gap-5 p-16'>
        <h1 className='font-bold text-3xl mr-24'>{title}</h1>
        {Elements.map((asset, index) => (
          <div key={index} className='flex shrink-0 h-64 w-96'>
            {asset}
          </div>
        ))}
      </div>
    );
  }
}

export default LandingInfoSection;
