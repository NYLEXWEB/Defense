import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import { siteConfig } from "@/data/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#00C689",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `Best CCTV Installation in Kollam, Kerala | Defense Security`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: `${siteConfig.name} | Advanced CCTV Camera Systems & Installation Kollam`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Security Systems Kollam`,
    description: siteConfig.description,
    creator: `@${siteConfig.socials.handle}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/newlogo.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/newlogo.png",
    apple: "/newlogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${bebasNeue.variable} ${poppins.variable}`}
    >
      <head>
        <link rel="icon" type="image/png" href="/newlogo.png" />
        <link rel="shortcut icon" type="image/png" href="/newlogo.png" />
        <link rel="apple-touch-icon" href="/newlogo.png" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-[#222524]">
        <LocalBusinessJsonLd />
        <WebSiteJsonLd />
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
