import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ApplicationSectors } from "@/components/home/ApplicationSectors";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PartnerBrands } from "@/components/home/PartnerBrands";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { SocialMediaSection } from "@/components/home/SocialMediaSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
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
      <SocialMediaSection />
      <FinalCTA />
    </div>
  );
}

