import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  AlertTriangle,
  HardDrive,
  RotateCcw,
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
  title: "CCTV Maintenance, Repair & AMC Services in Kollam | Defense Security",
  description:
    "Fast on-site CCTV camera repair, video loss fix, DVR/NVR hard drive recovery, cable rewiring, and Annual Maintenance Contracts (AMC) across Kollam, Kerala.",
  canonicalPath: "/maintenance-and-repair",
  keywords: [
    "CCTV repair in Kollam",
    "CCTV camera service Kollam",
    "CCTV maintenance contract Kerala",
    "CCTV AMC Kollam",
    "Security camera technician Kollam",
    "DVR repair and hard disk replacement Kerala",
    "CCTV video loss troubleshooting Kollam",
    "Hikvision Dahua camera service Kollam",
  ],
});

const maintenanceFaqs: FAQItem[] = [
  {
    id: "how-fast-is-technician-dispatch",
    question: "How quickly can a CCTV technician visit my location in Kollam?",
    answer:
      "For urgent repair requests across Kollam district (Thevally, Kadappakada, Chinnakkada, Karunagappally, Kottarakkara, etc.), we offer same-day or within 24-hour on-site technician dispatch.",
    category: "services",
  },
  {
    id: "service-cameras-installed-by-others",
    question: "Do you service CCTV systems installed by other vendors or companies?",
    answer:
      "Yes. Our certified technicians service and repair all CCTV brands (Hikvision, Dahua, CP PLUS, Honeywell, Uniview, and generic models) regardless of who initially installed them.",
    category: "support",
  },
  {
    id: "what-is-cctv-amc",
    question: "What does a CCTV Annual Maintenance Contract (AMC) include?",
    answer:
      "Our AMC covers quarterly preventive inspections, camera lens cleaning, focus calibration, power supply voltage checks, DVR/NVR hard disk health diagnostics, priority emergency breakdown response, and discounted replacement parts.",
    category: "pricing",
  },
];

export default function MaintenanceAndRepairPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Services",
            url: "/services",
          },
          {
            name: "Maintenance & Repair",
            url: "/maintenance-and-repair",
          },
        ]}
      />
      <ServiceJsonLd
        name="CCTV Camera Maintenance & Repair Services in Kollam"
        description="On-site CCTV repair, video loss troubleshooting, DVR/NVR data recovery, and Annual Maintenance Contracts (AMC) across Kollam, Kerala."
        url={`${siteConfig.siteUrl}/maintenance-and-repair`}
        serviceType="Security System Maintenance & Repair Services"
        areaServed="Kollam, Kerala"
      />
      <FAQJsonLd items={maintenanceFaqs} />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Fast On-Site Diagnostics &amp; Certified Repairs</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                CCTV Maintenance &amp; Repair in Kollam, Kerala
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Facing video loss, blurry lenses, hard disk errors, or mobile offline status? Defense Security provides <strong>expert on-site CCTV troubleshooting, rapid repairs, and Annual Maintenance Contracts (AMC)</strong> across Kollam.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Same-Day Service</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Genuine Spare Parts</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>AMC Contracts</span>
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
                  <span>Book Repair Visit</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-2 sm:p-3 rounded-[32px] border-2 border-[#00C689] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 sm:h-96 w-full rounded-[24px] overflow-hidden">
                  <Image
                    src="/images/services/maintenance-repair.jpg"
                    alt="CCTV Camera Maintenance & Technical Repair in Kollam Kerala"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00C689]">
                      DEFENSE SERVICE FLEET • KOLLAM
                    </span>
                    <h3 className="text-white font-extrabold text-lg sm:text-xl mt-1">
                      Certified Diagnostics &amp; Lens Calibration
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMMON ISSUES WE FIX */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block bg-[#00C689] px-5 py-2 mb-3">
                <span className="text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm">
                  COMMON ISSUES WE RESOLVE
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight font-heading">
                Complete Surveillance Troubleshooting
              </h2>
              <p className="text-sm sm:text-base text-[#555c59] mt-3">
                Professional repair solutions for residential, commercial, and industrial CCTV setups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Video Loss &amp; Black Screen Fix
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Fast diagnosis of BNC connector corrosion, cut coaxial/Cat6 cables, damaged power supplies (SMPS), and PoE switch port failures.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <HardDrive className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  DVR / NVR Hard Drive Recovery &amp; Replacement
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Replacement of degraded hard disks with high-endurance surveillance-grade HDDs (Seagate SkyHawk / WD Purple) and firmware recovery.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <RotateCcw className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Mobile Remote App Offline Reconnection
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Re-configuring router port forwarding, P2P cloud connectivity (Hik-Connect / DMSS), and mobile push alerts after router changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ANNUAL MAINTENANCE CONTRACT (AMC) PLANS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222524] tracking-tight font-heading">
              Annual Maintenance Contracts (AMC)
            </h2>
            <p className="text-sm text-[#555c59] mt-2">
              Keep your security system running at 100% efficiency all year round with zero stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#222524]">Residential AMC Plan</h3>
                <span className="text-xs font-bold text-[#008D62] bg-[#E8F8F2] px-3 py-1 rounded-full">Homes &amp; Villas</span>
              </div>
              <ul className="space-y-3 text-sm text-[#555c59]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                  <span>Quarterly lens cleaning &amp; weather sealing checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                  <span>Power supply &amp; recording backup diagnostics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                  <span>Unlimited breakdown call-outs within 24 hours</span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white border-2 border-[#00C689] shadow-md space-y-4 relative">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#222524]">Commercial AMC Plan</h3>
                <span className="text-xs font-bold text-white bg-[#00C689] px-3 py-1 rounded-full">Offices &amp; Stores</span>
              </div>
              <ul className="space-y-3 text-sm text-[#555c59]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                  <span>Monthly comprehensive camera &amp; network audits</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                  <span>Priority 4-hour emergency technician dispatch</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689]" />
                  <span>Free firmware upgrades &amp; standby loaner DVRs</span>
                </li>
              </ul>
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
                CCTV Repair &amp; Maintenance FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {maintenanceFaqs.map((faq) => (
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
                Need Fast CCTV Camera Repair in Kollam?
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
                Get your surveillance system back online with certified Defense Security technicians.
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
                <span>Request Service Visit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
