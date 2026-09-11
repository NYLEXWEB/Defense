import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building, Home, GraduationCap, Bus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/data/site";

const sectorIcons = {
  home: Home,
  office: Building,
  school: GraduationCap,
  bus: Bus,
};

export function WhoWeAre() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF9] border-y border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <SectionHeading
              badge="Who We Are"
              title="Dedicated to delivering top-quality security cameras & surveillance systems."
              subtitle={siteConfig.description}
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#06221a] bg-white hover:bg-[#00C689] hover:text-[#06221a] border border-neutral-200 shadow-sm transition-all duration-300"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 4 Application Areas Grid: HOME, OFFICE, SCHOOL, BUS */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-wider text-[#666e6b]">
              Supported Application Sectors
            </p>
            <span className="text-xs text-[#838b88]">From Single Properties to Enterprise Fleets</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.sectors.map((sector) => {
              const Icon = sectorIcons[sector.id as keyof typeof sectorIcons] || Home;
              return (
                <div
                  key={sector.id}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={`${sector.title} Security Solutions`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#008D62] shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-[#00C689] text-[#06221a]">
                        {sector.title}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#222524] mb-1.5">
                        {sector.tagline}
                      </h3>
                      <p className="text-xs text-[#555c59] leading-relaxed">
                        {sector.description}
                      </p>
                    </div>
                    <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center text-xs font-semibold text-[#008D62] group-hover:text-[#00C689] transition-colors">
                      <span>Precision Coverage</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
