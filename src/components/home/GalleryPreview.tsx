"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images, ShieldCheck } from "lucide-react";
import { galleryImages } from "@/data/gallery";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

export function GalleryPreview() {
  // Show 2 highlighted images on the homepage preview to keep height concise
  const previewImages = galleryImages.slice(0, 2);

  return (
    <section className="py-16 md:py-24 bg-white border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title & "View Full Gallery" Button */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <MotionFadeIn delay={0.1}>
            <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-4 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg block">
                PROJECT GALLERY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight">
              Our Recent Installations &amp; Technical Work
            </h2>
            <p className="text-sm text-[#555c59] mt-2 max-w-xl">
              A snapshot of our verified CCTV surveillance, gate automation, and networking projects across Kerala.
            </p>
          </MotionFadeIn>

          <MotionFadeIn delay={0.25} className="shrink-0">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-[#06221a] text-white hover:bg-[#008D62] transition-all shadow-md active:scale-95 shine-btn"
            >
              <Images className="w-4 h-4 text-[#00C689]" />
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4 text-[#00C689]" />
            </Link>
          </MotionFadeIn>
        </div>

        {/* 2 Featured Showcase Cards */}
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.12}>
          {previewImages.map((img) => (
            <MotionStaggerItem key={img.id}>
              <div className="group relative rounded-3xl overflow-hidden bg-[#F8FAF9] border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C689] text-[#06221a] shadow-sm">
                    {img.category}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#222524] group-hover:text-[#008D62] transition-colors">
                      {img.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555c59] mt-2 leading-relaxed">
                      {img.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-200/70 flex items-center justify-between text-xs font-semibold text-[#008D62]">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#00C689]" />
                      Verified Installation
                    </span>
                    <span className="text-neutral-400 group-hover:text-[#008D62] transition-colors">
                      Defense Security Systems
                    </span>
                  </div>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </section>
  );
}
