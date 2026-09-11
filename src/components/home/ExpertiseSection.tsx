"use client";

import React from "react";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

// Crisp SVG Icons matching brochure style
export function MonitoringIcon({ className = "w-10 h-10 text-white shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 4 Monitors grid */}
      <rect x="6" y="6" width="16" height="11" rx="1.5" />
      <rect x="26" y="6" width="16" height="11" rx="1.5" />
      <rect x="6" y="20" width="16" height="11" rx="1.5" />
      <rect x="26" y="20" width="16" height="11" rx="1.5" />
      {/* Operator silhouette */}
      <circle cx="24" cy="33" r="3.5" fill="currentColor" />
      <path d="M16 43 C16 38.5, 19.5 37, 24 37 C28.5 37, 32 38.5, 32 43 Z" fill="currentColor" />
    </svg>
  );
}

export function IncidentIcon({ className = "w-10 h-10 text-white shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Document */}
      <rect x="10" y="10" width="22" height="32" rx="2" />
      <line x1="16" y1="20" x2="26" y2="20" />
      <line x1="16" y1="26" x2="26" y2="26" />
      <line x1="16" y1="32" x2="22" y2="32" />
      {/* Pen on left */}
      <path d="M6 24 L6 38 L10 38" />
      <path d="M6 24 L8 20 L10 24" />
      {/* Shield on top right */}
      <g transform="translate(24, 4)">
        <path d="M12 0 C12 0, 4 3, 4 3 L4 10 C4 15, 8 19, 12 21 C16 19, 20 15, 20 10 L20 3 C20 3, 12 0, 12 0 Z" fill="#00C689" stroke="white" strokeWidth="2.2" />
        <line x1="12" y1="6" x2="12" y2="12" stroke="white" strokeWidth="2" />
        <circle cx="12" cy="15" r="1" fill="white" />
      </g>
    </svg>
  );
}

export function AccessControlIcon({ className = "w-10 h-10 text-white shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer circle */}
      <circle cx="24" cy="24" r="19" />
      {/* Shield */}
      <path d="M24 11 C24 11, 16 14, 16 14 L16 22 C16 27.5, 19.5 32, 24 34 C28.5 32, 32 27.5, 32 22 L32 14 C32 14, 24 11, 24 11 Z" />
      {/* Keyhole */}
      <circle cx="24" cy="20" r="2.2" fill="currentColor" />
      <path d="M23 21.5 L25 21.5 L25.5 26.5 L22.5 26.5 Z" fill="currentColor" />
    </svg>
  );
}

export function OperatorsIcon({ className = "w-10 h-10 text-white shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Worker head with helmet */}
      <circle cx="19" cy="16" r="5" />
      <path d="M12 14 C12 9.5, 15 7.5, 19 7.5 C23 7.5, 26 9.5, 26 14 Z" fill="currentColor" />
      {/* Hard hat rim */}
      <line x1="10" y1="14" x2="28" y2="14" strokeWidth="2.8" />
      {/* Body / shoulders */}
      <path d="M10 34 C10 27, 14 25, 19 25 C21.5 25, 24 26, 26 27.5" />
      {/* Gear on right */}
      <g transform="translate(25, 18)">
        <circle cx="9" cy="9" r="4.5" strokeWidth="2" />
        <path d="M9 2 L9 4.5 M9 13.5 L9 16 M2 9 L4.5 9 M13.5 9 L16 9 M4 4 L5.8 5.8 M12.2 12.2 L14 14 M4 14 L5.8 12.2 M12.2 5.8 L14 4" strokeWidth="1.8" />
      </g>
      {/* Screwdriver tool */}
      <path d="M8 36 L26 36" strokeWidth="2.5" />
    </svg>
  );
}

export function AdvancedTechIcon({ className = "w-10 h-10 text-white shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Center lock in circle */}
      <circle cx="24" cy="24" r="10" />
      <rect x="20.5" y="23" width="7" height="5.5" rx="1" fill="currentColor" />
      <path d="M22 23 V20.5 C22 19.4 22.9 18.5 24 18.5 C25.1 18.5 26 19.4 26 20.5 V23" strokeWidth="1.8" />
      {/* Connected nodes */}
      <line x1="24" y1="14" x2="24" y2="8" />
      <circle cx="24" cy="6" r="2.5" />
      <line x1="24" y1="34" x2="24" y2="40" />
      <circle cx="24" cy="42" r="2.5" />
      <line x1="14" y1="24" x2="8" y2="24" />
      <circle cx="6" cy="24" r="2.5" />
      <line x1="34" y1="24" x2="40" y2="24" />
      <circle cx="42" cy="24" r="2.5" />
      {/* Diagonal nodes */}
      <line x1="17" y1="17" x2="12" y2="12" />
      <circle cx="10" cy="10" r="2" />
      <line x1="31" y1="31" x2="36" y2="36" />
      <circle cx="38" cy="38" r="2" />
    </svg>
  );
}

export function RiskAssessmentIcon({ className = "w-10 h-10 text-white shrink-0" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Document */}
      <rect x="10" y="6" width="20" height="32" rx="2" />
      <text x="12" y="18" fontFamily="'Arial Black', sans-serif" fontSize="6.5" fontWeight="bold" fill="currentColor" stroke="none">
        RISK
      </text>
      <line x1="12" y1="23" x2="24" y2="23" strokeWidth="2" />
      <line x1="12" y1="28" x2="22" y2="28" strokeWidth="2" />
      {/* Magnifying Glass on bottom-right */}
      <circle cx="28" cy="30" r="6.5" strokeWidth="2.3" fill="#00C689" />
      <line x1="33" y1="35" x2="40" y2="42" strokeWidth="3" />
    </svg>
  );
}

export function ExpertiseSection() {
  return (
    <section className="py-14 sm:py-18 bg-[#EDF1EF] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Signature Emerald Green Card with Asymmetrical Rounded Corners & Luxury Motion Reveal */}
        <MotionFadeIn delay={0.1} distance={20} duration={0.8}>
          <div className="bg-[#00C689] rounded-tl-[36px] sm:rounded-tl-[48px] rounded-br-[36px] sm:rounded-br-[48px] rounded-tr-xl rounded-bl-xl p-6 sm:p-10 md:p-12 shadow-md hover:shadow-xl transition-shadow duration-400">
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-center text-white mb-8 sm:mb-10 font-sans">
              OUR EXPERTISE
            </h2>

            {/* 6 Capabilities Grid (2 columns) with Staggered Entrance */}
            <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-8 sm:gap-x-12" staggerDelay={0.07}>
              {/* 1. 24/7 Monitoring & Surveillance */}
              <MotionStaggerItem>
                <div className="flex items-center gap-4 group">
                  <MonitoringIcon className="w-10 h-10 sm:w-11 sm:h-11 text-white shrink-0 group-hover:scale-105 transition-transform duration-300" />
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    24/7 Monitoring &amp; Surveillance
                  </span>
                </div>
              </MotionStaggerItem>

              {/* 4. Highly Skilled CCTV Operators */}
              <MotionStaggerItem>
                <div className="flex items-center gap-4 group">
                  <OperatorsIcon className="w-10 h-10 sm:w-11 sm:h-11 text-white shrink-0 group-hover:scale-105 transition-transform duration-300" />
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    Highly Skilled CCTV Operators
                  </span>
                </div>
              </MotionStaggerItem>

              {/* 2. Incident Response & Reporting */}
              <MotionStaggerItem>
                <div className="flex items-center gap-4 group">
                  <IncidentIcon className="w-10 h-10 sm:w-11 sm:h-11 text-white shrink-0 group-hover:scale-105 transition-transform duration-300" />
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    Incident Response &amp; Reporting
                  </span>
                </div>
              </MotionStaggerItem>

              {/* 5. Advanced Security Technology */}
              <MotionStaggerItem>
                <div className="flex items-center gap-4 group">
                  <AdvancedTechIcon className="w-10 h-10 sm:w-11 sm:h-11 text-white shrink-0 group-hover:scale-105 transition-transform duration-300" />
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    Advanced Security Technology
                  </span>
                </div>
              </MotionStaggerItem>

              {/* 3. Access Control & Perimeter Security */}
              <MotionStaggerItem>
                <div className="flex items-center gap-4 group">
                  <AccessControlIcon className="w-10 h-10 sm:w-11 sm:h-11 text-white shrink-0 group-hover:scale-105 transition-transform duration-300" />
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    Access Control &amp; Perimeter Security
                  </span>
                </div>
              </MotionStaggerItem>

              {/* 6. Risk Assessment & Security Consultation */}
              <MotionStaggerItem>
                <div className="flex items-center gap-4 group">
                  <RiskAssessmentIcon className="w-10 h-10 sm:w-11 sm:h-11 text-white shrink-0 group-hover:scale-105 transition-transform duration-300" />
                  <span className="text-base sm:text-lg font-bold text-white leading-tight">
                    Risk Assessment &amp; Security Consultation
                  </span>
                </div>
              </MotionStaggerItem>
            </MotionStaggerContainer>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
