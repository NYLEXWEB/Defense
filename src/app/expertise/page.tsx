import React from "react";
import { Metadata } from "next";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Our Expertise | ${siteConfig.name}`,
  description:
    "Explore our specialized expertise in 24/7 CCTV monitoring, incident response, access control, and advanced security technology across Kollam and Kerala.",
};

export default function ExpertisePage() {
  return (
    <div className="pt-28 pb-12 md:pt-36">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <SectionBadge className="mb-4">Technical Expertise</SectionBadge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight">
          Specialized Security Capabilities
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#555c59] max-w-2xl mx-auto leading-relaxed">
          Delivering end-to-end security architecture, round-the-clock monitoring, and expert technical installation across Kerala.
        </p>
      </section>

      <ExpertiseSection />
      <FinalCTA />
    </div>
  );
}
