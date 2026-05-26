"use client";

import Image from "next/image";
import { useLanguage } from "@/app/components/LanguageProvider";

const sportsCopy = {
  en: {
    eyebrow: "Sports",
    title: "Follow live matches and move straight into the action.",
    description:
      "Sharper coverage, quicker access, and the sports that keep traffic moving every day.",
    cards: [
      {
        title: "Football",
        text: "Match-day energy, live markets, and the main traffic driver.",
        image: "/stats.png",
        tag: "Live",
        footer: "High volume",
      },
      {
        title: "Basketball",
        text: "Fast scoring, active totals, and strong second-by-second movement.",
        image: "/card.png",
        tag: "Fast",
        footer: "Daily action",
      },
      {
        title: "Tennis",
        text: "Clean momentum shifts and quick in-play updates across every set.",
        image: "/chip.png",
        tag: "In play",
        footer: "Sharp flow",
      },
      {
        title: "MMA",
        text: "Short windows, real tension, and clear fight-night interest.",
        image: "/material.png",
        tag: "Fight night",
        footer: "Strong focus",
      },
      {
        title: "Volleyball",
        text: "Fast swings, clean points, and a steady live rhythm.",
        image: "/gift.png",
        tag: "Active",
        footer: "Quick updates",
      },
      {
        title: "Table Tennis",
        text: "Short markets, rapid pace, and constant mobile-friendly movement.",
        image: "/headphone.png",
        tag: "Quick play",
        footer: "Fast cycle",
      },
    ],
  },
  ar: {
    eyebrow: "الرياضة",
    title: "تابع المباريات المباشرة وادخل مباشرة إلى الحركة.",
    description:
      "تغطية أدق، وصول أسرع، والرياضات التي تبقي الحركة اليومية مستمرة.",
    cards: [
      {
        title: "كرة القدم",
        text: "إيقاع يوم المباراة، وأسواق مباشرة، وحركة هي الأقوى.",
        image: "/stats.png",
        tag: "مباشر",
        footer: "حجم عالٍ",
      },
      {
        title: "كرة السلة",
        text: "تسجيل سريع، مجاميع نشطة، وحركة قوية لحظة بلحظة.",
        image: "/card.png",
        tag: "سريع",
        footer: "حركة يومية",
      },
      {
        title: "التنس",
        text: "تحولات واضحة في الزخم وتحديثات سريعة خلال كل مجموعة.",
        image: "/chip.png",
        tag: "داخل اللعب",
        footer: "تدفق قوي",
      },
      {
        title: "الفنون القتالية",
        text: "نوافذ قصيرة، توتر حقيقي، واهتمام واضح بليلة النزال.",
        image: "/material.png",
        tag: "ليلة القتال",
        footer: "تركيز قوي",
      },
      {
        title: "الكرة الطائرة",
        text: "تحولات سريعة، نقاط نظيفة، وإيقاع مباشر ثابت.",
        image: "/gift.png",
        tag: "نشط",
        footer: "تحديثات سريعة",
      },
      {
        title: "تنس الطاولة",
        text: "أسواق قصيرة، إيقاع سريع، وحركة مستمرة مناسبة للموبايل.",
        image: "/headphone.png",
        tag: "لعب سريع",
        footer: "دورة سريعة",
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

function SportCard({
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

export default function SportsSection() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const content = isArabic ? sportsCopy.ar : sportsCopy.en;

  return (
    <section
      id="sports"
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
            { label: isArabic ? "الأقوى" : "Biggest", value: isArabic ? "كرة القدم" : "Football" },
            { label: isArabic ? "الأسرع" : "Fast pace", value: isArabic ? "كرة السلة" : "Basketball" },
            { label: isArabic ? "المباشر" : "In play", value: isArabic ? "التنس" : "Tennis" },
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
            <SportCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
