import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Phone,
  ArrowRight,
  Smartphone,
  Lock,
  Volume2,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Video Door Phone Intercom Installation in Kollam | Defense Security",
  description:
    "Smart video door phone (VDP) and video doorbell intercom installation in Kollam. HD night vision camera, two-way audio, smartphone app calling, and electronic gate unlock for homes & villas in Kerala.",
  canonicalPath: "/video-door-phone",
  keywords: [
    "Video door phone Kollam",
    "Video doorbell installation Kollam",
    "Hikvision video door phone price Kerala",
    "Smart video intercom for home Kollam",
    "Wireless video door phone Kerala",
    "Villa video door phone system Kollam",
    "Electronic gate lock with video phone Kollam",
  ],
});

export default function VideoDoorPhonePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Video Door Phones",
            url: "/video-door-phone",
          },
        ]}
      />
      <ServiceJsonLd
        name="Video Door Phone Installation in Kollam"
        description="Supply and installation of high-definition smart video door phone intercoms with mobile app connectivity in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/video-door-phone`}
        serviceType="Video Intercom & Door Entry Systems"
      />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Smart Entrance Verification &amp; Intercoms</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                Smart Video Door Phone Intercoms in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                See, hear, and speak to visitors at your main gate or entrance door before unlocking. Defense Security Systems installs <strong>high-definition IP and analog video door phones</strong> with indoor touch monitors and direct smartphone app connectivity.
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
                  <span>Get VDP Pricing</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#00C689]/30 shadow-2xl bg-[#06221a] aspect-4/3 sm:aspect-square">
                <Image
                  src="/images/products/video-door-phones.jpg"
                  alt="Smart video door phone intercom system installed at villa entrance in Kollam Kerala"
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
                <Smartphone className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Mobile App Video Calling</h3>
                <p className="text-sm text-[#555c59]">Answer doorbell calls from your smartphone wherever you are, speak to delivery agents, and unlock the front gate remotely.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Lock className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">One-Touch Remote Gate Release</h3>
                <p className="text-sm text-[#555c59]">Seamless integration with motorized remote sliding gates and electronic door strikes for effortless one-touch entry control.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Volume2 className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Noise-Canceling Two-Way Talk</h3>
                <p className="text-sm text-[#555c59]">Clear, echo-free audio communication between outdoor door units and indoor touchscreens, even alongside busy roads.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Secure Your Villa Entrance with a Smart Video Doorbell
              </h3>
              <p className="text-sm text-neutral-300">
                Contact Defense Security Systems in Thevally, Kollam for free model recommendations and demonstration.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shrink-0"
            >
              <span>Request VDP Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
