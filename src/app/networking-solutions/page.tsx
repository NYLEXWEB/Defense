import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone,
  ArrowRight,
  Wifi,
  Server,
  Cable,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Structured Network Cabling & WiFi Solutions in Kollam | Defense Security",
  description:
    "Cat6 structured data cabling, gigabit PoE network switches, outdoor long-range WiFi access points, and server rack installations for CCTV surveillance in Kollam, Kerala.",
  canonicalPath: "/networking-solutions",
  keywords: [
    "Networking solutions Kollam",
    "Cat6 cabling contractor Kollam",
    "PoE network switch installation Kerala",
    "WiFi access point setup Kollam",
    "CCTV server rack cabling Kerala",
    "Structured data cabling company Kollam",
    "Office networking setup Kerala",
  ],
});

export default function NetworkingSolutionsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Networking Solutions",
            url: "/networking-solutions",
          },
        ]}
      />
      <ServiceJsonLd
        name="Structured Network Cabling & WiFi Integration in Kollam"
        description="Enterprise Cat6 structured network cabling, PoE switches, server rack termination, and high-speed WiFi access points in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/networking-solutions`}
        serviceType="Network Infrastructure & Data Cabling"
      />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Robust Infrastructure for Flawless Video Streaming</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                Structured Network Cabling &amp; WiFi in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                High-definition 4K video surveillance requires stable, high-bandwidth data transmission. Defense Security Systems engineers <strong>certified Cat6 structured cabling, gigabit PoE switches, server racks, and mesh WiFi networks</strong> across Kollam.
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
                  <span>Request Network Audit</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#00C689]/30 shadow-2xl bg-[#06221a] aspect-4/3 sm:aspect-square">
                <Image
                  src="/images/products/wifi-network.jpg"
                  alt="Enterprise structured network cabling and WiFi router setup in Kollam Kerala"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Cable className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Cat6 Certified Structured Cabling</h3>
                <p className="text-sm text-[#555c59]">Neat, labeled, and tested Cat6/Cat6A cabling through heavy-duty PVC conduits and cable trays to eliminate signal crosstalk and packet loss.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Server className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Server Rack &amp; Patch Panel Termination</h3>
                <p className="text-sm text-[#555c59]">Professional 4U to 24U wall-mounted and floor-standing server racks, loaded with cable managers, cooling fans, and surge-protected PDU strips.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Wifi className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">High-Gain Long Range WiFi APs</h3>
                <p className="text-sm text-[#555c59]">Outdoor point-to-point wireless bridges and indoor seamless roaming mesh access points for zero dead zones across large properties.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Build a High-Speed Network Backbone for Your CCTV
              </h3>
              <p className="text-sm text-neutral-300">
                Contact Defense Security Systems in Thevally, Kollam for commercial networking and WiFi infrastructure.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shrink-0"
            >
              <span>Get Networking Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
