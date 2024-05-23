import { useRef } from "react";
import Footer from '../components/common/FooterComponent/FooterComponent'
import Navbar from "../components/common/NavbarComponent/NavbarComponent";
import ComingSoon from "../components/home/ComingSoon/ComingSoon";
import FreeOwnership from "../components/home/FreeOwnership/FreeOwnership";
import GrowWithUs from "../components/home/GrowWithUs/GrowWithUs";
import HeroSection from "../components/home/HeroSection/HeroSection";
import HowWorksSection from "../components/home/HowWorksSection/HowWorksSection";
import ItemsSection from "../components/home/ItemsSection/ItemsSection";
import JoinUs from "../components/home/JoinUs/JoinUs";
import RoadmapSection from "../components/home/RoadmapSection/RoadmapSection";
import RulesSection from "../components/home/RulesSection/RulesSection";
import SaveOnSection from "../components/home/SaveOnSection/SaveOnSection";
import WallOfLove from "../components/home/WallOfLove/WallOfLove";
import { DeviceProvider } from "../contexts/DeviceContext";

export default function Home() {
  const downloadBtn = useRef();
  return (
    <DeviceProvider>
      <Navbar downloadBtn={downloadBtn} />
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
      <JoinUs downloadBtn={downloadBtn} />
      <Footer />
    </DeviceProvider>
  );
}
