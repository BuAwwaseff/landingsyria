import BenefitsSection from "./components/BenefitsSection";
import FinalCtaSection from "./components/FinalCTASection";
import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PathsSection from "./components/PathsSection";
import ToolsSection from "./components/ToolsSection";
import { syriaGlobals } from "@/lib/market/syria.globals";

const sectionMap = {
  hero: <HeroSection />,
  benefits: <BenefitsSection />,
  steps: <HowItWorksSection />,
  paths: <PathsSection />,
  tools: <ToolsSection />,
  finalCta: <FinalCtaSection />,
} as const;

export default function PartnershipPage() {
  return (
    <>
      {syriaGlobals.partnership.sectionOrder.map((sectionId) => (
        <div key={sectionId}>{sectionMap[sectionId]}</div>
      ))}
    </>
  );
}
