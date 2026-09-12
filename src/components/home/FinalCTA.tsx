"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Download, X, ZoomIn, ShieldCheck, FileText } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";

export function FinalCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9] border-t border-neutral-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionFadeIn delay={0.1}>
          {/* Header Block */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-4 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg block font-heading">
                CLIENT REVIEWS &amp; COMPANY PROFILE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#222524] tracking-tight font-heading">
              Verified Client Satisfaction &amp; Service Excellence
            </h2>
            <p className="text-sm sm:text-base text-[#555c59] mt-3">
              Official brochure showcase from Defense Security Systems • Kollam, Kerala
            </p>
          </div>

          {/* Ultra-Premium Interactive Brochure Showcase Frame */}
          <div className="max-w-4xl mx-auto relative group">
            {/* Ambient Emerald Backlight Glow */}
            <div className="absolute -inset-1.5 rounded-[36px] bg-gradient-to-tr from-[#00C689]/40 via-[#008D62]/20 to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div
              onClick={() => setIsModalOpen(true)}
              className="relative rounded-3xl overflow-hidden bg-white border border-[#00C689]/30 shadow-2xl cursor-pointer aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] w-full flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-1"
            >
              <Image
                src="/7.webp"
                alt="Defense Security Client Reviews & Fleet Profile Page"
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-contain p-2 sm:p-4 group-hover:scale-[1.02] transition-transform duration-700"
                priority
              />

              {/* Hover Action Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#00C689] text-[#06221a] flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-7 h-7" />
                </div>
              </div>

              {/* Sleek Floating Bottom Glass Bar */}
            
            </div>
          </div>

          {/* Bottom Direct CTA Action Bar */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">


            <a
              href={`tel:${siteConfig.phones[0].raw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white hover:bg-neutral-100 text-[#222524] border border-neutral-200/90 shadow-sm transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-[#00C689]" />
              <span>Call {siteConfig.phones[0].display}</span>
            </a>

            <a
              href="/defense%20company%20%20profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-[#06221a] hover:bg-[#008D62] text-white border border-[#00C689]/30 shadow-sm transition-all active:scale-95"
            >
              <FileText className="w-4 h-4 text-[#00C689]" />
              <span>Download PDF Profile</span>
              <Download className="w-4 h-4 text-[#00C689]" />
            </a>
          </div>
        </MotionFadeIn>
      </div>

      {/* Lightbox Pop-up Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center overflow-y-auto"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 text-white hover:bg-[#00C689] hover:text-[#06221a] transition-all cursor-pointer shadow-lg"
                aria-label="Close image popup"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
                <Image
                  src="/7.webp"
                  alt="Defense Security Official Client Reviews & Profile Page"
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
