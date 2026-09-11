"use client";

import React from "react";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

// Crisp SVG Logos matching brochure identities
export function HikvisionLogo({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="26"
        fontFamily="'Impact', 'Arial Black', sans-serif"
        fontSize="30"
        fontStyle="italic"
        fontWeight="900"
        letterSpacing="-0.5"
      >
        <tspan fill="#E4002B">HIK</tspan>
        <tspan fill="#2C3138">VISION</tspan>
      </text>
    </svg>
  );
}

export function DahuaLogo({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="36" cy="16" rx="13" ry="12" stroke="#E30613" strokeWidth="3" fill="none" />
      <text
        x="2"
        y="24"
        fontFamily="'Arial Black', sans-serif"
        fontSize="26"
        fontStyle="italic"
        fontWeight="900"
        fill="#1E2328"
        letterSpacing="-1.2"
      >
        alhua
      </text>
      <text
        x="22"
        y="33"
        fontFamily="'Arial', sans-serif"
        fontSize="6.5"
        fontWeight="700"
        fill="#5A6065"
        letterSpacing="0.8"
      >
        TECHNOLOGY
      </text>
    </svg>
  );
}

export function CpPlusLogo({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 3)">
        <path d="M2 4 L7 4 M2 4 L2 9" stroke="#D32F2F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M16 4 L11 4 M16 4 L16 9" stroke="#D32F2F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M2 19 L7 19 M2 19 L2 14" stroke="#D32F2F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M16 19 L11 19 M16 19 L16 14" stroke="#D32F2F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M5 11.5 L13 11.5 M9 7.5 L9 15.5" stroke="#D32F2F" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      <text
        x="24"
        y="22"
        fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
        fontSize="20"
        fontWeight="900"
        fill="#D32F2F"
        letterSpacing="0.5"
      >
        CP PLUS
      </text>
    </svg>
  );
}

export function HoneywellLogo({ className = "h-4 sm:h-5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 28" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="22"
        fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
        fontSize="24"
        fontWeight="900"
        fill="#ED1C24"
        letterSpacing="-0.3"
      >
        Honeywell
      </text>
    </svg>
  );
}

export function VGuardLogo({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(62, 0) scale(0.6)">
        <path
          d="M38 4 C43 2, 48 3, 52 2 C51 4, 48 6, 45 7 C49 8, 55 9, 58 11 C55 13, 50 13, 46 14 C44 17, 40 22, 36 24 C31 26, 23 25, 17 20 C12 21, 7 23, 1 24 C5 21, 10 18, 14 14 C18 9, 26 5, 38 4 Z"
          fill="none"
          stroke="#F58220"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </g>
      <text
        x="0"
        y="27"
        fontFamily="'Arial Black', sans-serif"
        fontSize="18"
        fontWeight="900"
        fill="#F58220"
        letterSpacing="0.5"
      >
        V-GUARD
      </text>
    </svg>
  );
}

export function SonyLogo({ className = "h-4 sm:h-5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 26" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2"
        y="20"
        fontFamily="'Times New Roman', 'Georgia', serif"
        fontSize="24"
        fontWeight="bold"
        fill="#111111"
        letterSpacing="4"
      >
        SONY
      </text>
    </svg>
  );
}

export function PanasonicLogo({ className = "h-4 sm:h-5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 26" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="0"
        y="20"
        fontFamily="'Arial Black', 'Helvetica Neue', sans-serif"
        fontSize="21"
        fontWeight="900"
        fill="#111111"
        letterSpacing="-0.5"
      >
        Panasonic
      </text>
    </svg>
  );
}

export function DLinkLogo({ className = "h-5 sm:h-6 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2"
        y="23"
        fontFamily="'Times New Roman', 'Georgia', serif"
        fontSize="26"
        fontWeight="bold"
        fill="#007E9E"
        letterSpacing="0"
      >
        D-Link
      </text>
    </svg>
  );
}

export function TpLinkLogo({ className = "h-6 sm:h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(2, 2)">
        <path
          d="M5 13 C5 7.8 9.2 3.5 14.5 3.5 C19.8 3.5 24 7.8 24 13 L24 20 L18.5 20 L18.5 13 C18.5 10.8 16.7 9 14.5 9 C12.3 9 10.5 10.8 10.5 13 L10.5 23 L5 23 Z"
          fill="#00A3DA"
        />
        <circle cx="21" cy="5.5" r="2.8" fill="#00A3DA" />
      </g>
      <text
        x="30"
        y="18"
        fontFamily="'Arial Black', sans-serif"
        fontSize="17"
        fontWeight="900"
        fill="#33383F"
        letterSpacing="-0.4"
      >
        tp-link
      </text>
      <text
        x="32"
        y="26"
        fontFamily="'Arial', sans-serif"
        fontSize="5.5"
        fontWeight="700"
        fill="#70767C"
        letterSpacing="0.6"
      >
        RELIABLY SMART
      </text>
    </svg>
  );
}

export function SamsungLogo({ className = "h-4 sm:h-5 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 26" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text
        x="2"
        y="20"
        fontFamily="'Arial Black', sans-serif"
        fontSize="21"
        fontWeight="900"
        fill="#0C4DA2"
        letterSpacing="1.5"
      >
        SAMSUNG
      </text>
    </svg>
  );
}

const brandList = [
  { name: "HIKVISION", component: HikvisionLogo },
  { name: "Dahua", component: DahuaLogo },
  { name: "CP PLUS", component: CpPlusLogo },
  { name: "Honeywell", component: HoneywellLogo },
  { name: "V-GUARD", component: VGuardLogo },
  { name: "SONY", component: SonyLogo },
  { name: "Panasonic", component: PanasonicLogo },
  { name: "D-Link", component: DLinkLogo },
  { name: "TP-Link", component: TpLinkLogo },
  { name: "SAMSUNG", component: SamsungLogo },
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

        {/* 10 Brand Cards (2 Rows of 5 on desktop) with Staggered Entrance */}
        <MotionStaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto" staggerDelay={0.06}>
          {brandList.map((brand) => {
            const LogoComponent = brand.component;
            return (
              <MotionStaggerItem key={brand.name}>
                <div
                  className="bg-white rounded-2xl px-4 py-4 sm:px-5 sm:py-5 border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-[#00C689]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-h-[64px] sm:min-h-[72px]"
                >
                  <LogoComponent />
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerContainer>
      </div>
    </section>
  );
}
