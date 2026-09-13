import React from "react";
import { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "CCTV Installation Gallery & Project Portfolio | Defense Security Kollam",
  description:
    "View our completed CCTV camera installations, network cabling, wireless WiFi surveillance, video door phones, and automatic remote gate projects across Kollam and Kerala.",
  canonicalPath: "/gallery",
  keywords: [
    "CCTV installation gallery Kollam",
    "Security camera installation photos Kerala",
    "Commercial CCTV setup portfolio",
    "Automatic gate installation Kollam",
    "WiFi camera installation work photos",
    "Defense Security project photos Thevally",
  ],
});

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Project Gallery",
            url: "/gallery",
          },
        ]}
      />
      <GalleryClient />
    </>
  );
}
