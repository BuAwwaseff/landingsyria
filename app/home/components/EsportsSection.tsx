"use client";

import Image from "next/image";
import { useLanguage } from "@/app/components/LanguageProvider";

const esportsCopy = {
  en: {
    eyebrow: "E-Games",
    title: "Competitive titles with constant momentum.",
    description:
      "Digital-first action, live events, and the games players are following right now.",
    cards: [
      {
        title: "CS2",
        description:
          "Map pressure, live rounds, and a clean flow for active match traffic.",
        image: "/stats.png",
        topTag: "Live rounds",
        chips: ["Maps", "Fast updates"],
        footer: "Sharp action",
      },
      {
        title: "Dota 2",
        description:
          "Draft edges, long-form strategy, and big-stage moments across top events.",
        image: "/material.png",
        topTag: "Draft edge",
        chips: ["Major events", "Live drafts"],
        footer: "Deep markets",
      },
      {
        title: "League of Legends",
        description:
          "Fast rotations, objective fights, and daily league rhythm players follow.",
        image: "/card.png",
        topTag: "Objective play",
        chips: ["Top leagues", "Live plays"],
        footer: "Event focus",
      },
      {
        title: "PUBG",
        description:
          "Circle pressure, survival swings, and volatile late-game finishes.",
        image: "/gift.png",
        topTag: "Zone pressure",
        chips: ["Battle flow", "Squad events"],
        footer: "Big moments",
      },
      {
        title: "Valorant",
        description:
          "Cleaner momentum shifts, faster rounds, and strong map-by-map interest.",
        image: "/chip.png",
        topTag: "Fast rounds",
        chips: ["Live pace", "Map reads"],
        footer: "Quick updates",
      },
      {
        title: "Mobile Legends",
        description:
          "Mobile-first competition with short windows and constant team-fight energy.",
        image: "/headphone.png",
        topTag: "Mobile arena",
        chips: ["Fast cycles", "Team fights"],
        footer: "Daily traffic",
      },
    ],
  },
  ar: {
    eyebrow: "الألعاب الإلكترونية",
    title: "عناوين تنافسية بإيقاع مستمر.",
    description:
      "منافسة رقمية، أحداث مباشرة، والعناوين التي يتابعها اللاعبون الآن.",
    cards: [
      {
        title: "CS2",
        description:
          "ضغط الخريطة، جولات مباشرة، وتدفق نظيف لحركة المباريات النشطة.",
        image: "/stats.png",
        topTag: "جولات مباشرة",
        chips: ["خرائط", "تحديثات سريعة"],
        footer: "حركة حادة",
      },
      {
        title: "Dota 2",
        description:
          "أفضلية المسودات، عمق تكتيكي، ولحظات كبيرة عبر البطولات الكبرى.",
        image: "/material.png",
        topTag: "أفضلية المسودة",
        chips: ["أحداث كبرى", "مسودات مباشرة"],
        footer: "أسواق عميقة",
      },
      {
        title: "League of Legends",
        description:
          "دوران أسرع، صراعات على الأهداف، وإيقاع دوري يومي يتابعه اللاعبون.",
        image: "/card.png",
        topTag: "لعب الأهداف",
        chips: ["دوريات كبرى", "لعب مباشر"],
        footer: "تركيز الحدث",
      },
      {
        title: "PUBG",
        description:
          "ضغط المنطقة، تقلّبات البقاء، ونهايات قوية في المراحل الأخيرة.",
        image: "/gift.png",
        topTag: "ضغط المنطقة",
        chips: ["إيقاع المعركة", "فرق مباشرة"],
        footer: "لحظات كبيرة",
      },
      {
        title: "Valorant",
        description:
          "تحولات أنظف، جولات أسرع، واهتمام قوي خريطة بخريطة.",
        image: "/chip.png",
        topTag: "جولات سريعة",
        chips: ["إيقاع مباشر", "قراءة الخرائط"],
        footer: "تحديثات سريعة",
      },
      {
        title: "Mobile Legends",
        description:
          "منافسة موبايل بنوافذ قصيرة واشتباكات جماعية متواصلة.",
        image: "/headphone.png",
        topTag: "ساحة الموبايل",
        chips: ["دورات سريعة", "اشتباكات فرق"],
        footer: "حركة يومية",
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

function EGameCard({
  title,
  description,
  image,
  topTag,
  chips,
  footer,
}: {
  title: string;
  description: string;
  image: string;
  topTag: string;
  chips: readonly string[];
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
          {topTag}
        </div>
        <div className="absolute right-4 bottom-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74 backdrop-blur-md">
          {footer}
        </div>
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/8" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/64">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/78 backdrop-blur-md"
            >
              {chip}
            </span>
          ))}
        </div>

        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </article>
  );
}

export default function EsportsSection() {
  const { language } = useLanguage();
  const isArabic = language === "ar";
  const content = isArabic ? esportsCopy.ar : esportsCopy.en;

  return (
    <section
      id="egames"
      dir={isArabic ? "rtl" : "ltr"}
      className="px-4 py-14 pb-24 sm:px-6 sm:py-16 sm:pb-28"
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
            { label: isArabic ? "الطاقة" : "Energy", value: "CS2" },
            { label: isArabic ? "الزخم" : "Momentum", value: "Dota 2" },
            { label: isArabic ? "السرعة" : "Speed", value: "Valorant" },
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
            <EGameCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
