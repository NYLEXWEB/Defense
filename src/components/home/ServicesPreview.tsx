import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData } from "@/data/services";

export function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-[#F8FAF9] border-t border-neutral-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading
            badge="Engineering & Services"
            title="End-to-end security lifecycle management."
            subtitle="From architectural blueprint design to turnkey installation, continuous maintenance, and 24/7 monitoring."
          />
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#008D62] hover:text-[#00C689] transition-colors self-start md:self-end group"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Editorial Stacked Service Showcase (Alternating 2x2 with numbers) */}
        <div className="space-y-8">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-200/80 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text Column */}
                  <div
                    className={`space-y-4 ${
                      isEven ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-black text-[#00C689]/40 font-mono">
                        {service.number}
                      </span>
                      <span className="h-px w-8 bg-neutral-300" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#666e6b]">
                        {service.shortDesc}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#222524]">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#555c59] leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-[#222524]">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#00C689] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-inner bg-neutral-100 ${
                      isEven ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
