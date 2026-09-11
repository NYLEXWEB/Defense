import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productsData } from "@/data/products";

export function ProductsPreview() {
  const featured = productsData.filter((p) => p.isFeatured);
  const secondary = productsData.filter((p) => !p.isFeatured);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading
            badge="Product Portfolio"
            title="Engineered surveillance & intelligent access systems."
            subtitle="From high-definition PTZ optical setups to automated perimeter security and unified smart living."
          />
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#008D62] hover:text-[#00C689] transition-colors self-start md:self-end group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Hero Dominant Category Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Main Primary Spotlight: CCTV Cameras IP & HD */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-neutral-900 text-white relative flex flex-col justify-end p-8 md:p-12 min-h-[420px] group">
            <Image
              src={productsData[1].image}
              alt={productsData[1].name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="relative z-10 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C689] text-[#06221a]">
                Flagship Surveillance
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {productsData[1].name}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed">
                {productsData[1].description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-neutral-200">
                {productsData[1].features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00C689] shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Highlight: WiFi Camera & DVR/NVR Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* WiFi Camera */}
            <div className="flex-1 rounded-3xl overflow-hidden bg-[#F8FAF9] border border-neutral-200/90 p-6 md:p-8 flex flex-col justify-between group hover:border-[#00C689]/60 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#008D62]">
                    Wireless Freedom
                  </span>
                  <h4 className="text-xl font-bold text-[#222524] mt-1">
                    {productsData[0].name}
                  </h4>
                  <p className="text-xs text-[#555c59] mt-2 leading-relaxed max-w-sm">
                    {productsData[0].description}
                  </p>
                </div>
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-neutral-200 shadow-sm">
                  <Image
                    src={productsData[0].image}
                    alt={productsData[0].name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-200/70 flex items-center justify-between text-xs font-semibold text-[#008D62]">
                <span>Instant Mobile Streaming</span>
                <ArrowRight className="w-4 h-4 text-[#00C689]" />
              </div>
            </div>

            {/* DVR and NVR */}
            <div className="flex-1 rounded-3xl overflow-hidden bg-[#F8FAF9] border border-neutral-200/90 p-6 md:p-8 flex flex-col justify-between group hover:border-[#00C689]/60 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#008D62]">
                    Storage & Management
                  </span>
                  <h4 className="text-xl font-bold text-[#222524] mt-1">
                    {productsData[2].name}
                  </h4>
                  <p className="text-xs text-[#555c59] mt-2 leading-relaxed max-w-sm">
                    {productsData[2].description}
                  </p>
                </div>
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-neutral-200 shadow-sm">
                  <Image
                    src={productsData[2].image}
                    alt={productsData[2].name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-neutral-200/70 flex items-center justify-between text-xs font-semibold text-[#008D62]">
                <span>Continuous Synchronized Archiving</span>
                <ArrowRight className="w-4 h-4 text-[#00C689]" />
              </div>
            </div>
          </div>
        </div>

        {/* Additional 5 Products Minimal Editorial Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          {[
            productsData[3], // Video Door Phones
            productsData[4], // Wifi Network
            productsData[5], // Remote Gate
            productsData[6], // Inverter system
            productsData[7], // Home Automation
          ].map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-2xl bg-white border border-neutral-200/70 hover:border-[#00C689]/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h5 className="text-sm font-bold text-[#222524] leading-snug">
                  {item.name}
                </h5>
                <p className="text-[11px] text-[#666e6b] mt-1 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
