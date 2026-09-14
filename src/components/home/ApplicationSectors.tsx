"use client";

import React from "react";
import Image from "next/image";
import { Home, Building, GraduationCap, Gem } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

const sectorIcons = {
  home: Home,
  office: Building,
  school: GraduationCap,
  jewelry: Gem,
};

export function ApplicationSectors() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <MotionFadeIn className="text-center max-w-3xl mx-auto mb-14" delay={0.1}>
          <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-4 shadow-sm">
            <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block font-sans">
              APPLICATION COVERAGE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#222524] font-heading">
            Engineered for every environment.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#555c59] leading-relaxed">
            Specialized systems configured for maximum reliability across homes, offices, schools, and jewelry showrooms.
          </p>
        </MotionFadeIn>

        {/* 4 Application Sectors Grid: HOME, OFFICE, SCHOOL, BUS */}
        <MotionStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
          {siteConfig.sectors.map((sector) => {
            const Icon = sectorIcons[sector.id as keyof typeof sectorIcons] || Home;
            return (
              <MotionStaggerItem key={sector.id}>
                <div className="group relative rounded-3xl overflow-hidden bg-white border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-[#00C689]/60 hover:-translate-y-1 transition-all duration-400 flex flex-col h-full corner-frame-box">
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={`${sector.title} CCTV camera surveillance and security installation in Kollam, Kerala`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#008D62] shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#00C689] text-[#06221a] shadow-sm">
                        {sector.title}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#222524] group-hover:text-[#008D62] transition-colors">
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
    </section>
  );
}
