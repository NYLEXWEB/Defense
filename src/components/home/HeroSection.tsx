"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex items-center pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-neutral-100">
      {/* Background Images: Responsive Mobile & Desktop */}

      {/* Mobile Background Image (No white fog) */}
      <div className="absolute inset-0 md:hidden z-0 w-full h-full">
        <Image
          src="/images/hero-mobile-back.png"
          alt="Defense CCTV Smart Security System - Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right sm:object-center scale-100 transition-transform duration-1000 ease-out"
        />
      </div>

      {/* Desktop Background Image (Exact original) */}
      <div className="absolute inset-0 hidden md:block z-0 w-full h-full">
        <Image
          src="/images/hero-desktop.png"
          alt="Defense CCTV Smart Security System - Desktop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right xl:object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Subtle left gradient overlay for crisp text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/40 to-transparent max-w-2xl pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* MOBILE VIEW (320px - 767px) */}
        <div className="block md:hidden w-full max-w-[280px] xs:max-w-[310px] sm:max-w-md space-y-4">
          <MotionFadeIn delay={0.1} distance={20} duration={0.85}>
            <h1 className="font-heading uppercase tracking-tight text-[#111815] leading-[0.92] text-[44px] xs:text-5xl sm:text-6xl">
              <span className="block text-[#111815]">PROTECTING</span>
              <span className="block text-[#00C689]">WHAT</span>
              <span className="block text-[#00C689]">MATTERS</span>
              <span className="block text-[#111815]">
                MOST<span className="text-[#838b88]">.</span>
              </span>
            </h1>
          </MotionFadeIn>

          <MotionFadeIn delay={0.22} distance={18} duration={0.8}>
            <p className="text-xs sm:text-sm text-[#333836] leading-relaxed font-medium">
              {siteConfig.description}
            </p>
          </MotionFadeIn>

          <MotionFadeIn delay={0.34} distance={16} duration={0.75}>
            <div className="flex flex-col gap-2.5 xs:gap-3 pt-1 w-full max-w-[260px] xs:max-w-[270px]">
              <Link
                href="/products"
                className="inline-flex items-center justify-between gap-3 px-4.5 xs:px-5 py-2.5 xs:py-3 rounded-full bg-[#00C689] hover:bg-[#008D62] text-white font-semibold text-xs transition-all shadow-sm active:scale-95 group shine-btn"
              >
                <span>Explore Solutions</span>
                <span className="w-7 h-7 rounded-full bg-white/25 flex items-center justify-center shrink-0 transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-between gap-3 px-4.5 xs:px-5 py-2.5 xs:py-3 rounded-full bg-white hover:bg-neutral-50 text-[#111815] border border-neutral-200 shadow-2xs font-semibold text-xs transition-all active:scale-95 group"
              >
                <span>Get in Touch</span>
                <span className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-3.5 h-3.5 text-[#222524]" />
                </span>
              </Link>
            </div>
          </MotionFadeIn>
        </div>

        {/* DESKTOP VIEW (Exact Original Design & Hierarchy) */}
        <div className="hidden md:block max-w-2xl space-y-5 sm:space-y-7">
          <MotionFadeIn delay={0.1} distance={20} duration={0.85}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#222524] leading-[1.08]">
              Protecting{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#008D62]">
                  What Matters
                </span>
                <span className="absolute bottom-1.5 left-0 right-0 h-3 sm:h-4 bg-[#00C689]/25 -rotate-1 rounded-sm -z-0" />
              </span>{" "}
              Most.
            </h1>
          </MotionFadeIn>

          <MotionFadeIn delay={0.22} distance={18} duration={0.8}>
            <p className="text-base sm:text-lg md:text-xl text-[#444a47] leading-relaxed max-w-xl font-medium">
              {siteConfig.description}
            </p>
          </MotionFadeIn>

          <MotionFadeIn delay={0.34} distance={16} duration={0.75}>
            <div className="flex flex-row items-center gap-3.5 pt-2">
              <Button href="/products" size="lg" variant="primary">
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                <span>Get in Touch</span>
              </Button>
            </div>
          </MotionFadeIn>
        </div>
      </div>
    </section>
  );
}


