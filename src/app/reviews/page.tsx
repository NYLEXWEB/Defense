import React from "react";
import { Metadata } from "next";
import { SocialMediaSection } from "@/components/home/SocialMediaSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Connect With Us & Social Media | ${siteConfig.name}`,
  description:
    "Connect with Defense Security Systems Kollam on WhatsApp, Instagram, Facebook, and Google.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 pb-12 md:pt-36">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <SectionBadge className="mb-4">Social Media</SectionBadge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight">
          Connect With Us Online
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#555c59] max-w-2xl mx-auto leading-relaxed">
          Follow Defense Security Systems Kollam on our official social media channels or contact us directly on WhatsApp.
        </p>
      </section>

      <SocialMediaSection />
      <FinalCTA />
    </div>
  );
}
