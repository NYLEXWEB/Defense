"use client";

import React from "react";
import Image from "next/image";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

// 10 Brand Images from public/brand/ directory in numerical order 1 to 10
const brandList = [
  { id: 1, src: "/brand/1.png", name: "Hikvision" },
  { id: 2, src: "/brand/2.png", name: "Dahua" },
  { id: 3, src: "/brand/3.png", name: "CP PLUS" },
  { id: 4, src: "/brand/4.png", name: "Honeywell" },
  { id: 5, src: "/brand/5.png", name: "V-Guard" },
  { id: 6, src: "/brand/6.png", name: "Sony" },
  { id: 7, src: "/brand/7.png", name: "Panasonic" },
  { id: 8, src: "/brand/8.png", name: "D-Link" },
  { id: 9, src: "/brand/9.png", name: "TP-Link" },
  { id: 10, src: "/brand/10.png", name: "Samsung" },
];

export function PartnerBrands() {
  return (
    <section className="py-14 sm:py-18 bg-[#EDF1EF] border-y border-neutral-200/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Solid Green Rectangular Banner */}
        <MotionFadeIn delay={0.1}>
          <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-8 sm:py-3 mb-8 sm:mb-10 shadow-sm">
            <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block">
              OUR PARTNER BRANDS
            </span>
          </div>
        </MotionFadeIn>

        {/* 10 Brand Cards in exact order 1 to 10 */}
        <MotionStaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto" staggerDelay={0.06}>
          {brandList.map((brand) => {
            return (
              <MotionStaggerItem key={brand.id}>
                <div
                  className="bg-white rounded-2xl p-3 sm:p-4 border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-[#00C689]/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-h-[76px] sm:min-h-[88px] group"
                >
                  <div className="relative w-full h-12 sm:h-14 flex items-center justify-center">
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
                      className="object-contain group-hover:scale-105 transition-transform duration-300 p-1"
                    />
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
