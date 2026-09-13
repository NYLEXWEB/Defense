import React from "react";
import { Metadata } from "next";
import { ContactClient } from "./ContactClient";
import { constructMetadata } from "@/lib/seo";
import { BreadcrumbJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = constructMetadata({
  title: "Contact Defense Security Systems | Free CCTV Site Inspection in Kollam",
  description:
    "Contact Defense Security Systems in Thevally, Kollam. Call +91 7025 552 265 or send an inquiry for free CCTV camera estimates, remote gate automation, and electronic security installations.",
  canonicalPath: "/contact",
  keywords: [
    "Contact Defense Security Systems Kollam",
    "CCTV camera dealer contact Kollam",
    "Free CCTV site inspection Kollam",
    "CCTV camera installation price quote Kerala",
    "CCTV camera shop in Thevally Kollam",
    "Defense Security Thevally phone number",
    "Security camera technician contact Kollam",
  ],
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          {
            name: "Contact Us",
            url: "/contact",
          },
        ]}
      />
      <LocalBusinessJsonLd />
      <ContactClient />
    </>
  );
}
