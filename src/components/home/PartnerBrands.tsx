"use client";

import React from "react";
import Image from "next/image";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

// 10 Brand Images from public/images/brand/ directory
const brandList = [
  { id: 1, src: "/images/brand/hikvision-cctv-partner-logo.webp", name: "Hikvision", alt: "Hikvision CCTV Security Cameras and DVR Systems Dealer Kollam Kerala" },
  { id: 2, src: "/images/brand/dahua-technology-partner-logo.webp", name: "Dahua", alt: "Dahua Technology HD IP Cameras and NVR Surveillance Kollam Kerala" },
  { id: 3, src: "/images/brand/cp-plus-security-partner-logo.webp", name: "CP PLUS", alt: "CP PLUS Security Cameras and Smart Surveillance Solutions Kerala" },
  { id: 4, src: "/images/brand/honeywell-security-partner-logo.webp", name: "Honeywell", alt: "Honeywell Commercial Security and Access Control Systems Kerala" },
  { id: 5, src: "/images/brand/v-guard-power-partner-logo.webp", name: "V-Guard", alt: "V-Guard Power Inverters and Surge Protectors for CCTV Systems" },
  { id: 6, src: "/images/brand/sony-sensors-partner-logo.webp", name: "Sony", alt: "Sony High-Resolution Image Sensor CCTV Security Cameras" },
  { id: 7, src: "/images/brand/panasonic-security-partner-logo.webp", name: "Panasonic", alt: "Panasonic Smart Surveillance and Video Intercom Systems Kollam" },
  { id: 8, src: "/images/brand/d-link-networking-partner-logo.webp", name: "D-Link", alt: "D-Link PoE Network Switches and Wireless WiFi Routers Kollam" },
  { id: 9, src: "/images/brand/tp-link-wifi-partner-logo.webp", name: "TP-Link", alt: "TP-Link Tapo Smart WiFi Cameras and Gigabit Network Setup Kerala" },
  { id: 10, src: "/images/brand/samsung-surveillance-partner-logo.webp", name: "Samsung", alt: "Samsung Security and Video Surveillance Technologies Kerala" },
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
                      alt={brand.alt}
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
