import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Tv,
  CheckCircle2,
  Phone,
  ArrowRight,
  ShieldCheck,
  BellRing,
  Eye,
  Smartphone,
  Radio,
  Lock,
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
  title: "24/7 CCTV Monitoring & Rapid Response in Kollam | Defense Security",
  description:
    "Professional 24/7 electronic surveillance monitoring, AI intrusion verification, smartphone live streaming alerts, and rapid emergency response across Kollam, Kerala.",
  canonicalPath: "/monitoring-and-response",
  keywords: [
    "24/7 CCTV monitoring Kollam",
    "Surveillance monitoring Kerala",
    "Remote CCTV live view Kollam",
    "AI camera intrusion alerts Kerala",
    "Security control room Kollam",
    "Commercial security monitoring Kerala",
    "CCTV alert response team Kollam",
  ],
});

const monitoringFaqs: FAQItem[] = [
  {
    id: "how-does-remote-monitoring-work",
    question: "How does Defense Security's 24/7 surveillance monitoring service work?",
    answer:
      "Your on-site IP cameras connect securely to our central surveillance management platform. When AI perimeter tripwires or motion sensors detect unauthorized activity after hours, high-priority video clips are instantly verified by our monitoring desk and escalated immediately via phone calls and emergency protocols.",
    category: "services",
  },
  {
    id: "preventing-false-alarms",
    question: "How do you filter out false alarms caused by rain, wind, or stray animals?",
    answer:
      "We utilize next-generation AcuSense & WizSense deep-learning AI cameras that distinguish human and vehicle shapes with over 98% accuracy, effectively eliminating false triggers from tree branches, rain, insects, and animals.",
    category: "cctv",
  },
  {
    id: "instant-mobile-notifications",
    question: "Do property owners receive immediate notifications during security events?",
    answer:
      "Yes. Property owners receive direct HD push notifications, 10-second video clips of the event, and automated SMS/WhatsApp alerts on their smartphones within seconds of an incident.",
    category: "support",
  },
];

export default function MonitoringAndResponsePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Services",
            url: "/services",
          },
          {
            name: "Monitoring & Response",
            url: "/monitoring-and-response",
          },
        ]}
      />
      <ServiceJsonLd
        name="24/7 Surveillance Monitoring & Rapid Response in Kollam"
        description="Round-the-clock CCTV surveillance monitoring, AI video analytics, perimeter intrusion verification, and emergency response in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/monitoring-and-response`}
        serviceType="Electronic Surveillance & Remote Monitoring Services"
        areaServed="Kollam, Kerala"
      />
      <FAQJsonLd items={monitoringFaqs} />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Round-the-Clock Threat Detection &amp; Deterrence</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                24/7 Monitoring &amp; Response in Kollam, Kerala
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Transform passive security cameras into active crime deterrence. Defense Security Systems provides <strong>real-time video surveillance monitoring, AI human/vehicle classification, and rapid incident response</strong> for total peace of mind.
              </p>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>24/7 Active Oversight</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>AI Human Detection</span>
                </div>
                <div className="bg-[#F8FAF9] p-3 rounded-2xl border border-neutral-200/80 text-xs font-bold text-[#222524] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C689] shrink-0" />
                  <span>Instant Mobile Alerts</span>
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
                  <span>Request Monitoring Setup</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            {/* Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="p-2 sm:p-3 rounded-[32px] border-2 border-[#00C689] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
                <div className="relative h-72 sm:h-96 w-full rounded-[24px] overflow-hidden">
                  <Image
                    src="/images/services/monitoring-response.jpg"
                    alt="24/7 Security Control Room & Remote Surveillance Monitoring in Kollam Kerala"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#00C689]">
                      DEFENSE SURVEILLANCE CENTER • KOLLAM
                    </span>
                    <h3 className="text-white font-extrabold text-lg sm:text-xl mt-1">
                      Real-Time Incident Verification &amp; Alert Dispatch
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY CAPABILITIES */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-block bg-[#00C689] px-5 py-2 mb-3">
                <span className="text-white font-extrabold uppercase tracking-wider text-xs sm:text-sm">
                  PROACTIVE SECURITY
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight font-heading">
                Intelligent Surveillance Monitoring Features
              </h2>
              <p className="text-sm sm:text-base text-[#555c59] mt-3">
                Next-generation threat detection powered by AI smart analytics and verified by professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <BellRing className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  AI Virtual Tripwire &amp; Perimeter Intrusion
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Instant detection when an unauthorized individual crosses marked boundary lines, compound walls, or restricted store backrooms after business hours.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  Live Mobile Streaming &amp; Two-Way Audio
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Crystal-clear 4K live view on iOS &amp; Android devices with real-time two-way voice talkback to warn trespassers directly through camera speakers.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4 hover:border-[#00C689]/50 transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#E8F8F2] flex items-center justify-center text-[#008D62]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#222524]">
                  System Health &amp; Camera Uptime Auditing
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Automated background health checks that immediately flag camera disconnections, video tampering, hard drive storage full errors, and network drops.
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
                Surveillance Monitoring FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {monitoringFaqs.map((faq) => (
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
                Protect Your Property with 24/7 Active Monitoring
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 max-w-xl">
                Contact Defense Security Systems to activate professional surveillance monitoring in Kollam.
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
                <span>Activate Monitoring</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
