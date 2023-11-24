import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { colors } from "./ui/utils/theme";

export const metadata: Metadata = {
  title: "Metal Survivors",
  description: "Embark on an epic journey.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={clsx(colors.text.light)}>{children}</body>
    </html>
  );
}
