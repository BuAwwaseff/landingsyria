"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../../components/LanguageProvider";
import { syriaGlobals } from "@/lib/market/syria.globals";
import { FadeUp, StaggerReveal } from "./Reveal";

function ContactButton({
  href,
  icon,
  label,
  variant = "green",
}: {
  href: string;
  icon: string;
  label: string;
  variant?: "green" | "gold";
}) {
  const palette =
    variant === "gold"
      ? "border-[#C6844B]/28 bg-[#C6844B] text-[#1C1207] shadow-[0_14px_30px_rgba(198,132,75,0.18)] hover:bg-[#E4B47B]"
      : "border-[#2F6D86]/28 bg-[#2F6D86] text-[#07151C] shadow-[0_14px_30px_rgba(47,109,134,0.16)] hover:bg-[#5EA6C2]";

  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex min-h-[54px] w-full items-center justify-center overflow-hidden rounded-[16px] border px-4 transition-all duration-300 ease-out sm:h-[58px] sm:w-[58px] sm:px-0 sm:hover:w-[190px] ${palette}`}
    >
      <div className="flex w-full items-center justify-center gap-3 transition-all duration-300 sm:gap-0 sm:px-0 sm:group-hover:gap-3 sm:group-hover:px-4">
        <Image
          src={icon}
          alt={label}
          width={20}
          height={20}
          className="h-5 w-5 shrink-0 object-contain brightness-0 invert"
        />

        <span className="lp-button max-w-[180px] overflow-hidden whitespace-nowrap leading-[1.35] opacity-100 transition-all duration-300 sm:max-w-0 sm:opacity-0 sm:group-hover:max-w-[140px] sm:group-hover:opacity-100">
          {label}
        </span>
      </div>
    </Link>
  );
}

export default function FinalCtaSection() {
  const { language, t } = useLanguage();

  return (
    <section
      id="final-cta"
      className="relative px-4 pb-24 sm:px-6 lg:px-12"
      style={{ paddingTop: syriaGlobals.partnership.layout.sectionPaddingY }}
    >
      <div
        className="mx-auto max-w-5xl"
        style={{ maxWidth: syriaGlobals.partnership.layout.containerWidth }}
      >
        <StaggerReveal
          amount={0.18}
          className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.014))] px-4 py-8 text-center shadow-[0_30px_90px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[40px] sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#C6844B]/45 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[#C6844B]/[0.05] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 bg-white/[0.02] blur-3xl" />

          <div className="relative z-10">
            <FadeUp>
              <div className="lp-eyebrow inline-flex items-center gap-2 sm:gap-3 text-[#C6844B]">
                <span className="h-px w-5 bg-[#C6844B]/45 sm:w-8" />
                {t.finalCta.eyebrow[language]}
                <span className="h-px w-5 bg-[#C6844B]/45 sm:w-8" />
              </div>
            </FadeUp>

            <FadeUp>
              <h2 className="lp-section-title mx-auto mt-6 max-w-3xl text-[#F5F7F4]">
                {t.finalCta.title[language]}
              </h2>
            </FadeUp>

            <FadeUp>
              <p className="lp-body mx-auto mt-4 max-w-2xl text-white/62">
                {t.finalCta.text[language]}
              </p>
            </FadeUp>

            <FadeUp>
              <div className="mt-8 grid gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4">
                <ContactButton
                  href={syriaGlobals.support.telegram.href}
                  icon={syriaGlobals.support.telegram.icon}
                  label={t.finalCta.telegramCta[language]}
                />

                <ContactButton
                  href={syriaGlobals.support.email.href}
                  icon={syriaGlobals.support.email.icon}
                  label={t.finalCta.emailCta[language]}
                  variant="gold"
                />
              </div>
            </FadeUp>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
