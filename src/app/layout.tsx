import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
