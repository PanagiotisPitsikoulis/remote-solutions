"use client";
import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import clsx from "clsx";
import { colors } from "../utils/theme";

interface ImagePickerProps {
  imgs: string[];
  selectMultiple?: boolean;
  setSelectedImage?: (index: number) => void;
}

interface ImagePickerState {
  selectedImages: number[];
}

const ImagePicker: React.FC<ImagePickerProps> = ({
  imgs,
  selectMultiple = false,
  setSelectedImage = () => {},
}: ImagePickerProps) => {
  const [state, setState] = useState<ImagePickerState>({
    selectedImages: [],
  });

  const toggleImageSelection = (index: number) => {
    setState((prevState) => {
      if (selectMultiple) {
        return {
          ...prevState,
          selectedImages: prevState.selectedImages.includes(index)
            ? prevState.selectedImages.filter((i) => i !== index)
            : [...prevState.selectedImages, index],
        };
      } else {
        return {
          ...prevState,
          selectedImages: [index],
        };
      }
    });
  };

  return (
    <div className='flex flex-row gap-5 overflow-scroll'>
      {imgs.map((asset, index) => (
        <Image
          key={index}
          className={clsx(
            "rounded-xl w-60 h-60 cursor-pointer",
            state.selectedImages.includes(index)
              ? clsx("border-4", colors.border.accent)
              : clsx("border-4", colors.border.main)
          )}
          alt={`img${index}`}
          width={300}
          height={500}
          src={asset}
          onClick={(e: MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            toggleImageSelection(index);
            setSelectedImage(index);
          }}
        />
      ))}
    </div>
  );
};

export default ImagePicker;
