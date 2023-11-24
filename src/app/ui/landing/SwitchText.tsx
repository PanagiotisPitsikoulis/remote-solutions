"use client";

import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { paragraphs } from "../../data/constants/hero";

const SwitchText = () => {
  // Very hacky way to find the correct image to display
  // Images are less than paragraphs. Image index needs to be >= 3 and <= 10.
  // Will break if too many paragraphs are inserted.
  // Only tested up to 16 paragraphs.
  function findCorrectImage(input: number) {
    if (input <= 0) {
      return 3;
    } else if (input >= 3 && input <= 10) {
      return input;
    } else {
      if (input - 10 <= 3) {
        return 3;
      }
      return input - 10;
    }
  }
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleSwitch = (index: number) => setCurrentParagraph(index);

  return (
    <div className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
      <Image
        src={`/images/hero/img${findCorrectImage(currentParagraph)}.png`}
        width={1600}
        height={1600}
        className='object-cover w-full h-full'
        alt='Background Image - Decorative'
      />
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
      <div className='absolute m-4 md:m-12 z-20 bg-stone-950/80 backdrop-blur-xl text-red-100 rounded-xl h-[60vh] w-[90%] lg:w-[50%] xl:w-[40%]'>
        <div className='p-4 bg-red-950 flex overflow-scroll gap-5 text-white rounded-t-xl'>
          {paragraphs.map((paragraph, index) => (
            <span
              key={index}
              onClick={() => handleSwitch(index)}
              className={clsx("cursor-pointer p-2 md:p-4", {
                "mr-4": index !== paragraphs.length - 1,
                "border-b-2 border-red-400": currentParagraph === index,
              })}
            >
              {paragraph.title}
            </span>
          ))}
        </div>
        <div className='flex p-8 flex-col items-center justify-center text-lg'>
          {paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className={clsx({ hidden: currentParagraph !== index })}
            >
              <p className='text-lg'>{paragraph.lore}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwitchText;
