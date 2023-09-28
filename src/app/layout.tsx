import "./globals.css";
import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Netflix",
  description: "Clone do site da Netflix",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="bg-black">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
