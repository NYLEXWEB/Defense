import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone,
  ArrowRight,
  Radio,
  Zap,
  Gauge,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Automatic Remote Gate Installation in Kollam | Defense Security",
  description:
    "Heavy-duty automatic sliding gate motors, remote swing gate openers, safety photocell sensors, and smartphone gate automation installation in Kollam, Kerala.",
  canonicalPath: "/gate-automation",
  keywords: [
    "Automatic sliding gate Kollam",
    "Remote gate motor installation Kerala",
    "Automatic gate opener dealers Kollam",
    "Swing gate automation Kollam Kerala",
    "Motorized compound gate price Kollam",
    "Electric gate repair and maintenance Kerala",
    "Smart remote gate opener Kollam",
  ],
});

export default function GateAutomationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Gate Automation",
            url: "/gate-automation",
          },
        ]}
      />
      <ServiceJsonLd
        name="Automatic Remote Gate Installation in Kollam"
        description="Installation, automation, and repair of motorized sliding and swing gates with remote controls and safety infrared sensors in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/gate-automation`}
        serviceType="Automatic Gate & Perimeter Automation"
      />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Heavy-Duty Italian &amp; German Standard Gate Motors</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                Automatic Remote Gate Systems in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Experience the luxury, comfort, and security of <strong>motorized automatic gates</strong>. Open and close your driveway compound gate smoothly using wireless handheld remotes or your smartphone app without stepping out of your vehicle.
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
                  <span>Get Free Site Inspection</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#00C689]/30 shadow-2xl bg-[#06221a] aspect-4/3 sm:aspect-square">
                <Image
                  src="/images/products/remote-gate.jpg"
                  alt="Motorized automatic sliding remote gate installed at luxury residence in Kollam Kerala"
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
                <Gauge className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Sliding Gate Automation (Up to 2000kg)</h3>
                <p className="text-sm text-[#555c59]">High-torque oil-bath gear motors built for continuous cycles on residential, commercial, and industrial sliding steel and wrought iron gates.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Radio className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Infrared Safety Beam Sensors</h3>
                <p className="text-sm text-[#555c59]">Active safety photocells instantly detect cars, pets, or pedestrians in the gate pathway, reversing movement to prevent collision damage.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Zap className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Power Backup &amp; Manual Override</h3>
                <p className="text-sm text-[#555c59]">Integrated battery backup keeps the gate operational during power cuts, alongside an easy manual mechanical key release mechanism.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Automate Your Main Entrance Gate in Kollam
              </h3>
              <p className="text-sm text-neutral-300">
                Contact Defense Security Systems for free motor capacity calculation and site survey in Kollam.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shrink-0"
            >
              <span>Get Gate Automation Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
