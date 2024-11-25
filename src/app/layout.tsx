import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "X. it's What's Happening / X",
  description:
    "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-[#000000] text-[#E7E9EA]`}
      >
        {children}
      </body>
    </html>
  );
}
