import React from "react";
import { ShieldCheck, BadgePercent, Wrench, Headphones } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Products",
    description: "We offer high-quality CCTV products from reputable brands.",
    number: "01",
  },
  {
    icon: BadgePercent,
    title: "Competitive Prices",
    description: "We offer competitive pricing without compromising on quality.",
    number: "02",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    description: "Our team of experts will install and set up your CCTV system.",
    number: "03",
  },
  {
    icon: Headphones,
    title: "Exceptional Customer Service",
    description: "We provide dedicated customer support and service.",
    number: "04",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Choose Us"
          title="The foundation of our client trust."
          subtitle="Committed to technological excellence, reliable installations, and continuous post-setup support."
          centered
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative rounded-3xl bg-[#F8FAF9] p-8 border border-neutral-200/80 hover:border-[#00C689] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#008D62] shadow-sm border border-neutral-200/70 group-hover:bg-[#00C689] group-hover:text-[#06221a] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-bold font-mono text-neutral-300 group-hover:text-[#00C689] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#222524] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555c59] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200/60 flex items-center gap-2 text-xs font-semibold text-[#008D62]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C689]" />
                  <span>Defense Assurance</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
