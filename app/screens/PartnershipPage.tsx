import BenefitsSection from "../partnership/components/BenefitsSection";
import FinalCtaSection from "../partnership/components/FinalCTASection";
import HeroSection from "../partnership/components/HeroSection";
import HowItWorksSection from "../partnership/components/HowItWorksSection";
import PathsSection from "../partnership/components/PathsSection";
import ToolsSection from "../partnership/components/ToolsSection";
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
