"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { FinalCTA } from "@/components/home/FinalCTA";
import { galleryImages, GalleryItem } from "@/data/gallery";
import { motion, AnimatePresence } from "framer-motion";

export function GalleryClient() {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <SectionBadge className="mb-4">Project Gallery</SectionBadge>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight font-heading">
          Our CCTV Work &amp; Installation Gallery
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555c59] max-w-2xl mx-auto leading-relaxed">
          Explore real-world security camera installations, network cabling setups, and gate automation projects completed across Kollam and Kerala.
        </p>
      </section>

      {/* Pure Image Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="group relative h-48 sm:h-64 md:h-72 rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-400 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt || img.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-[#00C689] text-[#06221a] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      {/* CTA Footer Block */}
      <FinalCTA />
    </div>
  );
}
