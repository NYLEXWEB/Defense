import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  CheckCircle2,
  Phone,
  ArrowRight,
  Eye,
  Wifi,
  Moon,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "CCTV Camera Dealers in Kollam | HD, IP & WiFi Security Cameras - Defense Security",
  description:
    "Explore genuine CCTV cameras in Kollam. Authorized dealer for Hikvision, Dahua, CP PLUS, Ezviz & Imou. 4K IP cameras, color night vision, wireless smart WiFi cameras with expert installation.",
  canonicalPath: "/cctv-camera",
  keywords: [
    "CCTV camera dealers in Kollam",
    "CCTV cameras in Kollam",
    "Hikvision CCTV camera price Kollam",
    "Dahua IP camera dealer Kollam",
    "CP PLUS security camera Kollam",
    "WiFi smart camera Kollam",
    "Night vision CCTV camera Kerala",
    "4K IP surveillance camera Kollam",
    "Wireless outdoor CCTV camera Kerala",
    "Best CCTV camera shop Kollam",
  ],
});

export default function CctvCameraPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "CCTV Cameras",
            url: "/cctv-camera",
          },
        ]}
      />
      <ServiceJsonLd
        name="CCTV Camera Sales & Installation in Kollam"
        description="Supply and installation of genuine Hikvision, Dahua, and CP PLUS IP, HD, and WiFi surveillance cameras in Kollam, Kerala."
        url={`${siteConfig.siteUrl}/cctv-camera`}
        serviceType="CCTV Camera Equipment & Sales"
      />

      <div className="pt-24 pb-20 md:pt-32 md:pb-28">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#00C689]/15 border border-[#00C689]/40 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#008D62]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C689] animate-pulse" />
                <span>Authorized CCTV Camera Dealers in Kollam</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222524] tracking-tight leading-[1.1] font-heading">
                HD, IP &amp; Smart WiFi CCTV Cameras in Kollam
              </h1>

              <p className="text-base sm:text-lg text-[#555c59] leading-relaxed">
                Looking for genuine, top-quality <strong>CCTV cameras in Kollam</strong>? Defense Security Systems supplies and installs certified security cameras from global surveillance leaders including <strong>Hikvision, Dahua Technology, CP PLUS, Ezviz, and Imou</strong>.
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
              <div className="relative rounded-3xl overflow-hidden border border-[#00C689]/30 shadow-2xl bg-[#06221a] aspect-4/3 sm:aspect-square">
                <Image
                  src="/images/products/cctv-ip-hd.png"
                  alt="High definition CCTV IP and WiFi security cameras supplied by Defense Security Systems Kollam"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CAMERA TYPES SECTION */}
        <section className="bg-[#F8FAF9] py-16 md:py-24 border-y border-neutral-200/70 mb-16 md:mb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#222524] tracking-tight">
                Complete CCTV Camera Range for Every Security Need
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#555c59]">
                Compare camera categories to find the best match for your residence, retail shop, or enterprise facility in Kollam.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#222524]">
                  Hikvision &amp; Dahua IP Cameras
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Top-of-the-line 4K / 8MP network cameras with AI AcuSense human/vehicle classification, PoE power, and H.265+ encoding.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-[#333836]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                    <span>2MP, 4MP, 5MP &amp; 8MP 4K Ultra HD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                    <span>ColorVu / Full-Color 24/7 Night Vision</span>
                  </li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                  <Wifi className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#222524]">
                  Smart Wireless WiFi Cameras
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Ezviz &amp; Imou 360-degree pan-tilt indoor and outdoor smart cameras with two-way voice intercom, mobile alerts, and cloud recording.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-[#333836]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                    <span>Quick Wireless Plug &amp; Play Setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                    <span>Live Two-Way Audio Communication</span>
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00C689]/15 flex items-center justify-center text-[#008D62]">
                  <Moon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#222524]">
                  CP PLUS &amp; HD Analog Cameras
                </h3>
                <p className="text-sm text-[#555c59] leading-relaxed">
                  Budget-conscious, highly reliable bullet and dome security cameras with infrared smart LEDs for crisp residential perimeter protection.
                </p>
                <ul className="space-y-2 text-xs font-semibold text-[#333836]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                    <span>High Durability Weatherproof IP67 Housing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00C689]" />
                    <span>Excellent Value for Budget Installations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#06221a] p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#00C689]/30">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-heading">
                Need Help Choosing the Right CCTV Camera?
              </h3>
              <p className="text-sm text-neutral-300">
                Talk to our surveillance experts in Thevally, Kollam for free model recommendations and price quotes.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all shrink-0"
            >
              <span>Get Camera Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
