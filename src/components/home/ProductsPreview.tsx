"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { productsData } from "@/data/products";
import { MotionFadeIn, MotionStaggerContainer, MotionStaggerItem } from "@/components/ui/MotionWrapper";

export function ProductsPreview() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white border-b border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Header with Solid Green Rectangle Banner */}
        <MotionFadeIn className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" delay={0.1}>
          <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-7 sm:py-3 mb-5 shadow-sm">
            <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block">
              OUR PRODUCTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#222524] mb-3">
            Smart Solutions for a Safer Tomorrow
          </h2>

          <p className="text-base sm:text-lg text-[#555c59] font-normal">
            Explore our range of security and automation products
          </p>
        </MotionFadeIn>

        {/* 2-Column Exact Product Grid with Staggered Entrance */}
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-16 lg:gap-y-16" staggerDelay={0.08}>
          {productsData.map((product) => (
            <MotionStaggerItem key={product.id}>
              <div
                className="flex flex-col sm:flex-row items-center sm:items-center gap-6 p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200/80 hover:border-[#00C689]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 group relative"
              >
                {/* Product Visual with subtle corner-frame line animation */}
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 shrink-0 rounded-2xl bg-[#FAFAFA] border border-neutral-100 p-2 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-400 corner-frame-box">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 160px, 180px"
                    className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info & WhatsApp Enquiry */}
                <div className="flex-1 flex flex-col justify-between text-center sm:text-left">
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#222524] tracking-tight uppercase group-hover:text-[#008D62] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555c59] leading-relaxed mt-1.5 whitespace-pre-line">
                      {product.description}
                    </p>
                  </div>

                  {/* Stylish WhatsApp Enquiry Button with subtle shine sweep */}
                  <div className="pt-4">
                    <a
                      href={`https://wa.me/917025552265?text=${encodeURIComponent(product.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#1faa53] shadow-sm hover:shadow-md transition-all duration-300 active:scale-95 group/btn shine-btn hover:-translate-y-0.5"
                      aria-label={`Enquire about ${product.name} on WhatsApp`}
                    >
                      <FaWhatsapp className="w-4 h-4 text-white shrink-0" />
                      <span>Enquire on WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </section>
  );
}
