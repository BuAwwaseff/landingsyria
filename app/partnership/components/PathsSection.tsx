"use client";

import Image from "next/image";
import Link from "next/link";
import { PathCardProps } from "@/lib/types";
import { useLanguage } from "../../components/LanguageProvider";
import { syriaGlobals } from "@/lib/market/syria.globals";
import { FadeUp, StaggerReveal } from "./Reveal";
import SectionHeading from "@/app/components/SectionHeading";

function PathCard({
  side,
  title,
  text,
  image,
  cta,
  ctaHref,
  secondaryCta,
  secondaryHref,
  pointA,
  pointB,
}: PathCardProps) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.038),rgba(255,255,255,0.012))] p-4 shadow-[0_22px_60px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[30px] sm:p-7 lg:min-h-[620px]">
      <div className="pointer-events-none absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6D86]/35 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-[#2F6D86]/[0.035] blur-3xl" />

      <div className="lp-eyebrow text-[#2F6D86]">{side}</div>

      <div className="mt-5 overflow-hidden rounded-[24px] border border-white/10 bg-black/30">
        <div className="relative h-[160px]">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.18)_40%,rgba(0,0,0,0.72)_100%)]" />
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <div>
          <h3 className="lp-section-title max-w-[14ch] text-[#F5F7F4]">
            {title}
          </h3>

          <p className="lp-body-sm mt-4 max-w-xl text-white/60">
            {text}
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href={ctaHref}
            className="lp-button inline-flex min-h-[48px] items-center justify-center rounded-[15px] border border-[#2F6D86]/28 bg-[#2F6D86] px-5 py-3 text-[#07151C] shadow-[0_14px_30px_rgba(47,109,134,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#5EA6C2] sm:min-h-[50px]"
          >
            {cta}
          </Link>

          <Link
            href={secondaryHref}
            className="lp-button inline-flex min-h-[48px] items-center justify-center rounded-[15px] border border-white/10 bg-white/[0.045] px-5 py-3 text-white/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.07] sm:min-h-[50px]"
          >
            {secondaryCta}
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-3 pt-2 sm:pt-8 sm:auto-rows-fr sm:grid-cols-2">
        <div className="relative flex h-full flex-col overflow-hidden rounded-[18px] border border-white/8 bg-black/28 p-4 sm:min-h-[185px] sm:rounded-[20px]">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#2F6D86]/45 to-transparent" />
          <div className="lp-eyebrow text-[#2F6D86]">{pointA.title}</div>
          <p className="lp-body-sm mt-3 text-white/60">{pointA.text}</p>
        </div>

        <div className="relative flex h-full flex-col overflow-hidden rounded-[18px] border border-white/8 bg-black/28 p-4 sm:min-h-[185px] sm:rounded-[20px]">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#2F6D86]/45 to-transparent" />
          <div className="lp-eyebrow text-[#2F6D86]">{pointB.title}</div>
          <p className="lp-body-sm mt-3 text-white/60">{pointB.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function PathsSection() {
  const { language, t } = useLanguage();
  const assets = syriaGlobals.partnership.assets;

  return (
    <section
      id="paths"
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
            eyebrow={t.paths.eyebrow[language]}
            title={t.paths.title[language]}
            text={t.paths.text[language]}
          />

          <div className="mt-12 grid gap-5 lg:auto-rows-fr lg:grid-cols-2">
            <FadeUp>
              <PathCard
                side={t.paths.agent.side[language]}
                title={t.paths.agent.title[language]}
                text={t.paths.agent.text[language]}
                image={assets.pathAgent}
                cta={t.paths.agent.cta[language]}
                ctaHref="#final-cta"
                secondaryCta={t.paths.agent.secondaryCta[language]}
                secondaryHref="#steps"
                pointA={{
                  title: t.paths.agent.pointA.title[language],
                  text: t.paths.agent.pointA.text[language],
                }}
                pointB={{
                  title: t.paths.agent.pointB.title[language],
                  text: t.paths.agent.pointB.text[language],
                }}
              />
            </FadeUp>

            <FadeUp>
              <PathCard
                side={t.paths.partner.side[language]}
                title={t.paths.partner.title[language]}
                text={t.paths.partner.text[language]}
                image={assets.pathPartner}
                cta={t.paths.partner.cta[language]}
                ctaHref="#final-cta"
                secondaryCta={t.paths.partner.secondaryCta[language]}
                secondaryHref="#steps"
                pointA={{
                  title: t.paths.partner.pointA.title[language],
                  text: t.paths.partner.pointA.text[language],
                }}
                pointB={{
                  title: t.paths.partner.pointB.title[language],
                  text: t.paths.partner.pointB.text[language],
                }}
              />
            </FadeUp>
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
