import React from "react";
import { siteConfig } from "@/data/site";
import { FAQItem } from "@/data/faq";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "SecurityService", "HomeAndConstructionBusiness"],
    "@id": `${siteConfig.siteUrl}/#localbusiness`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/newlogo.png`,
    image: `${siteConfig.siteUrl}/images/hero-desktop-background.png`,
    description: siteConfig.description,
    telephone: siteConfig.phones[0].raw,
    email: siteConfig.email,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.openingHoursSpecification.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.dayOfWeek,
      opens: item.opens,
      closes: item.closes,
    })),
    areaServed: siteConfig.areasServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
    ],
    knowsAbout: [
      "CCTV Installation",
      "IP Camera Surveillance",
      "Hikvision Surveillance Systems",
      "Dahua Security Solutions",
      "CP PLUS CCTV Systems",
      "Smart WiFi Cameras",
      "DVR and NVR Video Recorders",
      "Video Door Phone Intercoms",
      "Automatic Remote Gates",
      "Home Automation Systems",
      "CCTV Repair and AMC Maintenance",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "CCTV & Electronic Security Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CCTV Camera Installation & Setup",
            description: "Turnkey IP and HD surveillance camera installation for homes, offices, retail shops, and commercial facilities in Kollam.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Smart WiFi Camera Configuration",
            description: "Wireless AI motion tracking smart cameras with live smartphone app remote viewing.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "CCTV Repair, Maintenance & AMC",
            description: "Comprehensive troubleshooting, camera realignment, cable repair, and annual maintenance contracts across Kerala.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automatic Remote Gate Automation",
            description: "Heavy-duty motorized sliding and swing remote gate automation with wireless safety sensors.",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.siteUrl}/#localbusiness`,
    },
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({ items }: { items: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: `${siteConfig.siteUrl}${item.url.startsWith("/") ? item.url : `/${item.url}`}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType = "CCTV & Electronic Security Installation",
  areaServed = "Kollam, Kerala",
}: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}/#service`,
    name,
    description,
    url,
    serviceType,
    provider: {
      "@id": `${siteConfig.siteUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: areaServed,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: name,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: name,
            description: description,
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceListJsonLd({
  services,
}: {
  services: { title: string; description: string; id: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@id": `${siteConfig.siteUrl}/#localbusiness`,
        },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Kerala",
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

