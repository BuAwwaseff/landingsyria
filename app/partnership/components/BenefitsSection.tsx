"use client";

import { useLanguage } from "../../components/LanguageProvider";
import { syriaGlobals } from "@/lib/market/syria.globals";
import { FadeUp, StaggerReveal } from "./Reveal";
import SectionHeading from "@/app/components/SectionHeading";

function BenefitCard({
  title,
  text,
  className = "",
}: {
  title: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex h-full flex-col overflow-hidden rounded-[20px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-[170px] sm:rounded-[24px] sm:p-5 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6D86]/30 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-[#2F6D86]/[0.03] blur-2xl" />

      <h3 className="lp-card-title text-[#F5F7F4]">{title}</h3>
      <p className="lp-body-sm mt-2.5 text-white/60">{text}</p>
    </div>
  );
}

export default function BenefitsSection() {
  const { language, t } = useLanguage();

  return (
    <section
      id="benefits"
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
            eyebrow={t.benefits.eyebrow[language]}
            title={t.benefits.title[language]}
            text={t.benefits.text[language]}
          />

          <div className="mt-6">
            <div className="grid gap-4 lg:grid-cols-2">
              <FadeUp>
                <BenefitCard
                  title={t.benefits.agent.title[language]}
                  text={t.benefits.agent.text[language]}
                />
              </FadeUp>

              <FadeUp>
                <BenefitCard
                  title={t.benefits.partner.title[language]}
                  text={t.benefits.partner.text[language]}
                />
              </FadeUp>
            </div>

            <div className="mt-3 lg:mx-auto lg:w-[40%]">
              <FadeUp>
                <BenefitCard
                  title={t.benefits.common.title[language]}
                  text={t.benefits.common.text[language]}
                />
              </FadeUp>
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
