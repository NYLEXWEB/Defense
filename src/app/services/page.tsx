import React from "react";
import { Metadata } from "next";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceListJsonLd } from "@/components/seo/JsonLd";
import { servicesData } from "@/data/services";

export const metadata: Metadata = constructMetadata({
  title: "Professional CCTV Installation & Security Services in Kollam, Kerala",
  description:
    "Expert CCTV installation, system design, ongoing camera maintenance, repair, and 24/7 technical monitoring across Kollam and Kerala by certified security specialists.",
  canonicalPath: "/services",
  keywords: [
    "CCTV installation services Kollam",
    "Security camera repair Kollam",
    "CCTV maintenance contract Kerala",
    "Commercial CCTV system design Kollam",
    "24/7 CCTV surveillance monitoring Kerala",
    "CCTV AMC annual maintenance contract Kollam",
    "CCTV camera technician service Kollam",
    "CCTV cable repair and DVR troubleshooting Kerala",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Services",
            url: "/services",
          },
        ]}
      />
      <ServiceListJsonLd services={servicesData} />
      <div className="pt-24 md:pt-32">
        <ServicesPreview />
        <FinalCTA />
      </div>
    </>
  );
}
