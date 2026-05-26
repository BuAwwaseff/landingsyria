"use client";

import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";
import { syriaGlobals } from "@/lib/market/syria.globals";
import { FadeUp, StaggerReveal } from "./Reveal";

function HeroMetric({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[18px] border border-white/8 bg-white/[0.035] px-3 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[22px] sm:px-4 sm:py-4 ${className}`}
    >
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-base font-semibold text-white sm:text-lg">{value}</div>
    </div>
  );
}

export default function HeroSection() {
  const { language, t } = useLanguage();
  const metrics = t.hero.metrics;

  return (
    <section
      id="top"
      className="relative px-4 sm:px-6 lg:px-12"
      style={{
        paddingTop: syriaGlobals.partnership.layout.heroPaddingTop,
        paddingBottom: syriaGlobals.partnership.layout.heroPaddingBottom,
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#2F6D86]/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-white/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute right-[4%] top-[22%] h-52 w-52 rounded-full bg-[#C6844B]/[0.08] blur-[120px]" />

      <div
        className="mx-auto"
        style={{ maxWidth: syriaGlobals.partnership.layout.containerWidth }}
      >
        <StaggerReveal
          immediate
          amount={0.15}
          className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.014))] px-4 py-6 shadow-[0_30px_90px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[36px] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        >
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C6844B]/50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 bg-[#C6844B]/[0.06] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 bg-white/[0.02] blur-3xl" />

          <div className="flex justify-center">
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <FadeUp>
                <div className="lp-eyebrow inline-flex items-center gap-2 sm:gap-3 text-[#C6844B]">
                  <span className="h-px w-5 bg-[#C6844B]/45 sm:w-8" />
                  {t.hero.eyebrow[language]}
                  <span className="h-px w-5 bg-[#C6844B]/45 sm:w-8" />
                </div>
              </FadeUp>

              <FadeUp>
                <h1 className="lp-hero-title mx-auto mt-7 max-w-4xl text-[#F5F7F4]">
                  <span className="block">{t.hero.headlineLine1[language]}</span>
                  <span className="glow-contrast mt-6 block">
                    {t.hero.headlineLine2[language]}
                  </span>
                </h1>
              </FadeUp>

              <FadeUp>
                <p className="lp-body mx-auto mt-5 max-w-xl text-white/62">
                  {t.hero.body[language]}
                </p>
              </FadeUp>

              <FadeUp>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                  <Link
                    href="#paths"
                    className="lp-button inline-flex min-h-[50px] items-center justify-center rounded-[16px] border border-[#C6844B]/30 bg-[#C6844B] px-5 py-3 text-[#1C1207] shadow-[0_14px_34px_rgba(198,132,75,0.2)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E4B47B] sm:min-h-[52px] sm:px-6"
                  >
                    {t.hero.cta[language]}
                  </Link>

                  <Link
                    href="#steps"
                    className="lp-button inline-flex min-h-[50px] items-center justify-center rounded-[16px] border border-white/10 bg-white/[0.045] px-5 py-3 text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] sm:min-h-[52px] sm:px-6"
                  >
                    {t.hero.secondaryCta[language]}
                  </Link>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3">
                  {metrics.map((item, index) => (
                    <HeroMetric
                      key={item.label.en}
                      label={item.label[language]}
                      value={item.value[language]}
                      className={index === metrics.length - 1 ? "col-span-2 mx-auto w-full max-w-[220px] sm:col-span-1 sm:max-w-none" : ""}
                    />
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
