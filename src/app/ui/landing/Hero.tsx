import Image from "next/image";
import { colors, layout, text } from "../utils/theme";
import clsx from "clsx";
import Button from "@/app/ui/input/Button";

interface HeroProps {
  title: string;
  description: string;
  logoSrc?: string;
  preorderButtonLabel: string;
  contactButtonLabel: string;
  heroImageSrc?: string;
}

function Hero(props: HeroProps) {
  const {
    title,
    description,
    logoSrc,
    preorderButtonLabel,
    contactButtonLabel,
    heroImageSrc,
  } = props;

  // Hardcoded image properties
  const imageAlt = "Hero image";
  const imageWidth = 1200;
  const imageHeight = 800;

  return (
    <div className='flex flex-row justify-between'>
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
          <Image
            src={heroImageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className='h-screen w-[120vh] object-cover max-sm:hidden'
          />
        )}
      </div>
    </div>
  );
}

export default Hero;
