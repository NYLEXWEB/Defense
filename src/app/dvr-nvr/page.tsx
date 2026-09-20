import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  HardDrive,
  CheckCircle2,
  Phone,
  ArrowRight,
  Server,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "DVR & NVR Video Recorders & Storage Setup in Kollam | Defense Security",
  description:
    "Supply and configuration of 4CH, 8CH, 16CH, and 32CH DVR & NVR surveillance recorders in Kollam. H.265+ smart video compression, WD Purple / Seagate SkyHawk storage, and remote viewing setup.",
  canonicalPath: "/dvr-nvr",
  keywords: [
    "DVR NVR recorder Kollam",
    "Hikvision NVR price Kollam",
    "Dahua DVR setup Kerala",
    "PoE NVR network video recorder Kollam",
    "CCTV surveillance hard disk Kerala",
    "CCTV recording storage setup Kollam",
    "DVR repair and hard drive replacement Kollam",
  ],
});

export default function DvrNvrPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "DVR & NVR Recorders",
            url: "/dvr-nvr",
          },
        ]}
      />
      <ServiceJsonLd
        name="DVR and NVR Video Recorder Setup in Kollam"
        description="Configuration, networking, and storage installation for digital video recorders (DVR) and network video recorders (NVR) in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/dvr-nvr`}
        serviceType="Surveillance Recording Equipment"
      />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>DVR &amp; NVR Surveillance Storage Specialists</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                DVR &amp; NVR Video Recorders &amp; Storage Setup in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Ensure continuous 24/7 video recording and secure video retention with enterprise-grade <strong>DVR and NVR recorders</strong> from Hikvision, Dahua, and CP PLUS. Configured with smart H.265+ encoding to double storage duration.
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
                  href="/cctv-installation-kollam"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#06221a] text-white hover:bg-neutral-800 transition-all shadow-sm"
                >
                  <span>CCTV Installation Services</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#00C689]/30 shadow-2xl bg-[#06221a] aspect-4/3 sm:aspect-square flex items-center justify-center p-8">
                <div className="text-center space-y-4 text-white">
                  <Server className="w-20 h-20 text-[#00C689] mx-auto" />
                  <p className="text-xl font-bold font-heading">4CH / 8CH / 16CH / 32CH PoE NVR &amp; DVRs</p>
                  <p className="text-xs text-neutral-300">Equipped with 24/7 Surveillance Hard Drives (WD Purple &amp; SkyHawk)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Cpu className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">PoE Network Video Recorders</h3>
                <p className="text-sm text-[#555c59]">Direct Plug &amp; Play power for IP cameras with integrated PoE switches, multi-channel 4K video decoding, and zero network lag.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <HardDrive className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Surveillance-Grade Hard Drives</h3>
                <p className="text-sm text-[#555c59]">Dedicated WD Purple and Seagate SkyHawk HDDs designed for continuous 24/7 video write cycles and extended multi-month retention.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <ShieldCheck className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Encrypted Remote Access</h3>
                <p className="text-sm text-[#555c59]">Hardware-level encryption for live camera streaming, preventing unauthorized access and ensuring safe mobile app connectivity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Upgrade or Repair Your DVR / NVR Storage in Kollam
              </h3>
              <p className="text-sm text-neutral-300">
                Contact Defense Security Systems for recorder replacement, hard drive expansion, and cloud setup.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shrink-0"
            >
              <span>Request Storage Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
