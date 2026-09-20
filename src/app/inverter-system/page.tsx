import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Zap,
  BatteryCharging,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  Server,
  Home,
  Building,
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
  title: "Inverter UPS Systems & Power Backup in Kollam | Defense Security",
  description:
    "Pure sine wave home inverters, commercial online UPS systems, tubular & lithium battery backups for 24/7 uninterrupted power in Kollam, Kerala.",
  canonicalPath: "/inverter-system",
  keywords: [
    "Inverter system Kollam",
    "Home inverter installation Kollam",
    "Online UPS system Kerala",
    "Inverter battery dealers Kollam",
    "V-Guard inverter Kollam",
    "CCTV UPS power backup Kerala",
    "Pure sine wave inverter Kerala",
    "Commercial power backup Kollam",
  ],
});

const inverterFaqs: FAQItem[] = [
  {
    id: "pure-sine-wave-vs-square-wave",
    question: "Why is a Pure Sine Wave inverter essential for modern electronics and CCTV?",
    answer:
      "Pure sine wave inverters deliver smooth, grid-quality electricity with zero harmonic distortion. This prevents humming noises, overheating, and damage to sensitive equipment such as CCTV cameras, NVRs, LED TVs, refrigerators, and computer workstations.",
    category: "support",
  },
  {
    id: "how-to-choose-inverter-capacity",
    question: "How do I calculate the right inverter and battery capacity for my home in Kollam?",
    answer:
      "The capacity depends on your peak power load (watts) and desired backup duration (hours). For a standard 2-3 bedroom house running lights, fans, TV, and CCTV, a 900VA - 1500VA inverter with a 150Ah - 200Ah tubular battery provides 4 to 8 hours of reliable backup.",
    category: "pricing",
  },
  {
    id: "tubular-vs-lithium-batteries",
    question: "Should I choose Tubular or Lithium batteries for my inverter in Kerala?",
    answer:
      "Tall tubular batteries are cost-effective, heavy-duty, and proven for Kerala power conditions. Lithium (LiFePO4) batteries offer ultra-fast charging (2-3 hours), 3x longer lifespan (up to 10 years), compact lightweight wall-mounting, and zero water topping maintenance.",
    category: "services",
  },
];

export default function InverterSystemPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Products",
            url: "/products",
          },
          {
            name: "Inverter Systems",
            url: "/inverter-system",
          },
        ]}
      />
      <ServiceJsonLd
        name="Inverter & UPS Power Backup Installation in Kollam"
        description="Installation and service of pure sine wave inverters, commercial online UPS systems, and tubular/lithium battery backups in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/inverter-system`}
        serviceType="Power Backup & Electrical Systems"
        areaServed="Kollam, Kerala"
      />
      <FAQJsonLd items={inverterFaqs} />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Zero-Switchover Power Security</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                Inverter UPS Systems &amp; Power Backup in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Ensure zero downtime during Kerala power cuts. Defense Security provides high-efficiency <strong>pure sine wave inverters, commercial online UPS setups, and heavy-duty battery systems</strong> tailored for residences, medical clinics, and business enterprises in Kollam.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Pure Sine Wave</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>V-Guard &amp; Exide</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Up to 5-Yr Warranty</span>
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
                  <span>Request Power Sizing</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-2 sm:p-3 rounded-[32px] border-2 border-[#00C689] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 sm:h-96 w-full rounded-[24px] overflow-hidden">
                  <Image
                    src="/images/products/inverter-system.jpg"
                    alt="Pure Sine Wave Inverter & Heavy Duty Battery Backup Installation in Kollam Kerala"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00C689]">
                      POWER SECURITY SOLUTIONS • KOLLAM
                    </span>
                    <h3 className="text-white font-extrabold text-lg sm:text-xl mt-1">
                      Pure Sine Wave Inverters &amp; UPS Units
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INVERTER SOLUTIONS GRID */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block bg-[#00C689] px-5 py-2 mb-3">
                <span className="text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm">
                  POWER BACKUP CONFIGURATIONS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight font-heading">
                Engineered Inverter &amp; UPS Packages
              </h2>
              <p className="text-sm sm:text-base text-[#555c59] mt-3">
                Dependable energy backup solutions configured to your specific electrical appliances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <Home className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Residential Sine Wave Inverters (900VA - 2.5kVA)
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Silent operation, micro-controller based intelligent charging, and deep discharge battery protection for household lighting, fans, TVs, and WiFi routers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Online Double-Conversion UPS (1kVA - 20kVA)
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Zero millisecond transfer time specifically built for server racks, medical diagnostic equipment, billing POS counters, and central CCTV recording stations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <BatteryCharging className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Lithium LiFePO4 &amp; Tall Tubular Batteries
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Long-lasting 150Ah - 240Ah tall tubular batteries and advanced wall-mounted Lithium iron phosphate battery packs with ultra-fast charging capabilities.
                </p>
              </div>
            </div>
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
                Inverter &amp; UPS FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {inverterFaqs.map((faq) => (
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
                Never Face a Blackout Again
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
                Get the perfect inverter and battery system installed at your home or facility in Kollam.
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
                <span>Get Inverter Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
