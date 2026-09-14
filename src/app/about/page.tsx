import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Target, Compass, ArrowRight, Home, Building, GraduationCap, Gem, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "About Defense Security Systems | Leading CCTV Specialists in Kollam Since 2016",
  description:
    "Learn about Defense Security Systems in Thevally, Kollam. Founded in 2016, delivering high-performance CCTV surveillance, gate automation, and smart security systems across Kerala.",
  canonicalPath: "/about",
  keywords: [
    "About Defense Security Systems Kollam",
    "CCTV company Kollam established 2016",
    "Security system specialists Kerala",
    "Surveillance camera experts Thevally Kollam",
    "Best CCTV installation agency Kollam",
    "CCTV sales and installation Kollam Kerala",
    "Smart security solutions Thevally",
  ],
});

const sectorIcons = {
  home: Home,
  office: Building,
  school: GraduationCap,
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "About Us",
            url: "/about",
          },
        ]}
      />
      <div className="pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Header Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="max-w-3xl">
            {/* Solid Green Rectangular Banner */}
            <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-8 sm:py-3 mb-6 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block">
                ABOUT DEFENSE SECURITY
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#222524] leading-[1.1]">
              Committed to safeguarding spaces since{" "}
              <span className="text-[#008D62]">2016.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-[#555c59] leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
        </section>

        {/* Story & Mission Editorial Split */}
        <section className="bg-[#F8FAF9] py-20 border-y border-neutral-200/70 mb-20 md:mb-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Narrative */}
              <div className="lg:col-span-7 space-y-10">
                {/* Our Story */}
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#222524]">
                      Our Story
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-[#333333] leading-relaxed font-normal">
                    {siteConfig.story}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#008D62]">
                    <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                    <span>Serving Homes, Businesses &amp; Institutions Across Kerala</span>
                  </div>
                </div>

                {/* Our Mission */}
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-neutral-200/80 shadow-sm space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                      <Target className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#222524]">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-base sm:text-lg text-[#333333] leading-relaxed font-normal">
                    {siteConfig.mission}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#008D62]">
                    <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                    <span>Safety, Security &amp; Complete Peace of Mind</span>
                  </div>
                </div>
              </div>

              {/* Right Visual Composition */}
              <div className="lg:col-span-5 relative">
                <div className="relative group">
                  <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-[#00C689]/40 via-[#008D62]/20 to-transparent blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square w-full border border-[#00C689]/30 bg-[#06221a] flex items-center justify-center">
                    <Image
                      src="/images/about/defense-security-systems-thevally-kollam-cctv-flyer.jpg"
                      alt="Defense Security Systems - Premier CCTV surveillance and electronic security solutions in Thevally Kollam Kerala"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Sectors Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
          <div className="mb-14">
            {/* Solid Green Rectangular Banner */}
            <div className="inline-block bg-[#00C689] px-6 py-2.5 sm:px-8 sm:py-3 mb-4 shadow-sm">
              <span className="text-white font-extrabold uppercase tracking-wider text-base sm:text-lg md:text-xl block">
                APPLICATION COVERAGE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight">
              Engineered for every environment.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#555c59] max-w-2xl leading-relaxed">
              Specialized systems configured for maximum reliability across homes, offices, schools, and jewelry showrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.sectors.map((sector) => {
              const Icon = sectorIcons[sector.id as keyof typeof sectorIcons] || Home;
              return (
                <div
                  key={sector.id}
                  className="bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={`${sector.title} CCTV camera surveillance and security installation in Kollam Kerala`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center text-[#008D62]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="absolute bottom-3 left-3 px-2.5 py-0.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#00C689] text-[#06221a]">
                      {sector.title}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#222524]">
                        {sector.tagline}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Footer Block */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">
                Ready to secure your premises?
              </h3>
              <p className="text-sm text-neutral-300">
                Speak directly with our technical team in Thevally, Kollam.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shrink-0"
            >
              <span>Consult Our Specialists</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
