import React from "react";
import { partnerBrands } from "@/data/partners";

export function PartnerBrands() {
  return (
    <section className="py-16 bg-[#F8FAF9] border-y border-neutral-200/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[#008D62] mb-2">
            Industry Standard Hardware
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-[#222524]">
            Authorized & Trusted Technology Partners
          </h2>
          <p className="text-xs sm:text-sm text-[#555c59] mt-2">
            We deploy tier-one surveillance optics and networking equipment from global manufacturers.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
          {partnerBrands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-200/70 hover:border-[#00C689]/60 hover:shadow-md transition-all flex flex-col items-center justify-center text-center group"
            >
              <span className="text-sm sm:text-base font-black tracking-wider text-[#222524] group-hover:text-[#008D62] transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-[#838b88] mt-1 font-medium">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
