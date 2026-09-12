"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";
import { motion, AnimatePresence } from "framer-motion";

export function WhoWeAre() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9] border-y border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Premium Edge-to-Edge Visual Card (Click to Expand) */}
          <MotionFadeIn className="lg:col-span-5" delay={0.1}>
            <div className="relative group">
              {/* Subtle Emerald Ambient Backlight Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-[#00C689]/40 via-[#008D62]/20 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Edge-to-Edge Image Card (1:1 Aspect Ratio matching the flyer) */}
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-3xl overflow-hidden bg-[#06221a] border border-[#00C689]/30 shadow-2xl cursor-pointer aspect-square w-full transition-transform duration-500 group-hover:-translate-y-1"
              >
                <Image
                  src="/About/IMG-20250103-WA0105.jpg"
                  alt="Defense Security & Surveillance Services Kollam"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

               
              </div>
            </div>
          </MotionFadeIn>

          {/* Right Column: Content */}
          <MotionFadeIn className="lg:col-span-7 space-y-6" delay={0.2}>
            {/* Rectangular Emerald Badge */}
            <div className="inline-block bg-[#00C689] px-6 py-2.5 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-sm sm:text-base block font-heading">
                ABOUT DEFENSE SECURITY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#222524] leading-tight font-heading">
              Smart Security. Reliable Protection.
            </h2>

            <p className="text-sm sm:text-base text-[#555c59] leading-relaxed">
              At Defense Security, we provide reliable and advanced security solutions designed to protect homes, shops, offices, institutions, and commercial properties. Based in Thevally, Kollam, we specialize in CCTV surveillance and modern security systems, offering solutions tailored to each customer’s specific requirements.
            </p>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#222524] bg-white p-3 rounded-xl border border-neutral-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                <span>HD &amp; IP Surveillance Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#222524] bg-white p-3 rounded-xl border border-neutral-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                <span>Automatic Remote Gate Systems</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#222524] bg-white p-3 rounded-xl border border-neutral-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                <span>Professional Installation &amp; Support</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#222524] bg-white p-3 rounded-xl border border-neutral-200/80 shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                <span>Remote Access &amp; Power Backup</span>
              </div>
            </div>

            {/* Mission Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#00C689]/30 text-xs sm:text-sm text-[#333333] space-y-1">
              <span className="font-bold text-[#008D62] block uppercase tracking-wide">
                Our Mission
              </span>
              <p className="text-[#444a47]">
                To make modern security technology accessible, reliable, and easy to use for every customer across homes, businesses, and institutions.
              </p>
            </div>

            {/* Bottom Button: View More / More About Us */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#06221a] text-white hover:bg-[#008D62] transition-all shadow-md active:scale-95 shine-btn"
              >
                <span>More About Us</span>
                <ArrowRight className="w-4 h-4 text-[#00C689]" />
              </Link>
            </div>
          </MotionFadeIn>
        </div>
      </div>

      {/* Lightbox Pop-up Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-30 p-3 rounded-full bg-black/60 text-white hover:bg-[#00C689] hover:text-[#06221a] transition-all cursor-pointer shadow-lg"
                aria-label="Close image popup"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full h-full max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/About/IMG-20250103-WA0105.jpg"
                  alt="Defense Security Official Flyer Full View"
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
