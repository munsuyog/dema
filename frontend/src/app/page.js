import Footer from "@/components/common/footer/footer";
import Navbar from "@/components/common/navbar/navbar";
import ComingSoon from "@/components/home/coming-soon/coming-soon";
import FreeOwnership from "@/components/home/free-ownership/free-ownership";
import GrowWithUs from "@/components/home/grow-with-us/grow-with-us";
import HeroSection from "@/components/home/hero-section/hero-section";
import HowWorksSection from "@/components/home/how-works-section/how-works-section";
import ItemsSection from "@/components/home/items-section/items-section";
import JoinUs from "@/components/home/join-us/join-us";
import RoadmapSection from "@/components/home/roadmap-section/roadmap-section";
import RulesSection from "@/components/home/rules-section/rules-section";
import SaveOnSection from "@/components/home/save-on-section/save-on-section";
import WallOfLove from "@/components/home/wall-of-love/wall-of-love";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ComingSoon />
      <ItemsSection />
      <FreeOwnership />
      <SaveOnSection />
      <HowWorksSection />
      <RoadmapSection />
      <RulesSection />
      <WallOfLove />
      <GrowWithUs />
      <JoinUs />
      <Footer />
    </div>
  );
}
