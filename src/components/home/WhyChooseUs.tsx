"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

interface FAQItem {
  id: string;
  title: string;
  description: string;
}

const whyChooseUsData: FAQItem[] = [
  {
    id: "quality-products",
    title: "Quality Products",
    description: "We offer high-quality CCTV products from reputable brands",
  },
  {
    id: "competitive-prices",
    title: "Competitive Prices",
    description: "We offer competitive pricing without compromising on quality",
  },
  {
    id: "expert-installation",
    title: "Expert Installation",
    description: "Our team of experts will install and set up your CCTV system",
  },
  {
    id: "exceptional-customer-service",
    title: "Exceptional Customer Service",
    description: "We provide dedicated customer support and service",
  },
];

export function WhyChooseUs() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "quality-products": true,
    "competitive-prices": true,
    "expert-installation": true,
    "exceptional-customer-service": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white border-b border-neutral-200/70 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Solid Green Rectangular Banner */}
        <MotionFadeIn delay={0.1}>
          <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-8 shadow-sm">
            <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block">
              WHY CHOOSE US
            </span>
          </div>
        </MotionFadeIn>

        {/* Clean, Normal List with Dropdown Arrow Icon */}
        <MotionStaggerContainer className="space-y-4 max-w-4xl" staggerDelay={0.08}>
          {whyChooseUsData.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <MotionStaggerItem key={item.id}>
                <div
                  className="py-3 border-b border-neutral-200/70 last:border-b-0 transition-colors"
                >
                  {/* Clickable Header with Bullet and Arrow */}
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between gap-4 text-left py-1.5 group focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl sm:text-2xl leading-none text-[#222524] select-none font-bold mt-0.5">
                        •
                      </span>
                      <span className="text-base sm:text-lg md:text-xl font-bold text-[#222524] group-hover:text-[#008D62] transition-colors">
                        {item.title}
                      </span>
                    </div>

                    {/* Dropdown Arrow */}
                    <div className="flex items-center justify-center p-1 text-neutral-400 group-hover:text-[#008D62] transition-colors">
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#008D62]" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* Dropdown Answer Content */}
                  {isOpen && (
                    <div className="pl-6 sm:pl-7 pt-1.5 pb-2 text-sm sm:text-base md:text-lg text-[#555c59] leading-relaxed animate-in fade-in duration-200">
                      <span className="text-neutral-400 font-semibold mr-1.5">:</span>
                      {item.description}
                    </div>
                  )}
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerContainer>
      </div>
    </section>
  );
}
