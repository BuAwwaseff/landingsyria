"use client";

import SectionHeading from "@/app/components/SectionHeading";
import { useLanguage } from "../../components/LanguageProvider";
import { getLocalizedText, syriaContent } from "@/lib/market/syria.content";
import { syriaGlobals } from "@/lib/market/syria.globals";
import { FadeUp, StaggerReveal } from "./Reveal";

function ToolCard({
  eyebrow,
  title,
  text,
  metric,
}: {
  eyebrow: string;
  title: string;
  text: string;
  metric: string;
}) {
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] p-4 shadow-[0_18px_44px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] sm:min-h-[220px] sm:rounded-[24px] sm:p-[18px]">
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6D86]/35 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-[#2F6D86]/[0.04] blur-3xl" />

      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
          {eyebrow}
        </p>
        <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74">
          {metric}
        </div>
      </div>

      <h3 className="mt-3 text-lg font-semibold text-white sm:text-[1.375rem]">
        {title}
      </h3>
      <p className="mt-2.5 text-sm leading-6 text-white/62">{text}</p>
    </article>
  );
}

export default function ToolsSection() {
  const { language } = useLanguage();
  const tools = syriaContent.partnership.tools;

  return (
    <section
      id="tools"
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
            eyebrow={getLocalizedText(tools.eyebrow, language)}
            title={getLocalizedText(tools.title, language)}
            text={getLocalizedText(tools.text, language)}
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {tools.cards.map((card) => (
              <FadeUp key={card.asset}>
                <ToolCard
                  eyebrow={getLocalizedText(card.eyebrow, language)}
                  title={getLocalizedText(card.title, language)}
                  text={getLocalizedText(card.text, language)}
                  metric={getLocalizedText(card.metric, language)}
                />
              </FadeUp>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
