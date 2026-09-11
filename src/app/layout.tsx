import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Advanced CCTV & Electronic Security`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`h-full antialiased font-sans ${cormorantGaramond.variable}`}>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#222524]">
        {children}
      </body>
    </html>
  );
}
