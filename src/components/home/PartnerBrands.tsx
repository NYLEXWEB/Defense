"use client";

import React from "react";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

// 1. Hikvision Official Vector Logo (Red HIK + Charcoal VISION with official slant & cuts)
export function HikvisionLogo({ className = "h-6 sm:h-7 md:h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="skewX(-11)">
        {/* H */}
        <path d="M 12 8 L 22 8 L 22 17 L 31 17 L 31 8 L 41 8 L 41 32 L 31 32 L 31 24 L 22 24 L 22 32 L 12 32 Z" fill="#E4002B" />
        {/* I */}
        <path d="M 45 8 L 54 8 L 54 32 L 45 32 Z" fill="#E4002B" />
        {/* K */}
        <path d="M 58 8 L 68 8 L 68 17 L 76 8 L 88 8 L 77 19 L 89 32 L 77 32 L 68 21 L 68 32 L 58 32 Z" fill="#E4002B" />
        {/* V */}
        <path d="M 94 8 L 105 8 L 111 23 L 117 8 L 127 8 L 117 32 L 105 32 Z" fill="#2C3138" />
        {/* I */}
        <path d="M 130 8 L 139 8 L 139 32 L 130 32 Z" fill="#2C3138" />
        {/* S */}
        <path d="M 143 25 C 143 29.5 147 32.5 154 32.5 C 162 32.5 166 29 166 24 C 166 18.5 158 17 152 16 C 147 15 145 13.5 145 11.5 C 145 9.5 148 8 153 8 C 158.5 8 162 10.5 162.5 14 L 171 14 C 170.5 8.5 164 4 153.5 4 C 145 4 137.5 7.5 137.5 12.5 C 137.5 17.5 143.5 19.5 150 20.5 C 156 21.5 158 22.5 158 24.5 C 158 26.5 154.5 28 150 28 C 144 28 140.5 25 140 21 L 131.5 21 C 132 25 136 29 143 25 Z" fill="#2C3138" />
        {/* I */}
        <path d="M 174 8 L 183 8 L 183 32 L 174 32 Z" fill="#2C3138" />
        {/* O */}
        <path d="M 187 20 C 187 12 192.5 7.5 200 7.5 C 207.5 7.5 213 12 213 20 C 213 28 207.5 32.5 200 32.5 C 192.5 32.5 187 28 187 20 Z M 195.5 20 C 195.5 24.5 197.5 27 200 27 C 202.5 27 204.5 24.5 204.5 20 C 204.5 15.5 202.5 13 200 13 C 197.5 13 195.5 15.5 195.5 20 Z" fill="#2C3138" />
        {/* N */}
        <path d="M 216 8 L 225 8 L 234 23 L 234 8 L 243 8 L 243 32 L 234 32 L 225 17 L 225 32 L 216 32 Z" fill="#2C3138" />
      </g>
    </svg>
  );
}

// 2. Dahua Technology Official Vector Logo (Red oval swirl mark + italic logotype + subtext)
export function DahuaLogo({ className = "h-6 sm:h-7 md:h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 38" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Red Oval Swirl Icon */}
      <g transform="translate(4, 3)">
        <path
          d="M 22 1 C 11.5 1 3 8.5 3 17.5 C 3 26.5 11.5 34 22 34 C 29.5 34 36.5 29.5 39.5 22.5 C 37 25 31.5 27.5 25 27.5 C 16 27.5 9 22 9 15.5 C 9 9 16 4.5 24.5 4.5 C 30 4.5 35 7 37.5 11 C 35.5 5 29.5 1 22 1 Z"
          fill="#E30613"
        />
        <circle cx="27" cy="15" r="4.5" fill="#E30613" />
      </g>
      {/* alhua logotype */}
      <g transform="translate(44, 4) skewX(-10)">
        {/* a */}
        <path d="M 12 11 C 7 11 3 14.5 3 19.5 C 3 24.5 7 28 12 28 C 15 28 17.5 26.5 19 24.5 L 19 27.5 L 25 27.5 L 25 11.5 L 19 11.5 L 19 14.5 C 17.5 12.5 15 11 12 11 Z M 14 16 C 17 16 19 18 19 20 C 19 22 17 23.5 14 23.5 C 11 23.5 9 22 9 20 C 9 18 11 16 14 16 Z" fill="#1E2328" />
        {/* l */}
        <path d="M 28 3 L 34 3 L 34 27.5 L 28 27.5 Z" fill="#1E2328" />
        {/* h */}
        <path d="M 37 3 L 43 3 L 43 13 C 44.5 11.5 47 10.5 50 10.5 C 55 10.5 58 13.5 58 18.5 L 58 27.5 L 52 27.5 L 52 19 C 52 16.5 50.5 15 48 15 C 45.5 15 43 16.5 43 19 L 43 27.5 L 37 27.5 Z" fill="#1E2328" />
        {/* u */}
        <path d="M 61 11.5 L 67 11.5 L 67 20 C 67 22.5 68.5 23.5 71 23.5 C 73.5 23.5 76 22 76 19.5 L 76 11.5 L 82 11.5 L 82 27.5 L 76 27.5 L 76 24.5 C 74.5 26.5 72 28 69 28 C 64 28 61 25 61 20 Z" fill="#1E2328" />
        {/* a */}
        <path d="M 93 11 C 88 11 84 14.5 84 19.5 C 84 24.5 88 28 93 28 C 96 28 98.5 26.5 100 24.5 L 100 27.5 L 106 27.5 L 106 11.5 L 100 11.5 L 100 14.5 C 98.5 12.5 96 11 93 11 Z M 95 16 C 98 16 100 18 100 20 C 100 22 98 23.5 95 23.5 C 92 23.5 90 22 90 20 C 90 18 92 16 95 16 Z" fill="#1E2328" />
      </g>
      {/* TECHNOLOGY */}
      <text x="52" y="36" fontFamily="Arial, sans-serif" fontSize="6.5" fontWeight="800" fill="#5A6065" letterSpacing="1.2">
        TECHNOLOGY
      </text>
    </svg>
  );
}

// 3. CP PLUS Official Vector Logo (4-corner aperture mark + red cross + bold CP PLUS typography)
export function CpPlusLogo({ className = "h-6 sm:h-7 md:h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 4 Corner Bracket Mark */}
      <g transform="translate(2, 4)">
        <path d="M 1 7 L 1 2 L 6 2" stroke="#D32F2F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 19 2 L 24 2 L 24 7" stroke="#D32F2F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 1 18 L 1 23 L 6 23" stroke="#D32F2F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 19 23 L 24 23 L 24 18" stroke="#D32F2F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        {/* Plus Symbol inside aperture */}
        <path d="M 6.5 12.5 L 18.5 12.5 M 12.5 6.5 L 12.5 18.5" stroke="#D32F2F" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      {/* CP PLUS text */}
      <g fill="#D32F2F" transform="translate(34, 5)">
        {/* C */}
        <path d="M 14 3 C 7 3 2 7.5 2 13.5 C 2 19.5 7 24 14 24 C 18 24 21 22.5 23 20 L 18 16.5 C 17 17.8 15.5 18.5 13.5 18.5 C 10 18.5 7.5 16.5 7.5 13.5 C 7.5 10.5 10 8.5 13.5 8.5 C 15.5 8.5 17 9.2 18 10.5 L 23 7 C 21 4.5 18 3 14 3 Z" />
        {/* P */}
        <path d="M 26 3.5 L 39 3.5 C 44 3.5 47 6 47 10.5 C 47 15 44 17.5 39 17.5 L 32 17.5 L 32 23.5 L 26 23.5 Z M 32 8.5 L 32 12.5 L 38 12.5 C 40 12.5 41 11.8 41 10.5 C 41 9.2 40 8.5 38 8.5 Z" />
        {/* Space + P */}
        <path d="M 52 3.5 L 65 3.5 C 70 3.5 73 6 73 10.5 C 73 15 70 17.5 65 17.5 L 58 17.5 L 58 23.5 L 52 23.5 Z M 58 8.5 L 58 12.5 L 64 12.5 C 66 12.5 67 11.8 67 10.5 C 67 9.2 66 8.5 64 8.5 Z" />
        {/* L */}
        <path d="M 76 3.5 L 82 3.5 L 82 18.5 L 94 18.5 L 94 23.5 L 76 23.5 Z" />
        {/* U */}
        <path d="M 97 3.5 L 103 3.5 L 103 16 C 103 18 104 19 106.5 19 C 109 19 110 18 110 16 L 110 3.5 L 116 3.5 L 116 16.5 C 116 21 112 24 106.5 24 C 101 24 97 21 97 16.5 Z" />
        {/* S */}
        <path d="M 120 18 C 120 21.5 123.5 24 129 24 C 135 24 138.5 21.5 138.5 18 C 138.5 14 133 13 128.5 12 C 124.5 11.2 123 10 123 8.5 C 123 7 125 6 128.5 6 C 132.5 6 135 7.5 135.5 9.5 L 140.5 9.5 C 140 5.5 135.5 2.5 128.5 2.5 C 122.5 2.5 117.5 5 117.5 9 C 117.5 13 122.5 14.5 127 15.2 C 131.5 16 133 16.8 133 18.5 C 133 20 131 20.8 128.5 20.8 C 124 20.8 121.5 19 121 17 L 120 18 Z" />
      </g>
    </svg>
  );
}

// 4. Honeywell Official Vector Logo (Signature Red Italic Logotype)
export function HoneywellLogo({ className = "h-5 sm:h-6 md:h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="#ED1C24" transform="skewX(-8) translate(5, 2)">
        {/* H */}
        <path d="M 4 4 L 12 4 L 12 11 L 20 11 L 20 4 L 28 4 L 28 24 L 20 24 L 20 17 L 12 17 L 12 24 L 4 24 Z" />
        {/* o */}
        <path d="M 31 14 C 31 8.5 35.5 5.5 41.5 5.5 C 47.5 5.5 52 8.5 52 14 C 52 19.5 47.5 24.5 41.5 24.5 C 35.5 24.5 31 19.5 31 14 Z M 38.5 14 C 38.5 17 39.5 18.5 41.5 18.5 C 43.5 18.5 44.5 17 44.5 14 C 44.5 11 43.5 9.5 41.5 9.5 C 39.5 9.5 38.5 11 38.5 14 Z" />
        {/* n */}
        <path d="M 55 6 L 62.5 6 L 62.5 9 C 64 7 66.5 5.5 70 5.5 C 75 5.5 78 8.5 78 13.5 L 78 24 L 70.5 24 L 70.5 15 C 70.5 12.5 69 11.5 67 11.5 C 64.5 11.5 62.5 13 62.5 15.5 L 62.5 24 L 55 24 Z" />
        {/* e */}
        <path d="M 81 14 C 81 8.5 85.5 5.5 91 5.5 C 96.5 5.5 100.5 8.5 100.5 14 C 100.5 15 L 100.5 16.5 L 88.5 16.5 C 89 18.5 90.5 19.5 92.5 19.5 C 94.5 19.5 96 18.5 96.5 17 L 101 17 C 100 21.5 96.5 24.5 91.5 24.5 C 85.5 24.5 81 19.5 81 14 Z M 88.5 12.5 L 93.5 12.5 C 93.5 10.5 92.5 9.5 91 9.5 C 89.5 9.5 88.5 10.5 88.5 12.5 Z" />
        {/* y */}
        <path d="M 103 6 L 110.5 6 L 114 15.5 L 117.5 6 L 125 6 L 117.5 23 C 115 28 111.5 30 106 30 L 103 30 L 103 24.5 L 105.5 24.5 C 107.5 24.5 109 23.5 110 21.5 Z" />
        {/* w */}
        <path d="M 125 6 L 132 6 L 134.5 16 L 137.5 6 L 143.5 6 L 146.5 16 L 149 6 L 156 6 L 151 24 L 144 24 L 140.5 13.5 L 137 24 L 130 24 Z" />
      </g>
    </svg>
  );
}

// 5. V-Guard Official Vector Logo (Signature Orange Sweeping Crest + Bold V-GUARD)
export function VGuardLogo({ className = "h-6 sm:h-7 md:h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 36" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orange Wing/Shield Logomark */}
      <g transform="translate(112, 1) scale(0.75)">
        <path
          d="M 38 2 C 45 1, 52 3, 58 1 C 56 4, 52 6, 48 7 C 54 8, 62 10, 64 13 C 60 14, 53 14, 48 15 C 45 19, 40 24, 34 26 C 27 28, 17 26, 10 20 C 14 18, 19 16, 23 13 C 17 12, 9 13, 2 16 C 6 12, 13 7, 20 4 C 27 2, 33 2, 38 2 Z"
          fill="#F58220"
        />
      </g>
      {/* V-GUARD Logotype */}
      <g fill="#F58220" transform="translate(4, 8)">
        {/* V */}
        <path d="M 1 1 L 7.5 1 L 12.5 16 L 17.5 1 L 24 1 L 16 22 L 9 22 Z" />
        {/* Hyphen */}
        <path d="M 26 10 L 33 10 L 33 13 L 26 13 Z" />
        {/* G */}
        <path d="M 47 1 C 40 1 35 6 35 11.5 C 35 17 40 22 47 22 C 53 22 57 18 57.5 12 L 47 12 L 47 8 L 63.5 8 L 63.5 21 L 58 21 L 56.5 18 C 54 20.5 50.5 22.5 46 22.5 C 37 22.5 30 17 30 11.5 C 30 6 37 0.5 47 0.5 C 52 0.5 56 2 59 4.5 L 55 8.5 C 53 7 50 5 47 5 Z" />
        {/* U */}
        <path d="M 66 1 L 72.5 1 L 72.5 14 C 72.5 17 74.5 18.5 77.5 18.5 C 80.5 18.5 82.5 17 82.5 14 L 82.5 1 L 89 1 L 89 14.5 C 89 20 84 22.5 77.5 22.5 C 71 22.5 66 20 66 14.5 Z" />
        {/* A */}
        <path d="M 98 1 L 105 1 L 112 22 L 105.5 22 L 104 17 L 99 17 L 97.5 22 L 91 22 Z M 100.5 12.5 L 102.5 12.5 L 101.5 7.5 Z" />
        {/* R */}
        <path d="M 114 1 L 124 1 C 128.5 1 131.5 3 131.5 7 C 131.5 10 129.5 12 126.5 12.5 L 132 22 L 125 22 L 120.5 13 L 120 13 L 120 22 L 114 22 Z M 120 5 L 120 9.5 L 123.5 9.5 C 125 9.5 126 8.8 126 7.25 C 126 5.7 125 5 123.5 5 Z" />
        {/* D */}
        <path d="M 134 1 L 143 C 150 1 154 5 154 11.5 C 154 18 150 22 143 22 L 134 22 Z M 140 5.5 L 140 17.5 L 143 C 146.5 17.5 148 15 148 11.5 C 148 8 146.5 5.5 143 5.5 Z" />
      </g>
    </svg>
  );
}

// 6. Sony Official Vector Logo (Classic Bold Serif Logotype)
export function SonyLogo({ className = "h-5 sm:h-6 md:h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 26" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="#111111" transform="translate(6, 2)">
        {/* S */}
        <path d="M 17 19 C 17 21 14.5 22.5 10.5 22.5 C 5 22.5 2 20 1.5 16 L 6 16 C 6.5 18 8 19 10.5 19 C 12.5 19 13.5 18 13.5 16.5 C 13.5 15 12.5 14.2 9 13.5 C 4 12.5 1.5 10.5 1.5 7 C 1.5 3 5 0.5 10 0.5 C 15 0.5 18 3 18.5 7 L 14 7 C 13.5 5 12 4 10 4 C 8 4 7 4.8 7 6 C 7 7.2 8 8 11.5 8.8 C 15.5 9.8 18 11.5 18 15 Z" />
        {/* O */}
        <path d="M 23 11.5 C 23 4.5 28 0.5 36.5 0.5 C 45 0.5 50 4.5 50 11.5 C 50 18.5 45 22.5 36.5 22.5 C 28 22.5 23 18.5 23 11.5 Z M 27.5 11.5 C 27.5 16 31 18.5 36.5 18.5 C 42 18.5 45.5 16 45.5 11.5 C 45.5 7 42 4.5 36.5 4.5 C 31 4.5 27.5 7 27.5 11.5 Z" />
        {/* N */}
        <path d="M 55 1 L 62 1 L 73 16.5 L 73 1 L 77.5 1 L 77.5 22 L 70.5 22 L 59.5 6.5 L 59.5 22 L 55 22 Z" />
        {/* Y */}
        <path d="M 83 1 L 89 1 L 95.5 11 L 102 1 L 108 1 L 98 15 L 98 22 L 93 22 L 93 15 Z" />
      </g>
    </svg>
  );
}

// 7. Panasonic Official Vector Logo (Official Panasonic Blue Solid Logotype)
export function PanasonicLogo({ className = "h-5 sm:h-6 md:h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 26" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="#005B9E" transform="translate(2, 3)">
        {/* P */}
        <path d="M 2 1 L 11 1 C 15 1 17.5 2.8 17.5 6 C 17.5 9.2 15 11 11 11 L 6 11 L 6 20 L 2 20 Z M 6 4.5 L 6 7.5 L 10.5 7.5 C 12 7.5 13 7 13 6 C 13 5 12 4.5 10.5 4.5 Z" />
        {/* a */}
        <path d="M 20 8 C 20 6 22 5 25 5 C 27.5 5 29.5 5.8 30.5 7 L 30.5 20 L 27 20 L 27 18 C 26 19.5 24 20.5 22 20.5 C 19.5 20.5 18 19 18 16.8 C 18 14.5 20 13.5 24 13 L 27 12.6 L 27 11.5 C 27 10 26 9 24.5 9 C 23 9 22 9.5 21.5 10.5 Z M 27 14.8 L 24.5 15.2 C 22.5 15.5 21.5 16 21.5 17.2 C 21.5 18.2 22.5 18.8 23.5 18.8 C 25.5 18.8 27 17.5 27 15.5 Z" />
        {/* n */}
        <path d="M 33 6 L 36.5 6 L 36.5 8 C 37.5 6.5 39.5 5.5 42 5.5 C 45 5.5 47 7.2 47 10.5 L 47 20 L 43 20 L 43 11.5 C 43 9.8 42 9 40.5 9 C 38.5 9 37 10.5 37 13 L 37 20 L 33 20 Z" />
        {/* a */}
        <path d="M 50 8 C 50 6 52 5 55 5 C 57.5 5 59.5 5.8 60.5 7 L 60.5 20 L 57 20 L 57 18 C 56 19.5 54 20.5 52 20.5 C 49.5 20.5 48 19 48 16.8 C 48 14.5 50 13.5 54 13 L 57 12.6 L 57 11.5 C 57 10 56 9 54.5 9 C 53 9 52 9.5 51.5 10.5 Z M 57 14.8 L 54.5 15.2 C 52.5 15.5 51.5 16 51.5 17.2 C 51.5 18.2 52.5 18.8 53.5 18.8 C 55.5 18.8 57 17.5 57 15.5 Z" />
        {/* s */}
        <path d="M 63 15.5 C 63 18.5 65.5 20.5 69.5 20.5 C 73 20.5 75 19 75 17 C 75 13.8 71.5 13 68 12.2 C 66 11.8 65 11.2 65 10.2 C 65 9.2 66.5 8.5 68.5 8.5 C 70.5 8.5 72 9.2 72.5 10.5 L 75.5 10.5 C 75 8 72.5 5.5 68.5 5.5 C 64.5 5.5 61.5 7.5 61.5 10.2 C 61.5 13 64.5 13.8 67.5 14.4 C 70 14.9 71.5 15.4 71.5 16.8 C 71.5 18 69.8 18.8 68 18.8 C 65.5 18.8 64 17.5 63.5 15.5 Z" />
        {/* o */}
        <path d="M 77 13 C 77 8.5 80.5 5.5 85 5.5 C 89.5 5.5 93 8.5 93 13 C 93 17.5 89.5 20.5 85 20.5 C 80.5 20.5 77 17.5 77 13 Z M 81 13 C 81 16 82.5 17.5 85 17.5 C 87.5 17.5 89 16 89 13 C 89 10 87.5 8.5 85 8.5 C 82.5 8.5 81 10 81 13 Z" />
        {/* n */}
        <path d="M 96 6 L 99.5 6 L 99.5 8 C 100.5 6.5 102.5 5.5 105 5.5 C 108 5.5 110 7.2 110 10.5 L 110 20 L 106 20 L 106 11.5 C 106 9.8 105 9 103.5 9 C 101.5 9 100 10.5 100 13 L 100 20 L 96 20 Z" />
        {/* i */}
        <path d="M 113 6 L 117 6 L 117 20 L 113 20 Z M 113 1 L 117 1 L 117 4 L 113 4 Z" />
        {/* c */}
        <path d="M 120 13 C 120 8.5 123 5.5 127.5 5.5 C 131 5.5 133 7.5 133.5 9.5 L 130 9.5 C 129.5 8.5 128.5 8 127 8 C 124.5 8 123.5 10 123.5 13 C 123.5 16 124.5 18 127 18 C 128.5 18 129.5 17.2 130 16.2 L 133.5 16.2 C 132.5 18.8 130.5 20.5 127 20.5 C 122.5 20.5 120 17.5 120 13 Z" />
      </g>
    </svg>
  );
}

// 8. D-Link Official Vector Logo (Signature Teal Logotype with distinctive serif & hyphen)
export function DLinkLogo({ className = "h-6 sm:h-7 md:h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="#007E9E" transform="translate(4, 2)">
        {/* D */}
        <path d="M 2 2 L 18 C 26.5 2 32 6.5 32 13.5 C 32 20.5 26.5 25 18 25 L 2 25 Z M 8.5 7 L 8.5 20 L 16.5 20 C 22 20 25.5 17 25.5 13.5 C 25.5 10 22 7 16.5 7 Z" />
        {/* Hyphen */}
        <path d="M 35 12 L 44 12 L 44 15 L 35 15 Z" />
        {/* L */}
        <path d="M 48 2 L 55 2 L 55 19.5 L 68 19.5 L 68 25 L 48 25 Z" />
        {/* i */}
        <path d="M 71 8 L 78 8 L 78 25 L 71 25 Z M 71 2 L 78 2 L 78 6 L 71 6 Z" />
        {/* n */}
        <path d="M 81 8 L 88 8 L 88 10.5 C 89.5 9 92 8 95 8 C 99.5 8 102.5 10.5 102.5 15 L 102.5 25 L 95.5 25 L 95.5 16 C 95.5 14 94 13 92.5 13 C 89.5 13 88 15 88 17.5 L 88 25 L 81 25 Z" />
        {/* k */}
        <path d="M 106 2 L 113 2 L 113 13 L 121 8 L 130 8 L 121 15 L 130 25 L 121 25 L 113 16.5 L 113 25 L 106 25 Z" />
      </g>
    </svg>
  );
}

// 9. TP-Link Official Vector Logo (Cyan Curved Mark + Dot + Modern tp-link logotype)
export function TpLinkLogo({ className = "h-7 sm:h-8 md:h-9 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 34" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cyan Curved Icon */}
      <g transform="translate(2, 3)">
        <path
          d="M 4 12 C 4 6.8 8.2 2.5 13.5 2.5 C 18.8 2.5 23 6.8 23 12 L 23 19 L 17.5 19 L 17.5 12 C 17.5 9.8 15.7 8 13.5 8 C 11.3 8 9.5 9.8 9.5 12 L 9.5 22 L 4 22 Z"
          fill="#00A3DA"
        />
        <circle cx="20.5" cy="4.5" r="2.8" fill="#00A3DA" />
      </g>
      {/* tp-link text */}
      <g fill="#33383F" transform="translate(32, 6)">
        {/* t */}
        <path d="M 2 4 L 6 4 L 6 0 L 10 0 L 10 4 L 14 4 L 14 7.5 L 10 7.5 L 10 14 C 10 15.5 11 16 12.5 16 C 13.2 16 13.8 15.8 14 15.5 L 14 19 C 13.2 19.4 12 19.5 10.5 19.5 C 7.5 19.5 6 17.5 6 14.5 L 6 7.5 L 2 7.5 Z" />
        {/* p */}
        <path d="M 16 4 L 20 4 L 20 6.5 C 21 5 23 4 25.5 4 C 29 4 31.5 6.5 31.5 11.5 C 31.5 16.5 29 19 25.5 19 C 23 19 21 18 20 16.5 L 20 24 L 16 24 Z M 20 11.5 C 20 14.5 21.5 16 23.5 16 C 27.5 16 27.5 14.5 27.5 11.5 C 27.5 8.5 25.5 7 23.5 7 C 21.5 7 20 8.5 20 11.5 Z" />
        {/* Hyphen */}
        <path d="M 34 10 L 39 10 L 39 12.5 L 34 12.5 Z" />
        {/* l */}
        <path d="M 42 0 L 46 0 L 46 19 L 42 19 Z" />
        {/* i */}
        <path d="M 49 4 L 53 4 L 53 19 L 49 19 Z M 49 0 L 53 0 L 53 2.8 L 49 2.8 Z" />
        {/* n */}
        <path d="M 56 4 L 60 4 L 60 6 C 61 4.8 62.5 4 64.5 4 C 67.5 4 69 6 69 9.5 L 69 19 L 65 19 L 65 10.5 C 65 8.5 64 7.5 62.5 7.5 C 61 7.5 60 8.5 60 10.5 L 60 19 L 56 19 Z" />
        {/* k */}
        <path d="M 72 0 L 76 0 L 76 9.5 L 81.5 4 L 86.5 4 L 81 9.5 L 87 19 L 82 19 L 77.5 12 L 76 13.5 L 76 19 L 72 19 Z" />
      </g>
    </svg>
  );
}

// 10. Samsung Official Vector Logo (Iconic Blue Logotype with custom 'A' without crossbar)
export function SamsungLogo({ className = "h-5 sm:h-6 md:h-7 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 26" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <g fill="#0C4DA2" transform="translate(2, 3)">
        {/* S */}
        <path d="M 12 15 C 12 17.5 9.5 19 6 19 C 3 19 1 17.5 0.5 15 L 4.5 15 C 4.8 16 5.5 16.5 6.5 16.5 C 7.5 16.5 8 16 8 15.2 C 8 14.5 7.2 14 5 13.2 C 2 12.2 0.5 10.5 0.5 7.5 C 0.5 4.5 3 2.5 6.5 2.5 C 10 2.5 12 4.5 12.5 7 L 8.5 7 C 8.2 5.8 7.5 5.2 6.5 5.2 C 5.5 5.2 4.8 5.8 4.8 6.5 C 4.8 7.2 5.5 7.6 7.5 8.2 C 10.5 9.2 12 11 12 15 Z" />
        {/* A (No Crossbar) */}
        <path d="M 16 2.5 L 21 2.5 L 27 19 L 22.5 19 L 21.2 15 L 15.8 15 L 14.5 19 L 10 19 Z M 18.5 6 L 17 11.5 L 20 11.5 Z" />
        {/* M */}
        <path d="M 28 2.5 L 34 2.5 L 37.5 13 L 41 2.5 L 47 2.5 L 47 19 L 42.5 19 L 42.5 7.5 L 39 19 L 36 19 L 32.5 7.5 L 32.5 19 L 28 19 Z" />
        {/* S */}
        <path d="M 60 15 C 60 17.5 57.5 19 54 19 C 51 19 49 17.5 48.5 15 L 52.5 15 C 52.8 16 53.5 16.5 54.5 16.5 C 55.5 16.5 56 16 56 15.2 C 56 14.5 55.2 14 53 13.2 C 50 12.2 48.5 10.5 48.5 7.5 C 48.5 4.5 51 2.5 54.5 2.5 C 58 2.5 60 4.5 60.5 7 L 56.5 7 C 56.2 5.8 55.5 5.2 54.5 5.2 C 53.5 5.2 52.8 5.8 52.8 6.5 C 52.8 7.2 53.5 7.6 55.5 8.2 C 58.5 9.2 60 11 60 15 Z" />
        {/* U */}
        <path d="M 62 2.5 L 66.5 2.5 L 66.5 14 C 66.5 16 67.5 16.5 69.5 16.5 C 71.5 16.5 72.5 16 72.5 14 L 72.5 2.5 L 77 2.5 L 77 14 C 77 18 74 19.5 69.5 19.5 C 65 19.5 62 18 62 14 Z" />
        {/* N */}
        <path d="M 79 2.5 L 84 2.5 L 90.5 13 L 90.5 2.5 L 95 2.5 L 95 19 L 90 19 L 83.5 8.5 L 83.5 19 L 79 19 Z" />
        {/* G */}
        <path d="M 109 10.5 L 114 10.5 L 114 17 C 112 18.5 109 19.5 105 19.5 C 99 19.5 96 15 96 11 C 96 6.5 100 2.5 106 2.5 C 109.5 2.5 112.5 4 113.5 6 L 109 7.2 C 108.5 6 107.5 5.2 106 5.2 C 103 5.2 100.5 7.8 100.5 11 C 100.5 14.2 103 16.5 105.5 16.5 C 107.5 16.5 109 15.5 109 14.5 L 109 13.5 L 105 13.5 L 105 10.5 Z" />
      </g>
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
                  className="bg-white rounded-2xl px-4 py-5 sm:px-5 sm:py-6 border border-neutral-200/80 shadow-sm hover:shadow-md hover:border-[#00C689]/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center min-h-[72px] sm:min-h-[80px]"
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
