import React from "react";
import { Metadata } from "next";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Products & Security Portfolio | Defense Security Systems",
  description: "Explore our range of CCTV cameras, WiFi smart cameras, DVR/NVR recorders, video door phones, WiFi networks, remote gates, inverters, and smart home automation.",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <ProductsPreview />
      <FinalCTA />
    </div>
  );
}
