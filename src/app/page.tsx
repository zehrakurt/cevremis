import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import ProductGroups from "@/components/ProductGroups";
import MiddleBanner from "@/components/MiddleBanner";
import AboutSection from "@/components/AboutSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <InfoBoxes />
      <ProductGroups />
      <AboutSection />
      <ContactFormSection />
      <MiddleBanner />
      {/* Rest of the page content */}
    </div>
  );
}
