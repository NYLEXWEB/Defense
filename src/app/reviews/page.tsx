import React from "react";
import { Metadata } from "next";
import { SocialMediaSection } from "@/components/home/SocialMediaSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Customer Reviews & Social Media Hub | Defense Security Kollam",
  description:
    "Connect with Defense Security Systems Kollam online. Check our official Google profile, customer reviews, WhatsApp direct messaging, Instagram updates, and Facebook community.",
  canonicalPath: "/reviews",
  keywords: [
    "Defense Security Systems reviews Kollam",
    "CCTV company Google reviews Kollam",
    "Defense Security Instagram Facebook",
    "Security camera customer ratings Kerala",
    "Best CCTV installation service customer feedback Kollam",
  ],
});

export default function ReviewsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Reviews & Social",
            url: "/reviews",
          },
        ]}
      />
      <div className="pt-28 pb-12 md:pt-36">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <SectionBadge className="mb-4">Social Media &amp; Community</SectionBadge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight font-heading">
            Connect With Us Online
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-[#555c59] max-w-2xl mx-auto leading-relaxed">
            Follow Defense Security Systems Kollam on our official social media channels or contact us directly on WhatsApp.
          </p>
        </section>

        <SocialMediaSection />
        <FinalCTA />
      </div>
    </>
  );
}
