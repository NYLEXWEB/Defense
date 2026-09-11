import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#06221a] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-[#00C689]/30">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C689]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00C689]/20 text-[#00C689] border border-[#00C689]/30">
              <ShieldCheck className="w-4 h-4" />
              <span>Defense Security Systems • Kollam</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Let&apos;s secure what matters.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl">
              Get in touch with us today to learn more about our CCTV systems and security solutions tailored for your home, office, school, or fleet.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-bold bg-[#00C689] text-[#06221a] hover:bg-[#008D62] hover:text-white transition-all duration-300 shadow-md active:scale-95"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${siteConfig.phones[0].raw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-[#00C689]" />
                <span>Call {siteConfig.phones[0].display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
