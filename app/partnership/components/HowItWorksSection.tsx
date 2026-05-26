"use client";

import { useLanguage } from "../../components/LanguageProvider";
import { syriaGlobals } from "@/lib/market/syria.globals";
import { FadeUp, StaggerReveal } from "./Reveal";
import SectionHeading from "@/app/components/SectionHeading";

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-white/12 sm:min-h-[230px] sm:rounded-[24px] sm:p-[18px]">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6D86]/30 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#2F6D86]/45 to-transparent" />

      <div className="flex h-11 w-11 items-center justify-center rounded-[13px] border border-[#2F6D86]/25 bg-[#2F6D86]/10 text-sm font-semibold text-[#2F6D86]">
        {number}
      </div>

      <h3 className="lp-card-title mt-4 max-w-[15ch] text-[#F5F7F4]">
        {title}
      </h3>

      <p className="lp-body-sm mt-3 text-white/60">{text}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  const { language, t } = useLanguage();

  return (
    <section
      id="steps"
      className="relative px-4 sm:px-6 lg:px-12"
      style={{
        paddingTop: syriaGlobals.partnership.layout.sectionPaddingY,
        paddingBottom: syriaGlobals.partnership.layout.sectionPaddingY,
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: syriaGlobals.partnership.layout.containerWidth }}
      >
        <StaggerReveal amount={0.16}>
          <SectionHeading
            eyebrow={t.howItWorks.eyebrow[language]}
            title={t.howItWorks.title[language]}
            text={t.howItWorks.text[language]}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <FadeUp>
              <StepCard
                number={t.howItWorks.steps.first.number[language]}
                title={t.howItWorks.steps.first.title[language]}
                text={t.howItWorks.steps.first.text[language]}
              />
            </FadeUp>

            <FadeUp>
              <StepCard
                number={t.howItWorks.steps.second.number[language]}
                title={t.howItWorks.steps.second.title[language]}
                text={t.howItWorks.steps.second.text[language]}
              />
            </FadeUp>

            <FadeUp>
              <StepCard
                number={t.howItWorks.steps.third.number[language]}
                title={t.howItWorks.steps.third.title[language]}
                text={t.howItWorks.steps.third.text[language]}
              />
            </FadeUp>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
