import React from "react";
import { Metadata } from "next";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Professional Security Services | Defense Security Systems",
  description: "CCTV Installation, System Design & Integration, Maintenance & Repair, and 24/7 Monitoring & Response by certified security engineers in Kollam, Kerala.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-32">
      <ServicesPreview />
      <FinalCTA />
    </div>
  );
}
