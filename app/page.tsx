import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { CoreValuesSection } from "@/components/sections/core-values";
import { GallerySection } from "@/components/sections/gallery";
import { HeroSection } from "@/components/sections/hero";
import { MissionVisionSection } from "@/components/sections/mission-vision";
import { PartnersSection } from "@/components/sections/partners";
import { SubsidiariesSection } from "@/components/sections/subsidiaries";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <SubsidiariesSection />
      <CoreValuesSection />
      <PartnersSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
