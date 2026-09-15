import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export interface PageSeoProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  canonicalPath = "",
  keywords = [],
  ogImage = "/images/hero-desktop-background.png",
  noIndex = false,
}: PageSeoProps): Metadata {
  const url = `${siteConfig.siteUrl}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;
  const fullTitle = `${title} | ${siteConfig.name}`;
  const combinedKeywords = Array.from(
    new Set([...siteConfig.keywords, ...keywords])
  );

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    keywords: combinedKeywords,
    authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    icons: {
      icon: [
        { url: "/newlogo.png", type: "image/png" },
        { url: "/icon.png", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      shortcut: "/newlogo.png",
      apple: [{ url: "/newlogo.png", type: "image/png" }],
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${siteConfig.siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - ${title}`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${siteConfig.siteUrl}${ogImage}`],
      creator: `@${siteConfig.socials.handle}`,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
