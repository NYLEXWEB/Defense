"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images, X, ZoomIn } from "lucide-react";
import { galleryImages, GalleryItem } from "@/data/gallery";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";

export function GalleryPreview() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Row 1: Direct order duplicated
  const row1Images = [...galleryImages, ...galleryImages];

  // Row 2: Reversed order duplicated for opposite visual flow
  const row2Images = [
    ...[...galleryImages].reverse(),
    ...[...galleryImages].reverse(),
  ];

  return (
    <section className="py-16 md:py-24 bg-white border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <MotionFadeIn delay={0.1}>
            <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-4 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block font-sans">
                PROJECT GALLERY
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight font-heading">
              Our Work &amp; Installation Gallery
            </h2>
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
      </div>

      {/* 2-Row Dual Auto-Scrolling Carousel */}
      <div
        className="relative w-full space-y-4 sm:space-y-6 py-2 cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* White fade overlay ONLY on desktop/laptop (hidden on mobile as requested) */}
        <div className="hidden md:block absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Row 1: Leftward Auto-Scroll */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: isPaused ? undefined : ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {row1Images.map((img, index) => (
              <div
                key={`r1-${img.id}-${index}`}
                onClick={() => setActiveImage(img)}
                className="group relative w-60 sm:w-80 md:w-96 h-44 sm:h-56 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt || img.title}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00C689] text-[#06221a] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Rightward Auto-Scroll */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 w-max"
            animate={{ x: isPaused ? undefined : ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {row2Images.map((img, index) => (
              <div
                key={`r2-${img.id}-${index}`}
                onClick={() => setActiveImage(img)}
                className="group relative w-60 sm:w-80 md:w-96 h-44 sm:h-56 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 shrink-0 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt || img.title}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 320px, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00C689] text-[#06221a] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pure Image Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 text-white hover:bg-[#00C689] hover:text-[#06221a] transition-all cursor-pointer shadow-lg"
                aria-label="Close image popup"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt || activeImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
