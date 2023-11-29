"use client";
import React, { useState, useEffect } from "react";
import { colors, layout, text, utils } from "../ui/utils/theme";
import clsx from "clsx";
import MarketingCard from "../ui/display/MarketingCard";
import ImagePicker from "../ui/input/ImagePicker";
import { cards } from "../data/constants";

function Page() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const selectedAnswers: number[] = [];

  useEffect(() => {
    setResetKey((prevKey) => prevKey + 1);
  }, [currentCardIndex]);

  const handleNextClick = () => {
    selectedAnswers.push(selectedImage);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    if (currentCardIndex == cards.length - 1) {
      setFinished(true);
    }
  };

  const handlePrevClick = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const currentCard = cards[currentCardIndex];

  return (
    <div
      className={clsx(colors.background.main, layout.padding, "min-h-screen")}
    >
      <div className={clsx(utils.hscroll)}>
        {cards.map((card, index) => (
          <>
            <div className='shrink-0' key={index}>
              <p
                className={clsx(
                  { "text-white": index == currentCardIndex },
                  { "text-neutral-400": index !== currentCardIndex }
                )}
              >
                {card.title}
              </p>
            </div>
            {index !== cards.length - 1 && <p>/</p>}
          </>
        ))}
      </div>
      {!finished ? (
        <MarketingCard
          onNextClick={handleNextClick}
          onPrevClick={handlePrevClick}
          title={currentCard.title}
          description={currentCard.description}
        >
          <ImagePicker
            key={resetKey}
            imgs={currentCard.imgs}
            setSelectedImage={setSelectedImage}
          />
        </MarketingCard>
      ) : (
        <div>
          {selectedAnswers.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
