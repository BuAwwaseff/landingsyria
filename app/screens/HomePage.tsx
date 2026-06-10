"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { getMarketDirection, syriaGlobals } from "@/lib/market/syria.globals";
import { getPlayerHomeContent } from "@/lib/player-home";

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-3">
        <span className="h-px w-10 bg-[#C6844B]/70" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C6844B]">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.02]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">{body}</p>
    </div>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHeroTitle(title: string, language: "en" | "ar") {
  const highlightWords =
    language === "ar" ? ["بسرعة", "المباشرة", "عروض"] : ["fast", "live", "offers"];
  const pattern = new RegExp(
    `(${highlightWords.map((word) => escapeRegExp(word)).join("|")})`,
    language === "en" ? "gi" : "g",
  );

  return title.split(pattern).filter(Boolean).map((part, index) => {
    const normalizedPart = language === "en" ? part.toLowerCase() : part;
    const isHighlighted = highlightWords.some((word) =>
      language === "en" ? normalizedPart === word.toLowerCase() : normalizedPart === word,
    );

    if (!isHighlighted) {
      return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
    }

    return (
      <span
        key={`${part}-${index}`}
        className="glow-contrast"
      >
        {part}
      </span>
    );
  });
}

function FeatureVisual({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.84))]" />
    </>
  );
}

export default function HomePage() {
  const { language } = useLanguage();
  const direction = getMarketDirection(language);
  const content = getPlayerHomeContent(language);
  const assets = syriaGlobals.home.assets;
  const playNowLabel = language === "ar" ? "العب الآن" : "Play now";
  const sportsPlayHref = "https://refpa3665.com/L?tag=d_4092175m_66329c_SyriaSport";
  const gamesPlayHref = "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBSyria26";
  const heroCards = [content.hero.lead, ...content.hero.sideCards];
  const heroCardThemes = [
    {
      orbClass: "bg-[#C6844B]/14",
      badgeClass: "border-[#C6844B]/24 bg-[#1A1208]/72 text-[#E4B47B]",
      wordClass: "glow-contrast",
      dotClass: "bg-[#C6844B] shadow-[0_0_16px_rgba(198,132,75,0.6)]",
    },
    {
      orbClass: "bg-[#2F6D86]/12",
      badgeClass: "border-[#2F6D86]/24 bg-[#08141B]/72 text-[#5EA6C2]",
      wordClass: "glow-green",
      dotClass: "bg-[#5EA6C2] shadow-[0_0_16px_rgba(94,166,194,0.65)]",
    },
    {
      orbClass: "bg-[#C6844B]/12",
      badgeClass: "border-[#C6844B]/24 bg-[#1A1208]/72 text-[#E4B47B]",
      wordClass: "glow-contrast",
      dotClass: "bg-[#C6844B] shadow-[0_0_16px_rgba(198,132,75,0.6)]",
    },
  ] as const;

  const containerStyle = { maxWidth: syriaGlobals.home.layout.containerWidth };
  const sectionStyle = {
    paddingTop: syriaGlobals.home.layout.sectionPaddingY,
    paddingBottom: syriaGlobals.home.layout.sectionPaddingY,
  };

  const sections = {
    hero: (
      <section
        key="hero"
        id="top"
        className="relative overflow-hidden px-4 sm:px-6"
        style={{
          paddingTop: syriaGlobals.home.layout.heroPaddingTop,
          paddingBottom: syriaGlobals.home.layout.heroPaddingBottom,
        }}
      >
        <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#2F6D86]/[0.08] blur-[140px]" />
        <div className="pointer-events-none absolute left-[6%] top-[18%] h-44 w-44 rounded-full bg-white/[0.03] blur-[100px]" />
        <div className="pointer-events-none absolute right-[4%] top-[28%] h-52 w-52 rounded-full bg-[#C6844B]/[0.08] blur-[120px]" />

        <div className="mx-auto" style={containerStyle}>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#C6844B]/30 bg-[#C6844B]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E4B47B]">
                <span className="h-2 w-2 rounded-full bg-[#C6844B]" />
                {content.hero.eyebrow}
              </div>

              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {renderHeroTitle(content.hero.title, language)}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                {content.hero.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={syriaGlobals.home.anchors.games}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#2F6D86] px-6 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                >
                  {content.hero.primary}
                </Link>

                <Link
                  href={syriaGlobals.home.anchors.offers}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#C6844B]/22 bg-[#C6844B]/12 px-6 text-sm font-semibold text-[#E4B47B] transition duration-300 hover:border-[#C6844B]/40 hover:bg-[#C6844B]/18"
                >
                  {content.hero.secondary}
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={syriaGlobals.support.telegram.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[#2F6D86]/26 bg-[#08141B]/76 px-5 text-sm font-semibold text-[#5EA6C2] transition duration-300 hover:scale-[1.02] hover:border-[#2F6D86]/42 hover:bg-[#0C1C24]"
                >
                  {content.finalCta.primary}
                </Link>

                <Link
                  href={syriaGlobals.support.email.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-[#C6844B]/22 bg-[#C6844B]/10 px-5 text-sm font-semibold text-[#E4B47B] transition duration-300 hover:scale-[1.02] hover:border-[#C6844B]/38 hover:bg-[#C6844B]/16"
                >
                  {content.finalCta.secondary}
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {content.hero.chips.map((chip) => (
                  <div
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/72"
                  >
                    {chip}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {content.hero.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[22px] border border-white/8 bg-white/[0.035] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/46">
                      {stat.label}
                    </div>
                    <div className="mt-2 text-lg font-semibold text-white">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {heroCards.map((card, index) => {
                const theme = heroCardThemes[index] ?? heroCardThemes[heroCardThemes.length - 1];

                return (
                  <article
                    key={card.title}
                    className="relative flex min-h-[176px] flex-col justify-between overflow-hidden rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(8,13,17,0.62),rgba(6,9,12,0.72))] p-5 shadow-[0_18px_56px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.035)] backdrop-blur-xl sm:p-6"
                  >
                    <div
                      className={`pointer-events-none absolute right-[-2.5rem] top-[-2.5rem] h-32 w-32 rounded-full ${theme.orbClass} blur-3xl`}
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0),rgba(255,255,255,0.025))]" />
                    <div className="relative flex items-start justify-between gap-4">
                      {card.metric ? (
                        <div
                          className={`inline-flex w-fit rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-md ${theme.badgeClass}`}
                        >
                          {card.metric}
                        </div>
                      ) : (
                        <span />
                      )}
                      <span className={`mt-1 h-2.5 w-2.5 rounded-full ${theme.dotClass}`} />
                    </div>
                    <div className="relative mt-6">
                      <p className={`text-[28px] font-semibold tracking-tight sm:text-[31px] ${theme.wordClass}`}>
                        {card.eyebrow}
                      </p>
                      <h2 className="mt-3 text-xl font-semibold text-white">{card.title}</h2>
                      <p className="mt-3 max-w-md text-sm leading-6 text-white/68">
                        {card.body}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    ),
    games: (
      <section key="games" id="games" className="px-4 sm:px-6" style={sectionStyle}>
        <div className="mx-auto" style={containerStyle}>
          <SectionHeading eyebrow={content.games.eyebrow} title={content.games.title} body={content.games.body} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.games.cards.map((card) => (
              <article
                key={card.title}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <FeatureVisual src={assets[card.asset]} alt={card.title} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
                      {card.eyebrow}
                    </p>
                    {card.metric ? (
                      <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74">
                        {card.metric}
                      </div>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/64">{card.body}</p>
                  <Link
                    href={gamesPlayHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-[44px] w-fit items-center justify-center rounded-full bg-[#2F6D86] px-5 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                  >
                    {playNowLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ),
    sports: (
      <section key="sports" id="sports" className="px-4 sm:px-6" style={sectionStyle}>
        <div className="mx-auto" style={containerStyle}>
          <SectionHeading eyebrow={content.sports.eyebrow} title={content.sports.title} body={content.sports.body} />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
              <FeatureVisual src={assets[content.sports.lead.asset]} alt={content.sports.lead.title} />
              <div className="absolute left-4 top-4 rounded-full border border-[#2F6D86]/22 bg-[#08141B]/72 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2] backdrop-blur-md">
                {content.sports.lead.metric}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
                  {content.sports.lead.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{content.sports.lead.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/68">
                  {content.sports.lead.body}
                </p>
                <Link
                  href={sportsPlayHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-[44px] w-fit items-center justify-center rounded-full bg-[#2F6D86] px-5 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                >
                  {playNowLabel}
                </Link>
              </div>
            </article>

            <div className="grid gap-4">
              {content.sports.rails.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
                >
                  <div className="grid min-h-[148px] gap-0 sm:grid-cols-[152px_1fr]">
                    <div className="relative min-h-[160px] sm:min-h-full">
                      <FeatureVisual src={assets[card.asset]} alt={card.title} />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
                          {card.eyebrow}
                        </p>
                        {card.metric ? (
                          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74">
                            {card.metric}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-white">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/64">{card.body}</p>
                      <Link
                        href={sportsPlayHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex min-h-[42px] w-fit items-center justify-center rounded-full bg-[#2F6D86] px-5 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                      >
                        {playNowLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
    offers: (
      <section key="offers" id="offers" className="px-4 sm:px-6" style={sectionStyle}>
        <div className="mx-auto" style={containerStyle}>
          <SectionHeading eyebrow={content.offers.eyebrow} title={content.offers.title} body={content.offers.body} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {content.offers.cards.map((card) => (
              <article
                key={card.title}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <FeatureVisual src={assets[card.asset]} alt={card.title} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
                      {card.eyebrow}
                    </p>
                    {card.metric ? (
                      <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74">
                        {card.metric}
                      </div>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/64">{card.body}</p>
                  {card.asset === "offerWelcome" ? (
                    <Link
                      href={gamesPlayHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex min-h-[36px] w-fit items-center justify-center rounded-full border border-[#C6844B]/26 bg-[#C6844B]/12 px-4 text-xs font-semibold text-[#E4B47B] transition duration-300 hover:bg-[#C6844B]/18"
                    >
                      Collect 200$ bonus!
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ),
    support: (
      <section
        key="support"
        id="support"
        className="px-4 pb-24 sm:px-6 sm:pb-28"
        style={{ paddingTop: syriaGlobals.home.layout.sectionPaddingY }}
      >
        <div className="mx-auto" style={containerStyle}>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.014))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6D86]/40 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[#2F6D86]/[0.05] blur-3xl" />
            <div className="pointer-events-none absolute left-0 bottom-0 h-40 w-40 bg-white/[0.02] blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#2F6D86]/30 bg-[#2F6D86]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5EA6C2]">
                  <span className="h-2 w-2 rounded-full bg-[#2F6D86]" />
                  {content.finalCta.eyebrow}
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.02]">
                  {content.finalCta.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">{content.finalCta.body}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href={syriaGlobals.support.telegram.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#2F6D86] px-6 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                >
                  {content.finalCta.primary}
                </Link>

                <Link
                  href={syriaGlobals.support.email.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white transition duration-300 hover:border-[#2F6D86]/45 hover:bg-white/[0.07]"
                >
                  {content.finalCta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
  } as const;

  return (
    <main dir={direction} className="text-white">
      {syriaGlobals.home.sectionOrder.map((sectionId) => (
        <Fragment key={sectionId}>{sections[sectionId]}</Fragment>
      ))}
    </main>
  );
}
