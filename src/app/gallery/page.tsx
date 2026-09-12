"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { FinalCTA } from "@/components/home/FinalCTA";
import { galleryImages, GalleryItem } from "@/data/gallery";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "CCTV", "Gate Automation", "Networking", "Security Setup"] as const;

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <SectionBadge className="mb-4">Project Gallery</SectionBadge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight">
          Our Installation &amp; Project Portfolio
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555c59] max-w-2xl mx-auto leading-relaxed">
          Explore verified photos of our CCTV camera setups, remote gate automations, structured network racks, and security installations across Kollam and Kerala.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[#06221a] text-white shadow-md border border-[#00C689]/40"
                  : "bg-neutral-100 text-[#555c59] hover:bg-neutral-200 hover:text-[#222524]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-neutral-900">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C689] text-[#06221a] shadow-sm">
                  {img.category}
                </span>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-[#222524] group-hover:text-[#008D62] transition-colors leading-snug">
                    {img.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555c59] mt-2 leading-relaxed">
                    {img.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#008D62]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                    Verified Work
                  </span>
                  <span className="text-neutral-400 text-[11px]">Click to view</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#06221a] rounded-3xl overflow-hidden border border-[#00C689]/40 shadow-2xl text-white my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-[#00C689] hover:text-[#06221a] transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-80 sm:h-96 md:h-[480px] w-full bg-black">
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C689] text-[#06221a]">
                    {activeImage.category}
                  </span>
                  <span className="text-xs text-neutral-300 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-[#00C689]" />
                    Defense Security Systems • Kollam
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {activeImage.title}
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed max-w-2xl">
                  {activeImage.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Footer Block */}
      <FinalCTA />
    </div>
  );
}
