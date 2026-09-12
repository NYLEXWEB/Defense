"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen min-h-[100dvh] flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-neutral-100">
      {/* Background Images: Responsive Mobile & Desktop */}
      
      {/* Mobile Background Image (Full height, no bottom white gaps) */}
      <div className="absolute inset-0 md:hidden z-0 w-full h-full">
        <Image
          src="/images/hero-mobile.png"
          alt="Defense CCTV Smart Security System - Mobile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Soft mobile gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/40 to-transparent pointer-events-none" />
      </div>

      {/* Desktop Background Image */}
      <div className="absolute inset-0 hidden md:block z-0 w-full h-full">
        <Image
          src="/images/hero-desktop-background.png"
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
        <div className="max-w-2xl space-y-5 sm:space-y-7">
          {/* Main Headline with Frame-Based Luxury Reveal */}
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

          {/* Description */}
          <MotionFadeIn delay={0.22} distance={18} duration={0.8}>
            <p className="text-base sm:text-lg md:text-xl text-[#444a47] leading-relaxed max-w-xl font-medium">
              {siteConfig.description}
            </p>
          </MotionFadeIn>

          {/* CTAs */}
          <MotionFadeIn delay={0.34} distance={16} duration={0.75}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
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
