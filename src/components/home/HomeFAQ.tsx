"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeFaqs } from "@/data/faq";
import { siteConfig } from "@/data/site";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

export function HomeFAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-white border-t border-neutral-200/70 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solid Green Rectangular Badge matching Why Choose Us */}
        <MotionFadeIn delay={0.1}>
          <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-8 shadow-sm">
            <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block font-sans">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
        </MotionFadeIn>

        {/* Clean, Normal List with Bullet & Dropdown Arrow matching reference image */}
        <MotionStaggerContainer className="space-y-4 max-w-4xl" staggerDelay={0.06}>
          {homeFaqs.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <MotionStaggerItem key={item.id}>
                <div className="py-3.5 border-b border-neutral-200/70 last:border-b-0 transition-colors">
                  {/* Clickable Header with Bullet and Arrow */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-start justify-between gap-4 text-left py-1 group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl sm:text-2xl leading-none text-[#222524] select-none font-bold mt-0.5">
                        •
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#222524] group-hover:text-[#008D62] transition-colors leading-snug">
                        {item.question}
                      </h3>
                    </div>

                    {/* Dropdown Arrow */}
                    <div className="flex items-center justify-center p-1 text-neutral-400 group-hover:text-[#008D62] transition-colors shrink-0 mt-0.5">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#008D62]" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Answer with colon prefix matching reference image */}
                  {isOpen && (
                    <div className="pl-6 sm:pl-7 pt-2 pb-2 text-sm sm:text-base md:text-lg text-[#555c59] leading-relaxed animate-in fade-in duration-200">
                      <span className="text-neutral-400 font-semibold mr-1.5">:</span>
                      {item.answer}
                    </div>
                  )}
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerContainer>

        {/* Consultation Prompt */}
        <MotionFadeIn delay={0.4} className="mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-3xl bg-[#F8FAF9] border border-neutral-200/80">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62] shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#222524]">
                  Have more questions about CCTV installation?
                </p>
                <p className="text-xs sm:text-sm text-[#555c59]">
                  Get a free site inspection and customized estimate across Kollam.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 justify-center">
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#06221a] text-white hover:bg-[#008D62] transition-all shadow-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#00C689]" />
                <span>Call Us</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shadow-xs"
              >
                <span>Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </MotionFadeIn>
      </div>
    </section>
  );
}
