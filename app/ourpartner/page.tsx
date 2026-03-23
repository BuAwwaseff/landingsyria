import HeroGatewaySection from "./components/HeroGatewaySection";
import SharedFoundationSection from "./components/SharedFoundationSection";
import DifferencesSection from "./components/DifferencesSection";
import FinalCTA from "./components/FinalCTA";
import { getOurPartnerPageContent } from "@/lib/dictionary";

export default function OurPartnerPage() {
  function MiddleDivider() {
  return (
    <div className="hidden items-center justify-center px-1 md:flex">
      <div className="relative h-full min-h-[420px] w-[2px] rounded-full bg-gradient-to-b from-[#FFC100]/8 via-[#FFC100]/35 to-[#FFC100]/8 shadow-[0_0_16px_rgba(255,193,0,0.12)]">
        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFC100]/35 bg-[#FFC100]/12 shadow-[0_0_22px_rgba(255,193,0,0.16)] backdrop-blur-sm" />
        <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFC100]/22 bg-[#FFC100]/14" />
      </div>
    </div>
  );
}
 function BottomDivider() {
  return (
    <div className="relative mt-5 hidden md:block">
      <div className="relative h-14">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#FFC100]/8 via-[#FFC100]/35 to-[#FFC100]/8 shadow-[0_0_18px_rgba(255,193,0,0.14)]" />
        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFC100]/35 bg-[#FFC100]/12 shadow-[0_0_22px_rgba(255,193,0,0.16)] backdrop-blur-sm" />
        <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFC100]/22 bg-[#FFC100]/14" />
      </div>
    </div>
  );
}
  const content = getOurPartnerPageContent();
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto max-w-6xl px-4 py-5 sm:px-5">
        <HeroGatewaySection hero={content.hero} />
        <SharedFoundationSection section={content.sharedFoundation} />
        <BottomDivider/>
        <DifferencesSection section={content.differences} />
        <FinalCTA/>
        <footer/>
      </section>
    </main>
  );
}