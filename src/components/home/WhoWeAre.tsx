"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAF9] border-y border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Image Block */}
          <MotionFadeIn className="lg:col-span-5" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[14/10] border border-neutral-200 bg-neutral-900 group">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Defense Security System Installation in Kollam"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06221a]/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C689] text-[#06221a]">
                  Based in Thevally, Kollam
                </span>
                <p className="text-sm font-bold text-white pt-1">
                  Your Safety. Our Responsibility.
                </p>
              </div>
            </div>
          </MotionFadeIn>

          {/* Right Column: Content */}
          <MotionFadeIn className="lg:col-span-7 space-y-6" delay={0.2}>
            {/* Rectangular Emerald Badge */}
            <div className="inline-block bg-[#00C689] px-6 py-2.5 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-sm sm:text-base block">
                ABOUT DEFENSE SECURITY
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#222524] leading-tight">
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
    </section>
  );
}
