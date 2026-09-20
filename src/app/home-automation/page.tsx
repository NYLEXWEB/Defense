import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  Home,
  CheckCircle2,
  Phone,
  ArrowRight,
  Lightbulb,
  Smartphone,
  Shield,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Smart Home Automation & Security Systems in Kollam | Defense Security",
  description:
    "Transform your residence with smart home automation in Kollam. Intelligent lighting control, smart curtains, intrusion alarm sensors, and mobile app centralized security management in Kerala.",
  canonicalPath: "/home-automation",
  keywords: [
    "Smart home automation Kollam",
    "Home automation company Kerala",
    "Smart lighting control Kollam",
    "Intrusion alarm security system Kerala",
    "Wireless home automation Kollam",
    "Smart villa security Kerala",
  ],
});

export default function HomeAutomationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Home Automation",
            url: "/home-automation",
          },
        ]}
      />
      <ServiceJsonLd
        name="Smart Home Automation Installation in Kollam"
        description="Smart home IoT automation, wireless lighting controls, security intrusion alarms, and motorized curtain controls in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/home-automation`}
        serviceType="Home Automation & IoT Integration"
      />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Next-Gen Smart Living Solutions</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                Smart Home Automation &amp; Security in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Control your lights, air conditioners, curtains, and security sensors effortlessly from anywhere. Defense Security Systems integrates intuitive, reliable <strong>smart home automation</strong> tailored for modern Kerala villas and apartments.
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
                  <span>Request Smart Home Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#00C689]" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-[#00C689]/30 shadow-2xl bg-[#06221a] aspect-4/3 sm:aspect-square">
                <Image
                  src="/images/products/home-automation.jpg"
                  alt="Modern luxury living room equipped with smart home automation in Kollam Kerala"
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
                <Lightbulb className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Smart Lighting &amp; Mood Scenes</h3>
                <p className="text-sm text-[#555c59]">Preset custom illumination scenes for cinema, dinner, or bedtime. Automate lights with motion sensors to conserve electricity.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Shield className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Intrusion Alarm Sensors</h3>
                <p className="text-sm text-[#555c59]">Wireless door/window magnetic contact sensors, glass break detectors, and loud perimeter sirens integrated directly with your mobile app.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-3">
                <Smartphone className="w-10 h-10 text-[#008D62]" />
                <h3 className="text-lg font-bold text-[#222524]">Voice &amp; App Control</h3>
                <p className="text-sm text-[#555c59]">Compatible with Amazon Alexa, Google Home Assistant, and single-dashboard iOS / Android applications for simple family use.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Turn Your House into an Intelligent Smart Home
              </h3>
              <p className="text-sm text-neutral-300">
                Consult with Defense Security Systems in Thevally, Kollam for custom automation architecture.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shrink-0"
            >
              <span>Explore Automation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
