"use client";
import Image from "next/image";
import { colors, layout, text } from "../utils/theme";
import clsx from "clsx";
import Button from "@/app/ui/input/Button";
import Scene from "../3d/Scene";

interface HeroProps {
  title: string;
  description: string;
  logoSrc?: string;
  preorderButtonLabel: string;
  contactButtonLabel: string;
  heroImageSrc?: string;
  variant?: "left" | "right";
}

function Hero(props: HeroProps) {
  const { title, description, logoSrc, heroImageSrc, variant = "left" } = props;

  const imageAlt = "Hero image";
  const imageWidth = 1200;
  const imageHeight = 800;

  return (
    <div
      className={clsx(
        "flex justify-between",
        {
          "flex-row": variant == "left",
        },
        { "flex-row-reverse": variant == "right" }
      )}
    >
      <div className={clsx(layout.padding)}>
        <h1 className={clsx(text.header, "mb-7")}>{title}</h1>
        <p className={clsx(text.content, "mb-12 ")}>{description}</p>
        <div className='flex flex-col-reverse md:flex-row gap-5'>
          {logoSrc && (
            <Image
              src={logoSrc}
              alt='Quantum Forge'
              width={150}
              height={150}
              className=''
            ></Image>
          )}
          <div className='flex flex-col gap-4 w-fit justify-start items-start'>
            <Button label='Preorder Now' variant='primary' />
            <Button label='Contact our Sales Team' variant='secondary' />
          </div>
        </div>
      </div>
      <div>
        {heroImageSrc && (
          // <Image
          //   src={heroImageSrc}
          //   alt={imageAlt}
          //   width={imageWidth}
          //   height={imageHeight}
          //   className='h-screen w-[120vh] object-cover max-sm:hidden'
          // />
          <div className='h-screen w-[90vh] pl-14 bg-gradient-to-r from-neutral-800 to-black'>
            <Scene></Scene>
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
