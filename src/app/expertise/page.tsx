import React from "react";
import { Metadata } from "next";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Specialized Security Expertise & 24/7 CCTV Monitoring in Kollam",
  description:
    "Discover our certified security capabilities including 24/7 CCTV surveillance monitoring, network infrastructure integration, remote access control, and rapid incident response in Kollam, Kerala.",
  canonicalPath: "/expertise",
  keywords: [
    "Security camera technical expertise Kollam",
    "24/7 CCTV monitoring Kollam",
    "Access control systems Kerala",
    "Surveillance network infrastructure Kollam",
    "Certified CCTV technicians Kerala",
    "High security surveillance setup Kollam",
  ],
});

export default function ExpertisePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Expertise",
            url: "/expertise",
          },
        ]}
      />
      <div className="pt-28 pb-12 md:pt-36">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <SectionBadge className="mb-4">Technical Expertise</SectionBadge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight font-heading">
            Specialized Security Capabilities
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#555c59] max-w-2xl mx-auto leading-relaxed">
            Delivering end-to-end security architecture, round-the-clock monitoring, and expert technical installation across Kerala.
          </p>
        </section>

        <ExpertiseSection />
        <FinalCTA />
      </div>
    </>
  );
}
