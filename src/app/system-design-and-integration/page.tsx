import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Settings,
  CheckCircle2,
  Phone,
  ArrowRight,
  Layers,
  Cpu,
  ShieldCheck,
  Server,
  Network,
  Eye,
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
  title: "Security System Design & Integration in Kollam | Defense Security",
  description:
    "Expert security system design, architecture planning, and seamless integration of CCTV, access control, alarms, and central control stations across Kollam, Kerala.",
  canonicalPath: "/system-design-and-integration",
  keywords: [
    "Security system design Kollam",
    "Security system integration Kerala",
    "CCTV network architecture Kollam",
    "Commercial security planning Kerala",
    "Control room surveillance design Kollam",
    "Integrated security solutions Kerala",
    "Multi-building surveillance setup Kollam",
  ],
});

const systemDesignFaqs: FAQItem[] = [
  {
    id: "what-is-security-system-design",
    question: "What is included in Defense Security's system design and integration service?",
    answer:
      "Our system design service includes on-site risk evaluation, blind-spot analysis, CAD layout mapping for camera positioning, network bandwidth & storage calculations, power backup sizing, and cross-platform integration between CCTV, alarms, access control, and remote monitoring consoles.",
    category: "services",
  },
  {
    id: "integration-with-existing-hardware",
    question: "Can you integrate our existing CCTV cameras with new high-definition IP equipment?",
    answer:
      "Yes. We specialize in hybrid integration, bridging older analog coax setups with newer IP surveillance networks using hybrid DVRs/NVRs, PoE switches, and unified video management software (VMS) without discarding functioning hardware.",
    category: "cctv",
  },
  {
    id: "centralized-multi-branch-monitoring",
    question: "Can multiple commercial branches or shops across Kerala be monitored from one central location?",
    answer:
      "Absolutely. We configure secure multi-site IP network bridging and cloud VMS platforms that allow enterprise managers to monitor feeds from multiple branches on a single master video wall or mobile application.",
    category: "services",
  },
];

export default function SystemDesignPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Services",
            url: "/services",
          },
          {
            name: "System Design & Integration",
            url: "/system-design-and-integration",
          },
        ]}
      />
      <ServiceJsonLd
        name="Security System Design and Integration in Kollam"
        description="Bespoke security system planning, multi-brand CCTV integration, server rack networking, and centralized control room architecture in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/system-design-and-integration`}
        serviceType="Security Engineering & Systems Integration"
        areaServed="Kollam, Kerala"
      />
      <FAQJsonLd items={systemDesignFaqs} />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Custom Engineered Security Architecture</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                Security System Design &amp; Integration in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                From luxury residences and retail chains to industrial warehouses and educational campuses, Defense Security Systems architects <strong>cohesive, multi-layered electronic security ecosystems</strong> built for total situational awareness.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Zero Blind Spots</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Hybrid Compatibility</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Central Video Walls</span>
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
                  <span>Request Custom Blueprint</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            {/* Hero Image / Media Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-2 sm:p-3 rounded-[32px] border-2 border-[#00C689] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 sm:h-96 w-full rounded-[24px] overflow-hidden">
                  <Image
                    src="/images/services/system-design.jpg"
                    alt="Custom Security System Design & Server Rack Integration in Kollam Kerala"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00C689]">
                      DEFENSE SECURITY SYSTEMS • KOLLAM
                    </span>
                    <h3 className="text-white font-extrabold text-lg sm:text-xl mt-1">
                      Turnkey Integration &amp; Structured Rack Cabling
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE INTEGRATION CAPABILITIES */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block bg-[#00C689] px-5 py-2 mb-3">
                <span className="text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm">
                  ENGINEERED SOLUTIONS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight font-heading">
                Comprehensive Security Integration Capabilities
              </h2>
              <p className="text-sm sm:text-base text-[#555c59] mt-3">
                We bring together disconnected hardware components into a unified, intelligent defense network.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Server Racks &amp; Gigabit PoE Infrastructure
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Clean structured cabling, enterprise Cat6/Cat6A patch panels, high-throughput PoE switches, and rack-mounted UPS systems engineered for 99.9% uptime.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Unified Video Management Systems (VMS)
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Single-pane-of-glass dashboards integrating Hikvision, Dahua, and third-party ONVIF streams with AI smart search and automated alert triggers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Access Control &amp; Alarm Cross-Linking
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Automatic camera focus triggers on door breaches, fire alarm integration for emergency exit unlock, and seamless mobile visitor management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4-STEP INTEGRATION PROCESS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#222524] tracking-tight font-heading">
              Our 4-Step Engineering Process
            </h2>
            <p className="text-sm text-[#555c59] mt-2">
              How Defense Security executes flawless system integration projects in Kollam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Site Survey & Risk Audit",
                desc: "Physical inspection to identify entry vulnerabilities, lighting variations, and optimal camera angles.",
              },
              {
                step: "02",
                title: "System CAD Blueprinting",
                desc: "Detailed wiring diagrams, lens focal length mapping, bandwidth estimation, and storage sizing.",
              },
              {
                step: "03",
                title: "Precision Conduit Setup",
                desc: "Neat concealed PVC/metal conduit installation and certified network termination by trained technicians.",
              },
              {
                step: "04",
                title: "Commissioning & Training",
                desc: "Thorough stress testing, mobile app syncing, and staff training for client confidence.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-3xl bg-white border border-neutral-200/80 shadow-xs relative space-y-3"
              >
                <span className="text-2xl font-black text-[#00C689] font-mono">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-[#222524]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555c59] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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
                System Design &amp; Integration FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {systemDesignFaqs.map((faq) => (
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
                Ready to Design Your Custom Security Architecture?
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
                Schedule a free site survey in Kollam with Defense Security Systems engineers.
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
                <span>Book Site Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
