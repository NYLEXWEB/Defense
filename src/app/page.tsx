import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ApplicationSectors } from "@/components/home/ApplicationSectors";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PartnerBrands } from "@/components/home/PartnerBrands";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { SocialMediaSection } from "@/components/home/SocialMediaSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { constructMetadata } from "@/lib/seo";
import { FAQJsonLd } from "@/components/seo/JsonLd";
import { homeFaqs } from "@/data/faq";

export const metadata: Metadata = constructMetadata({
  title: "CCTV Installation in Kollam, Kerala | Defense Security Systems",
  description:
    "Defense Security Systems offers professional CCTV camera installation in Kollam, Kerala. High-definition IP cameras, smart WiFi surveillance, DVR/NVR setup, remote mobile viewing, and gate automation in Thevally, Kollam.",
  canonicalPath: "/",
  keywords: [
    "CCTV installation in Kollam",
    "Best CCTV installation in Kollam",
    "CCTV camera installation in Kollam",
    "Best CCTV installation company in Kollam",
    "CCTV camera dealers in Kollam",
    "Security systems in Kollam",
    "Home security systems in Kollam",
    "Commercial CCTV installation in Kollam",
    "IP camera installation in Kollam",
    "CCTV service in Kollam",
    "Hikvision CCTV installation Kollam",
    "Dahua security cameras Kollam",
    "CP PLUS CCTV dealer Kollam",
    "Thevally CCTV camera shop",
    "Defense Security Systems Kollam",
  ],
});

export default function HomePage() {
  return (
    <>
      <FAQJsonLd items={homeFaqs} />
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <WhoWeAre />
        <ApplicationSectors />
        <ProductsPreview />
        <ServicesPreview />
        <WhyChooseUs />
        <PartnerBrands />
        <ExpertiseSection />
        <GalleryPreview />
        <HomeFAQ />
        <SocialMediaSection />
        <FinalCTA />
      </div>
    </>
  );
}
