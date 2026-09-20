import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Fingerprint,
  Phone,
  ArrowRight,
  KeyRound,
  Users,
  Building,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Biometric Attendance & Access Control Systems in Kollam | Defense Security",
  description:
    "Professional biometric fingerprint, facial recognition attendance, RFID card access control, and electronic door locks for offices, schools, and commercial facilities in Kollam, Kerala.",
  canonicalPath: "/access-control",
  keywords: [
    "Biometric attendance system Kollam",
    "Access control systems Kollam",
    "Fingerprint door lock installation Kerala",
    "Facial recognition attendance system Kollam",
    "RFID card reader access control Kerala",
    "Office biometric machine price Kollam",
    "Electronic door lock installation Kollam",
  ],
});

export default function AccessControlPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Access Control & Biometrics",
            url: "/access-control",
          },
        ]}
      />
      <ServiceJsonLd
        name="Biometric Attendance & Access Control Installation in Kollam"
        description="Installation and software configuration of biometric fingerprint scanners, facial recognition attendance terminals, and electromagnetic door locks in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/access-control`}
        serviceType="Access Control & Security Systems"
      />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Enterprise Entry &amp; Time Attendance Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                Biometric Attendance &amp; Access Control in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Streamline employee attendance tracking and secure sensitive premises with advanced <strong>biometric fingerprint, AI facial recognition, and RFID card access control systems</strong> in Kollam, Kerala.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={`tel:${siteConfig.phones[0].raw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shadow-md active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.phones[0].display}</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#06221a] text-white hover:bg-neutral-800 transition-all shadow-sm"
                >
                  <span>Request Demonstration</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#00C689]/30 shadow-2xl bg-[#06221a] aspect-4/3 sm:aspect-square flex items-center justify-center p-8">
                <div className="text-center space-y-4 text-white">
                  <Fingerprint className="w-20 h-20 text-[#00C689] mx-auto" />
                  <p className="text-xl font-bold font-heading">Biometric &amp; Facial Recognition Terminals</p>
                  <p className="text-xs text-neutral-300">Software Integration with Automated Payroll &amp; Attendance Logs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTIONS GRID */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Users className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Time &amp; Attendance Management</h3>
                <p className="text-sm text-[#555c59]">Real-time shift logging, leave tracking, and automated monthly payroll report generation for corporate offices and educational institutions.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <KeyRound className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Electromagnetic Door Locks</h3>
                <p className="text-sm text-[#555c59]">Heavy-duty 600lbs EM locks, drop bolts, and exit push buttons for glass, wooden, and aluminum doors with emergency battery backup.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Building className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Multi-Door Access Controllers</h3>
                <p className="text-sm text-[#555c59]">Centralized IP network controllers for server rooms, medical facilities, jewelry showrooms, and high-security financial archives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Upgrade Your Office Access Control in Kollam
              </h3>
              <p className="text-sm text-neutral-300">
                Contact Defense Security Systems for a customized biometric and door access solution.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shrink-0"
            >
              <span>Get Access Control Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
