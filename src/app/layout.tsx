import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html
      lang="pt-br"
      className="bg-gradient-to-t from-[#141414] to-blue-from-[#141414] h-full"
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
