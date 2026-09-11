"use client";

import React from "react";
import Image from "next/image";
import { Camera, Settings, Wrench, Tv } from "lucide-react";
import { servicesData } from "@/data/services";
import { MotionFadeIn } from "@/components/ui/MotionWrapper";

const serviceIcons = {
  "cctv-installation": Camera,
  "system-design-and-integration": Settings,
  "maintenance-and-repair": Wrench,
  "monitoring-and-response": Tv,
};

export function ServicesPreview() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F8FAF9] border-y border-neutral-200/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Header with Solid Green Rectangle Banner */}
        <MotionFadeIn className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" delay={0.1}>
          <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-5 shadow-sm">
            <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block">
              OUR SERVICES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#222524] mb-3">
            Professional Security Services
          </h2>

          <p className="text-base sm:text-lg text-[#555c59] font-normal">
            Expert solutions for a safer and smarter environment
          </p>
        </MotionFadeIn>

        {/* 4 Alternating Zigzag Service Rows */}
        <div className="space-y-12 sm:space-y-16">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] || Camera;
            const isImageOnLeft = index % 2 === 1; // Row 2 and 4 have image on left

            return (
              <MotionFadeIn
                key={service.id}
                delay={0.12}
                direction={isImageOnLeft ? "right" : "left"}
                distance={24}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center py-4 border-b border-neutral-200/60 last:border-b-0 pb-12 last:pb-0">
                  {/* When image is on Left (Rows 2 & 4) */}
                  {isImageOnLeft ? (
                    <>
                      {/* Image Column */}
                      <div className="md:col-span-5 order-2 md:order-1">
                        <div className="p-1 sm:p-1.5 rounded-[28px] border-2 border-[#00C689] bg-white shadow-sm hover:shadow-lg transition-all duration-400 group">
                          <div className="relative h-56 sm:h-64 w-full rounded-[22px] overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Central Icon Chip */}
                      <div className="md:col-span-2 hidden md:flex justify-center order-2">
                        <div className="w-16 h-16 rounded-2xl bg-[#E8F8F2] border border-[#00C689]/30 flex items-center justify-center text-[#008D62] shadow-sm hover:scale-105 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-[#008D62]" />
                        </div>
                      </div>

                      {/* Text Column */}
                      <div className="md:col-span-5 order-1 md:order-3 space-y-3 text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black text-[#00C689] font-mono">
                            {service.number}
                          </span>
                          <span className="w-8 h-0.5 bg-[#00C689]" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222524] tracking-tight">
                          {service.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#555c59] leading-relaxed max-w-md">
                          {service.description}
                        </p>
                      </div>
                    </>
                  ) : (
                    /* When image is on Right (Rows 1 & 3) */
                    <>
                      {/* Text Column */}
                      <div className="md:col-span-5 space-y-3 text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black text-[#00C689] font-mono">
                            {service.number}
                          </span>
                          <span className="w-8 h-0.5 bg-[#00C689]" />
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222524] tracking-tight">
                          {service.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#555c59] leading-relaxed max-w-md">
                          {service.description}
                        </p>
                      </div>

                      {/* Central Icon Chip */}
                      <div className="md:col-span-2 hidden md:flex justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#E8F8F2] border border-[#00C689]/30 flex items-center justify-center text-[#008D62] shadow-sm hover:scale-105 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-[#008D62]" />
                        </div>
                      </div>

                      {/* Image Column */}
                      <div className="md:col-span-5">
                        <div className="p-1 sm:p-1.5 rounded-[28px] border-2 border-[#00C689] bg-white shadow-sm hover:shadow-lg transition-all duration-400 group">
                          <div className="relative h-56 sm:h-64 w-full rounded-[22px] overflow-hidden">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 40vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </MotionFadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
