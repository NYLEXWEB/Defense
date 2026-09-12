"use client";

import React, { useState } from "react";
import { Phone, ZoomIn, FileText, Download, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-[#F8FAF9] border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFadeIn delay={0.1}>
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-4 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg block font-heading">
                CLIENT REVIEWS &amp; COMPANY PROFILE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222524] tracking-tight font-heading">
              Verified Client Satisfaction &amp; Service Excellence
            </h2>
            <p className="text-sm sm:text-base text-[#555c59] mt-3 font-medium">
              Official brochure showcase from Defense Security Systems • Kollam, Kerala
            </p>
          </div>

          {/* Ultra-Premium Showcase Section Container */}
          <div className="max-w-6xl mx-auto relative group">
            {/* Ambient Emerald Glow Effect */}
            <div className="absolute -inset-2 rounded-[32px] sm:rounded-[44px] bg-gradient-to-tr from-[#00C689]/30 via-[#008D62]/15 to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div
              onClick={() => setIsModalOpen(true)}
              className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border-2 border-[#00C689]/30 shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-500 group-hover:-translate-y-1 p-1 sm:p-2"
            >
              {/* 1. Mobile Viewport (< md): Full portrait 7.webp image with natural height & high legibility */}
              <div className="block md:hidden w-full overflow-hidden rounded-xl bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/7.webp"
                  alt="Defense Security Official Client Reviews & Profile Page - Mobile View"
                  className="w-full h-auto block rounded-xl transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* 2. Desktop/Laptop Viewport (>= md): Full landscape 7 mobile.png image fully uncropped (100% top-to-bottom & left-to-right visible) */}
              <div className="hidden md:block w-full overflow-hidden rounded-2xl bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/7 mobile.png"
                  alt="Defense Security Official Client Reviews & Profile Page - Desktop Landscape View"
                  className="w-full h-auto block rounded-2xl transform group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>

              {/* Hover Action Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                <div className="px-6 py-3 rounded-full bg-[#00C689] text-[#06221a] font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-2xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Click to expand full resolution</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Direct CTA Action Bar */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-neutral-100 text-[#222524] border border-neutral-200/90 shadow-sm transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#00C689]" />
              <span>Call {siteConfig.phones[0].display}</span>
            </a>

            <a
              href="/defense%20company%20%20profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold bg-[#06221a] hover:bg-[#008D62] text-white border border-[#00C689]/30 shadow-sm transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#00C689]" />
              <span>Download PDF Profile</span>
              <Download className="w-4 h-4 text-[#00C689]" />
            </a>
          </div>
        </MotionFadeIn>
      </div>

      {/* Full-Screen Lightbox Pop-up Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[120] bg-black/92 backdrop-blur-md p-3 sm:p-6 md:p-8 flex items-center justify-center overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full flex flex-col items-center justify-center my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-3 -right-2 sm:top-2 sm:right-2 z-50 p-3 rounded-full bg-black/80 text-white hover:bg-[#00C689] hover:text-[#06221a] transition-all cursor-pointer shadow-xl border border-white/20"
                aria-label="Close image popup"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-neutral-950 p-2 border border-white/10 flex items-center justify-center">
                {/* Mobile view image in Lightbox */}
                <div className="block md:hidden w-full max-h-[85vh] overflow-y-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/7.webp"
                    alt="Defense Security Official Client Reviews & Profile Page - Full View"
                    className="w-full h-auto block rounded-xl"
                  />
                </div>

                {/* Desktop view image in Lightbox */}
                <div className="hidden md:block w-full max-h-[85vh] overflow-y-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/7 mobile.png"
                    alt="Defense Security Official Client Reviews & Profile Page - Full Desktop View"
                    className="w-full h-auto block rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
