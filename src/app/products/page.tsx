import React from "react";
import { Metadata } from "next";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "CCTV Cameras, WiFi Smart Cameras & Security Products | Defense Security Kollam",
  description:
    "Explore genuine CCTV cameras, wireless WiFi smart cameras, DVR/NVR recorders, video door phones, remote gate motors, inverters, and smart home automation products in Kollam.",
  canonicalPath: "/products",
  keywords: [
    "CCTV cameras Kollam price",
    "WiFi smart camera dealers Kollam",
    "Hikvision IP camera price Kollam",
    "CP PLUS security camera installation Kerala",
    "Dahua NVR DVR recorder Kerala",
    "Video door phone intercom price Kollam",
    "Automatic remote gate motors Kollam",
    "Solar powered CCTV camera Kerala",
    "Home inverter system Kerala",
  ],
});

export default function ProductsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Products",
            url: "/products",
          },
        ]}
      />
      <div className="pt-24 md:pt-32">
        <ProductsPreview />
        <FinalCTA />
      </div>
    </>
  );
}
