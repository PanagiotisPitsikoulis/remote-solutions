import React from "react";
import clsx from "clsx";
import { colors } from "../utils/theme";

function Credits() {
  return (
    <div
      className={clsx(
        colors.background.main,
        "flex items-center flex-row gap-2 justify-center py-2"
      )}
    >
      Developed by:
      <span className='font-bold '>
        <a href='https://github.com/PanagiotisPitsikoulis'>
          Panagiotis Pitsikoulis
        </a>
      </span>
    </div>
  );
}

export default Credits;
