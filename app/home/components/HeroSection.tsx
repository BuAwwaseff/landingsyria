"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";

const copy = {
  en: {
    badge: "SYRIA HOME",
    title: "Live action, top games, and sports that move fast.",
    description:
      "Jump straight into the matches, tables, and digital titles players open first.",
    primaryCta: "Play Now",
    secondaryCta: "Explore Sports",
    chips: ["Live Matches", "Top Tables", "Fast Access"],
    heroLabel: "Live now",
    heroTitle: "Match center",
    heroText: "Fast entry, cleaner flow, and the daily action players follow.",
    gamesTitle: "Games",
    gamesText: "Quick access to the titles players open first.",
    sportsTitle: "Sports",
    sportsText: "Live matches, sharper markets, and daily movement.",
    egamesTitle: "E-Games",
    egamesText: "Digital competition with steady player energy.",
  },
  ar: {
    badge: "الصفحة الرئيسية",
    title: "حركة مباشرة، ألعاب رئيسية، ورياضيّات تتحرك بسرعة.",
    description:
      "ادخل مباشرة إلى المباريات وطاولات اللعب والعناوين الرقمية التي يفتحها اللاعبون أولًا.",
    primaryCta: "ابدأ الآن",
    secondaryCta: "استكشف الرياضة",
    chips: ["مباريات مباشرة", "طاولات رئيسية", "وصول سريع"],
    heroLabel: "مباشر الآن",
    heroTitle: "مركز المباريات",
    heroText: "دخول أسرع، تدفق أنظف، وحركة يومية يتابعها اللاعبون باستمرار.",
    gamesTitle: "الألعاب",
    gamesText: "طريق سريع إلى العناوين التي يعود إليها اللاعبون أولًا.",
    sportsTitle: "الرياضة",
    sportsText: "مباريات مباشرة، أسواق أدق، وحركة يومية أقوى.",
    egamesTitle: "الألعاب الإلكترونية",
    egamesText: "منافسة رقمية بإيقاع ثابت وحضور قوي.",
  },
} as const;

const heroImages = {
  main: "/stats.png",
  games: "/card.png",
  sports: "/chip.png",
  egames: "/gift.png",
};

function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#2F6D86]/30 bg-[#2F6D86]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5EA6C2]">
      <span className="h-2 w-2 rounded-full bg-[#2F6D86]" />
      {children}
    </div>
  );
}

function HeroChip({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72">
      {label}
    </div>
  );
}

function HeroMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/8 bg-white/[0.035] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function VisualTile({
  title,
  text,
  image,
  tag,
  className = "",
  priority = false,
}: {
  title: string;
  text: string;
  image: string;
  tag: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-black/35 shadow-[0_22px_64px_rgba(0,0,0,0.28)] ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.26)_44%,rgba(0,0,0,0.82)_100%)]" />
      <Image
        src={image}
        alt={title}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover opacity-90 transition duration-500"
      />
      <div className="absolute left-4 top-4">
        <div className="rounded-full border border-[#2F6D86]/22 bg-[#08141B]/72 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2] backdrop-blur-md">
          {tag}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="max-w-[18rem]">
          <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/74">{text}</p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8" />
    </div>
  );
}

export default function HeroSection() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const content = isArabic ? copy.ar : copy.en;

  return (
    <section
      id="top"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#2F6D86]/[0.08] blur-[140px]" />
      <div className="pointer-events-none absolute left-[6%] top-[18%] h-44 w-44 rounded-full bg-white/[0.03] blur-[100px]" />
      <div className="pointer-events-none absolute right-[4%] top-[28%] h-52 w-52 rounded-full bg-[#2F6D86]/[0.06] blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className={isArabic ? "lg:order-2 text-right" : ""}>
            <SectionBadge>{content.badge}</SectionBadge>

            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
              {content.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#games"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#2F6D86] px-6 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
              >
                {content.primaryCta}
              </Link>

              <Link
                href="#sports"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white transition duration-300 hover:border-[#2F6D86]/45 hover:bg-white/[0.07]"
              >
                {content.secondaryCta}
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {content.chips.map((chip) => (
                <HeroChip key={chip} label={chip} />
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <HeroMetric label="Focus" value="Live matches" />
              <HeroMetric label="Speed" value="Fast tables" />
              <HeroMetric label="Access" value="One tap in" />
            </div>
          </div>

          <div className={isArabic ? "lg:order-1" : ""}>
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.014))] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6D86]/40 to-transparent" />
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[#2F6D86]/[0.05] blur-3xl" />
              <div className="pointer-events-none absolute left-0 bottom-0 h-40 w-40 bg-white/[0.02] blur-3xl" />

              <div className="relative mb-4 flex items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2F6D86]/20 bg-[#2F6D86]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5EA6C2]">
                  <span className="h-2 w-2 rounded-full bg-[#2F6D86]" />
                  {content.heroLabel}
                </div>

                <div className="rounded-full border border-white/8 bg-black/28 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/58">
                  Daily player flow
                </div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                <VisualTile
                  title={content.heroTitle}
                  text={content.heroText}
                  image={heroImages.main}
                  tag="Live board"
                  className="min-h-[460px]"
                  priority
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <VisualTile
                    title={content.gamesTitle}
                    text={content.gamesText}
                    image={heroImages.games}
                    tag="24/7"
                    className="min-h-[210px]"
                  />

                  <VisualTile
                    title={content.sportsTitle}
                    text={content.sportsText}
                    image={heroImages.sports}
                    tag="Live"
                    className="min-h-[210px]"
                  />

                  <VisualTile
                    title={content.egamesTitle}
                    text={content.egamesText}
                    image={heroImages.egames}
                    tag="Fast"
                    className="min-h-[210px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
