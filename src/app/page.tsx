import { HeroSection } from "@/components/home/HeroSection";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ProductsPreview } from "@/components/home/ProductsPreview";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PartnerBrands } from "@/components/home/PartnerBrands";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { ReviewsPreview } from "@/components/home/ReviewsPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <ProductsPreview />
      <ServicesPreview />
      <WhyChooseUs />
      <PartnerBrands />
      <ExpertiseSection />
      <ReviewsPreview />
      <FinalCTA />
      <Footer />
    </div>
  );
}
