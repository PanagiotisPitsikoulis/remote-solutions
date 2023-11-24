import React from "react";
import clsx from "clsx";
import { colors } from "../utils/theme";

interface ButtonProps {
  label: string;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

function Button({ label, className, variant }: ButtonProps) {
  const borderActive = variant === "primary" || variant === "secondary";
  const bgActive = variant === "primary";
  const textContrastActive = variant === "primary";
  const textMatchBorder = variant === "secondary" || variant === "tertiary";
  const buttonClass = clsx(
    borderActive && colors.border.main,
    "px-4 py-1 rounded-xl font-bold w-fit",
    bgActive && colors.focus.normal,
    textContrastActive && colors.text.darkAccent,
    textMatchBorder && colors.text.matchBorder,
    className
  );

  return <button className={buttonClass}>{label}</button>;
}

export default Button;
