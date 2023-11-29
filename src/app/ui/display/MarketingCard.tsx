import React, { ReactNode } from "react";
import clsx from "clsx";
import Link from "next/link";
import { colors, layout, text } from "../utils/theme";
import Button from "../input/Button";

interface MarketingCardProps {
  children?: ReactNode;
  title: string;
  description: string;
  onNextClick: () => void;
  onPrevClick: () => void;
}

const MarketingCard: React.FC<MarketingCardProps> = ({
  children,
  title,
  description,
  onNextClick,
  onPrevClick,
}) => {
  return (
    <>
      <div
        className={clsx(
          colors.border.main,
          colors.background.content,
          "h-[90vh] w-full rounded-2xl",
          "mt-12"
        )}
      >
        <div
          className={clsx(
            layout.padding,
            "flex flex-col justify-between h-screen"
          )}
        >
          <div>
            <h1 className={clsx(text.header, "mb-5")}>{title}</h1>
            <h2>{description}</h2>
          </div>
          <div className='flex items-center justify-start py-12'>
            {children}
          </div>
          <div className='flex flex-row justify-between gap-5 mb-12 pb-12'>
            <Button
              label='Back'
              variant={"tertiary"}
              onClick={onPrevClick}
            ></Button>
            <Button
              label='Next'
              variant={"secondary"}
              onClick={onNextClick}
            ></Button>
          </div>
        </div>
      </div>
      <Link href={"/"}>
        <Button
          className='mt-5'
          label='Go back to the landing page'
          variant={"tertiary"}
        ></Button>
      </Link>
    </>
  );
};

export default MarketingCard;
