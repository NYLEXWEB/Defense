import React from "react";
import { Metadata } from "next";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Client Reviews & Testimonials | ${siteConfig.name}`,
  description:
    "Read verified 5-star Google reviews from satisfied residential, commercial, and institutional clients across Kollam and Kerala.",
};

export default function ReviewsPage() {
  return (
    <div className="pt-28 pb-12 md:pt-36">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <SectionBadge className="mb-4">Google Reviews</SectionBadge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight">
          Trusted by Clients Across Kollam
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-[#555c59] max-w-2xl mx-auto leading-relaxed">
          See what our clients say about our CCTV installations, quick response times, and dedicated technical service.
        </p>
      </section>

      <ReviewsPreview />
      <FinalCTA />
    </div>
  );
}
