"use client";

import Image from "next/image";
import { useLanguage } from "@/app/components/LanguageProvider";

const gamesCopy = {
  en: {
    eyebrow: "Games",
    title: "Play the casino titles players keep opening.",
    description:
      "Fast rounds, premium tables, and the categories that drive daily play.",
    cards: [
      {
        title: "Live Casino",
        text: "Live dealers, cleaner tables, and smoother access to the action.",
        image: "/card.png",
        tag: "Live",
        footer: "Top traffic",
      },
      {
        title: "Slots",
        text: "Quick sessions, strong visuals, and the reels players return to.",
        image: "/chip.png",
        tag: "Popular",
        footer: "Fast rounds",
      },
      {
        title: "Crash",
        text: "Sharp pace, short cycles, and instant momentum for mobile play.",
        image: "/stats.png",
        tag: "Fast",
        footer: "Quick entry",
      },
      {
        title: "Roulette",
        text: "Simple decisions and a classic table flow that never slows down.",
        image: "/gift.png",
        tag: "Classic",
        footer: "Daily demand",
      },
      {
        title: "Blackjack",
        text: "Steady tables with a premium feel and familiar player energy.",
        image: "/material.png",
        tag: "Stable",
        footer: "Smart play",
      },
      {
        title: "Aviator",
        text: "Fast exits, quick hits, and a format built for mobile momentum.",
        image: "/headphone.png",
        tag: "Trending",
        footer: "Short sessions",
      },
    ],
  },
  ar: {
    eyebrow: "الألعاب",
    title: "العناوين التي يفتحها اللاعبون مرة بعد مرة.",
    description:
      "جولات سريعة، طاولات أقوى، والعناوين التي تحرّك اللعب اليومي.",
    cards: [
      {
        title: "كازينو مباشر",
        text: "موزعون مباشرين، طاولات أنظف، ووصول أسرع إلى الحركة.",
        image: "/card.png",
        tag: "مباشر",
        footer: "حركة قوية",
      },
      {
        title: "سلوتس",
        text: "جلسات قصيرة، صور قوية، وعناوين يعود إليها اللاعبون باستمرار.",
        image: "/chip.png",
        tag: "شائع",
        footer: "جولات سريعة",
      },
      {
        title: "كراش",
        text: "إيقاع سريع، دورات قصيرة، وزخم فوري مناسب للموبايل.",
        image: "/stats.png",
        tag: "سريع",
        footer: "دخول فوري",
      },
      {
        title: "الروليت",
        text: "اختيارات بسيطة وتدفق كلاسيكي لا يفقد سرعته.",
        image: "/gift.png",
        tag: "كلاسيكي",
        footer: "طلب يومي",
      },
      {
        title: "بلاك جاك",
        text: "طاولات ثابتة بحضور مميز وطاقة لاعبين مألوفة.",
        image: "/material.png",
        tag: "ثابت",
        footer: "لعب ذكي",
      },
      {
        title: "أفييتر",
        text: "خروج سريع، لقطات قصيرة، وصيغة مناسبة للإيقاع السريع.",
        image: "/headphone.png",
        tag: "رائج",
        footer: "جلسات قصيرة",
      },
    ],
  },
} as const;

function SectionHeading({
  eyebrow,
  title,
  description,
  isArabic,
}: {
  eyebrow: string;
  title: string;
  description: string;
  isArabic: boolean;
}) {
  return (
    <div className={`mb-8 max-w-3xl ${isArabic ? "mr-auto text-right" : ""}`}>
      <div
        className={`mb-3 inline-flex items-center gap-3 ${
          isArabic ? "flex-row-reverse" : ""
        }`}
      >
        <span className="h-px w-10 bg-[#2F6D86]/70" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#2F6D86]">
          {eyebrow}
        </span>
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.02]">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function GameCard({
  title,
  text,
  image,
  tag,
  footer,
}: {
  title: string;
  text: string;
  image: string;
  tag: string;
  footer: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#2F6D86]/35">
      <div className="relative aspect-[16/11] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_36%,rgba(0,0,0,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_36%)] opacity-70" />
        <div className="absolute left-4 top-4 rounded-full border border-[#2F6D86]/25 bg-[#07131A]/72 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2] backdrop-blur-md">
          {tag}
        </div>
        <div className="absolute right-4 bottom-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74 backdrop-blur-md">
          {footer}
        </div>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/64">{text}</p>
        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </article>
  );
}

export default function GamesSection() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const content = isArabic ? gamesCopy.ar : gamesCopy.en;

  return (
    <section
      id="games"
      dir={isArabic ? "rtl" : "ltr"}
      className="px-4 py-14 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
          isArabic={isArabic}
        />

        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: isArabic ? "الأسرع" : "Fastest", value: isArabic ? "طاولات مباشرة" : "Live tables" },
            { label: isArabic ? "الأكثر" : "Top pick", value: isArabic ? "جلسات قصيرة" : "Short sessions" },
            { label: isArabic ? "الحضور" : "Daily flow", value: isArabic ? "حركة ثابتة" : "Steady action" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-white/8 bg-white/[0.035] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5EA6C2]">
                {item.label}
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {content.cards.map((card) => (
            <GameCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
