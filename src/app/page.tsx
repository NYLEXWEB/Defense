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
  title: "Best CCTV Camera Installation & Smart Security Systems in Kollam",
  description:
    "Defense Security Systems is Kollam's top-rated CCTV installation & electronic security provider. HD IP cameras, WiFi cameras, remote gate automation, and 24/7 technical service in Thevally, Kollam, Kerala.",
  canonicalPath: "/",
  keywords: [
    "Best CCTV camera installation Kollam",
    "Security camera dealers in Kollam",
    "Hikvision CCTV installation Kerala",
    "Dahua security cameras Kollam",
    "CP PLUS CCTV dealer Kerala",
    "WiFi smart camera home security Kerala",
    "Automatic remote gate systems Kollam",
    "4K IP CCTV surveillance systems Kerala",
    "CCTV repair and AMC service Kollam",
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
