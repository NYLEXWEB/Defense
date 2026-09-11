"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, CheckCircle2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { siteConfig } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 bg-white overflow-hidden bg-radial-gradient-hero">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00C689]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <SectionBadge className="mb-4">
                Defense Security & Surveillance • Est. 2016
              </SectionBadge>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#222524] leading-[1.08]">
                Protecting{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[#008D62]">
                    What Matters
                  </span>
                  <span className="absolute bottom-1.5 left-0 right-0 h-3 sm:h-4 bg-[#00C689]/25 -rotate-1 rounded-sm -z-0" />
                </span>{" "}
                Most.
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-[#555c59] leading-relaxed max-w-2xl font-normal">
              {siteConfig.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button href="/products" size="lg" variant="primary">
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                <span>Get in Touch</span>
              </Button>
            </div>

            {/* Micro Trust Indicators from PDF */}
            <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs sm:text-sm font-medium text-[#555c59]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                <span>Quality Products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                <span>Expert Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                <span>24/7 Monitoring</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/90 bg-white aspect-[4/5] group">
                <Image
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Security Camera Observation"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06221a]/80 via-[#06221a]/20 to-transparent" />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#222524]">
                        Secure Your World
                      </p>
                      <p className="text-[11px] text-[#666e6b]">
                        CCTV & Advanced Surveillance
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#06221a] text-[#00C689]">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="hidden sm:flex absolute -top-5 -left-5 p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-xl items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#00C689] animate-ping" />
                <div className="text-xs">
                  <span className="font-bold text-[#222524] block">Kollam & Beyond</span>
                  <span className="text-[#838b88] text-[10px]">Since 2016</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
