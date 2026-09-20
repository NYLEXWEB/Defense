import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Sun,
  CheckCircle2,
  Phone,
  ArrowRight,
  Zap,
  BatteryCharging,
  ShieldCheck,
  TrendingDown,
  Home,
  Building2,
  HelpCircle,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import {
  BreadcrumbJsonLd,
  ServiceJsonLd,
  FAQJsonLd,
} from "@/components/seo/JsonLd";
import { FAQItem } from "@/data/faq";

export const metadata: Metadata = constructMetadata({
  title: "Solar Panel Installation & Solar Power Systems in Kollam | Defense Security",
  description:
    "Professional on-grid, off-grid & hybrid solar panel installation, solar UPS power backups, and KSEB net-metering solar energy solutions in Kollam, Kerala.",
  canonicalPath: "/solar-system-installation",
  keywords: [
    "Solar panel installation Kollam",
    "Solar system installation Kerala",
    "On-grid solar systems Kollam",
    "Off-grid solar power Kerala",
    "Rooftop solar installation Kollam",
    "Solar inverter battery Kollam",
    "Solar CCTV power backup Kerala",
    "Best solar company in Kollam",
  ],
});

const solarFaqs: FAQItem[] = [
  {
    id: "on-grid-vs-off-grid",
    question: "What is the difference between On-Grid and Off-Grid solar systems in Kerala?",
    answer:
      "On-grid solar systems are connected directly to the KSEB electrical grid, allowing you to export surplus solar energy and reduce monthly power bills via net metering. Off-grid systems use heavy-duty battery banks to store solar power for total electrical independence during blackouts.",
    category: "pricing",
  },
  {
    id: "solar-cctv-backup-reliability",
    question: "Can solar systems power CCTV surveillance cameras during power cuts in Kollam?",
    answer:
      "Yes. We design dedicated hybrid solar inverter setups that ensure your CCTV cameras, NVRs, and security lights remain fully powered 24/7 without interruption, even during prolonged Kerala monsoon power outages.",
    category: "services",
  },
  {
    id: "kseb-net-metering-assistance",
    question: "Does Defense Security assist with KSEB approvals and solar net-metering applications?",
    answer:
      "Yes. Our engineering team manages complete documentation, KSEB feasibility verification, bi-directional net-meter installation, and grid synchronization testing for homes and businesses across Kollam.",
    category: "support",
  },
];

export default function SolarSystemInstallationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Services",
            url: "/services",
          },
          {
            name: "Solar System Installation",
            url: "/solar-system-installation",
          },
        ]}
      />
      <ServiceJsonLd
        name="Solar Panel & Solar Energy System Installation in Kollam"
        description="Comprehensive on-grid, off-grid rooftop solar energy setups, solar CCTV power backups, inverter systems, and maintenance in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/solar-system-installation`}
        serviceType="Solar Energy & Electrical Power Systems"
        areaServed="Kollam, Kerala"
      />
      <FAQJsonLd items={solarFaqs} />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Clean Green Energy &amp; 24/7 Power Security</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                Solar System Installation in Kollam, Kerala
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Slash your monthly electricity bills and ensure uninterrupted security with high-efficiency <strong>rooftop solar panel installations, hybrid solar inverters, and battery backups</strong> engineered for homes and commercial establishments across Kollam.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Tier-1 Mono PERC Panels</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>KSEB Net-Metering</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Up to 80% Bill Savings</span>
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
                <a
                  href={`tel:${siteConfig.phones[0].raw}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shadow-md active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.phones[0].display}</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#06221a] text-white hover:bg-[#003828] border border-[#00C689]/30 transition-all shadow-sm"
                >
                  <span>Request Solar Estimate</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-2 sm:p-3 rounded-[32px] border-2 border-[#00C689] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 sm:h-96 w-full rounded-[24px] overflow-hidden">
                  <Image
                    src="/images/sectors/solar-panel.jpg"
                    alt="High-Efficiency Rooftop Solar Panel Installation in Kollam Kerala"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00C689]">
                      CLEAN ENERGY SYSTEMS • KOLLAM
                    </span>
                    <h3 className="text-white font-extrabold text-lg sm:text-xl mt-1">
                      Certified Rooftop Solar &amp; Inverter Integration
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLAR SOLUTIONS GRID */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block bg-[#00C689] px-5 py-2 mb-3">
                <span className="text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm">
                  SOLAR PACKAGES
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight font-heading">
                Tailored Solar Power Solutions
              </h2>
              <p className="text-sm sm:text-base text-[#555c59] mt-3">
                Built to handle Kerala weather conditions with high corrosion-resistant aluminum mounting structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Residential Rooftop Solar (3kW - 10kW)
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Compact high-efficiency solar arrays designed for Kerala home rooftops. Seamlessly power air conditioners, refrigerators, water pumps, and home lighting.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Commercial &amp; Industrial On-Grid (10kW - 100kW+)
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Heavy-duty solar installations for hospitals, schools, hotels, and retail showrooms with high daytime loads, drastically reducing commercial electricity tariffs.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Solar CCTV &amp; Security Power Backup
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Hybrid solar inverters paired with lithium/tubular battery banks dedicated to keeping surveillance systems, remote gates, and intercoms operational 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222524] tracking-tight font-heading">
              Why Switch to Solar with Defense Security?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingDown,
                title: "Massive Cost Savings",
                desc: "Cut electricity bills by up to 80-90% with net-metering energy credits.",
              },
              {
                icon: Zap,
                title: "Monsoon Proof Backup",
                desc: "Pure sine-wave power prevents damage to sensitive electronic devices.",
              },
              {
                icon: ShieldCheck,
                title: "25-Year Performance Warranty",
                desc: "Long-lasting Tier-1 panels backed by manufacturer warranties.",
              },
              {
                icon: Sun,
                title: "Turnkey KSEB Approvals",
                desc: "We handle all liaising, net-metering paperwork, and grid testing.",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#222524]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555c59] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQS */}
        <section className="bg-[#F8FAF9] py-14 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#008D62] bg-[#E8F8F2] px-3.5 py-1 rounded-full mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222524] tracking-tight">
                Solar System Installation FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {solarFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-2"
                >
                  <h3 className="text-base font-bold text-[#222524]">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-[#555c59] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA BOX */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Ready to Go Solar &amp; Secure Your Power?
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
                Get a customized rooftop solar feasibility report for your home or business in Kollam.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-[#222524] hover:bg-neutral-100 transition-all shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#00C689]" />
                <span>Call {siteConfig.phones[0].display}</span>
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shadow-md"
              >
                <span>Book Solar Survey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
