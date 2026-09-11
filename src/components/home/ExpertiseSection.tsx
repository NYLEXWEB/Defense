import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { expertiseData } from "@/data/expertise";

export function ExpertiseSection() {
  return (
    <section className="py-20 md:py-28 bg-dark-anchor text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00C689]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#008D62]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            badge="Technical Mastery"
            title="Specialized expertise in advanced security protocols."
            subtitle="Engineered surveillance, perimeter command, and continuous operational intelligence."
            dark
          />
          <Link
            href="/expertise"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#00C689] hover:underline self-start md:self-end group"
          >
            <span>Explore Complete Capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Expertise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-[#00C689]/60 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-extrabold font-mono text-[#00C689]/50 group-hover:text-[#00C689] transition-colors">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#00C689]/20 flex items-center justify-center text-[#00C689]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-1.5">
                {item.scope.slice(0, 2).map((s) => (
                  <div key={s} className="flex items-center gap-2 text-xs text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00C689]" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
