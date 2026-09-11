"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, Home, GraduationCap, Bus } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

const sectorIcons = {
  home: Home,
  office: Building,
  school: GraduationCap,
  bus: Bus,
};

export function WhoWeAre() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF9] border-y border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block with Signature Green Rectangle Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <MotionFadeIn className="lg:col-span-8" delay={0.1}>
            {/* Provided Image Style: Solid Green Rectangular Banner */}
            <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-5 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#222524] leading-[1.15] text-balance">
              Dedicated to delivering top-quality security cameras & surveillance systems.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#555c59] leading-relaxed max-w-3xl">
              {siteConfig.description} {siteConfig.story}
            </p>
          </MotionFadeIn>

          <MotionFadeIn className="lg:col-span-4 lg:text-right" delay={0.25}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#06221a] bg-white hover:bg-[#00C689] hover:text-[#06221a] border border-neutral-200/90 shadow-sm transition-all duration-300 shine-btn hover:-translate-y-0.5"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MotionFadeIn>
        </div>

        {/* 4 Application Areas Grid: HOME, OFFICE, SCHOOL, BUS */}
        <div>
          <MotionFadeIn delay={0.15}>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-bold uppercase tracking-wider text-[#666e6b]">
                Supported Application Sectors
              </p>
              <span className="text-xs text-[#838b88] hidden sm:inline">
                From Single Properties to Enterprise Fleets
              </span>
            </div>
          </MotionFadeIn>

          <MotionStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {siteConfig.sectors.map((sector) => {
              const Icon = sectorIcons[sector.id as keyof typeof sectorIcons] || Home;
              return (
                <MotionStaggerItem key={sector.id}>
                  <div
                    className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-[#00C689]/60 hover:-translate-y-1 transition-all duration-400 flex flex-col corner-frame-box"
                  >
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={sector.image}
                        alt={`${sector.title} Security Solutions`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#008D62] shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-block px-3 py-1 font-extrabold uppercase tracking-wider bg-[#00C689] text-white text-xs shadow-sm">
                          {sector.title}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-base font-bold text-[#222524] group-hover:text-[#008D62] transition-colors">
                          {sector.tagline}
                        </h3>
                      </div>
                      <div className="pt-3 mt-3 border-t border-neutral-100 flex items-center text-xs font-semibold text-[#008D62] group-hover:text-[#00C689] transition-colors">
                        <span>Precision Coverage</span>
                      </div>
                    </div>
                  </div>
                </MotionStaggerItem>
              );
            })}
          </MotionStaggerContainer>
        </div>
      </div>
    </section>
  );
}
