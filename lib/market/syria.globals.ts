import type { Language } from "@/lib/dictionary";

export type SyriaHomeSectionId =
  | "hero"
  | "games"
  | "sports"
  | "offers"
  | "support";

export type SyriaPartnershipSectionId =
  | "hero"
  | "benefits"
  | "steps"
  | "paths"
  | "tools"
  | "finalCta";

export type SyriaHomeAssetKey =
  | "heroLead"
  | "heroSideGames"
  | "heroSideRewards"
  | "gameLiveCasino"
  | "gameSlots"
  | "gameCrashEsports"
  | "gameRoulette"
  | "sportLead"
  | "sportBasketball"
  | "sportTennis"
  | "sportEventNights"
  | "offerWelcome"
  | "offerReload"
  | "offerSupport";

export type SyriaPartnershipAssetKey =
  | "heroEarn"
  | "heroGrow"
  | "heroBuild"
  | "benefitAgent"
  | "benefitPartner"
  | "benefitCommon"
  | "stepChoose"
  | "stepStart"
  | "stepEarn"
  | "pathAgent"
  | "pathPartner"
  | "toolSupport"
  | "toolStructure"
  | "toolGrowth";

export const syriaGlobals = {
  market: {
    code: "syria",
    marketName: {
      en: "Syria",
      ar: "\u0633\u0648\u0631\u064a\u0627",
    },
    brandName: {
      en: "Melbet Syria",
      ar: "\u0645\u064a\u0644\u0628\u064a\u062a \u0633\u0648\u0631\u064a\u0627",
    },
    locales: ["en", "ar"] as const,
    defaultLocale: "en" as const,
    direction: {
      en: "ltr",
      ar: "rtl",
    } as const,
  },
  routes: {
    home: "/",
    partnership: "/partnership",
  },
  shell: {
    headerHeight: "72px",
    containerWidth: "1180px",
    outerPaddingX: "clamp(0.75rem, 2vw, 1.5rem)",
  },
  support: {
    telegram: {
      href: "https://t.me/Teamcash_MIDDLEEAST",
      icon: "/telegram.png",
    },
    email: {
      href: "mailto:PAYPARTNERS-MIDDLEAST@MELBET.COM",
      icon: "/email.svg",
    },
  },
  home: {
    enabledSections: [
      "hero",
      "games",
      "sports",
      "offers",
      "support",
    ] as const satisfies readonly SyriaHomeSectionId[],
    sectionOrder: [
      "hero",
      "games",
      "sports",
      "offers",
      "support",
    ] as const satisfies readonly SyriaHomeSectionId[],
    anchors: {
      top: "#top",
      games: "#games",
      sports: "#sports",
      offers: "#offers",
      support: "#support",
    },
    variants: {
      hero: "tunisia-media-stage",
      games: "tunisia-trending-grid",
      sports: "tunisia-lead-plus-rails",
      offers: "tunisia-equal-height-grid",
      finalCta: "dual-messaging",
    },
    layout: {
      containerWidth: "1180px",
      heroPaddingTop: "clamp(1.25rem, 2.6vw, 1.9rem)",
      heroPaddingBottom: "clamp(1.4rem, 2.8vw, 2rem)",
      sectionPaddingY: "clamp(2.25rem, 4.2vw, 3rem)",
      gridGap: "1rem",
    },
    assets: {
      heroLead: "/stats.png",
      heroSideGames: "/card.png",
      heroSideRewards: "/gift.png",
      gameLiveCasino: "/games/live.webp",
      gameSlots: "/games/slots.webp",
      gameCrashEsports: "/games/crash.webp",
      gameRoulette: "/games/roullete.webp",
      sportLead: "/sports/football.webp",
      sportBasketball: "/sports/basketball.webp",
      sportTennis: "/sports/tennis.webp",
      sportEventNights: "/sports/event.webp",
      offerWelcome: "/gifts/welcome.webp",
      offerReload: "/gifts/cashback.webp",
      offerSupport: "/gifts/support.webp",
    } satisfies Record<SyriaHomeAssetKey, string>,
  },
  partnership: {
    enabledSections: [
      "hero",
      "benefits",
      "steps",
      "paths",
      "tools",
      "finalCta",
    ] as const satisfies readonly SyriaPartnershipSectionId[],
    sectionOrder: [
      "hero",
      "benefits",
      "steps",
      "paths",
      "tools",
      "finalCta",
    ] as const satisfies readonly SyriaPartnershipSectionId[],
    anchors: {
      top: "#top",
      benefits: "#benefits",
      steps: "#steps",
      paths: "#paths",
      tools: "#tools",
      finalCta: "#final-cta",
    },
    variants: {
      hero: "mauritania-panel",
      benefits: "cards-3",
      steps: "cards-3",
      paths: "tunisia-stage-routes",
      tools: "tools-showcase",
      finalCta: "dual-messaging",
    },
    layout: {
      containerWidth: "1120px",
      heroPaddingTop: "clamp(3rem, 6vw, 4.5rem)",
      heroPaddingBottom: "clamp(2.6rem, 4.8vw, 3.4rem)",
      sectionPaddingY: "clamp(1.15rem, 2.2vw, 1.8rem)",
      gridGap: "0.95rem",
    },
    assets: {
      heroEarn: "/card.png",
      heroGrow: "/stats.png",
      heroBuild: "/material.png",
      benefitAgent: "/card.png",
      benefitPartner: "/material.png",
      benefitCommon: "/stats.png",
      stepChoose: "/stats.png",
      stepStart: "/gift.png",
      stepEarn: "/headphone.png",
      pathAgent: "/routes/agent.webp",
      pathPartner: "/routes/partner.webp",
      toolSupport: "/gift.png",
      toolStructure: "/chip.png",
      toolGrowth: "/stats.png",
    } satisfies Record<SyriaPartnershipAssetKey, string>,
  },
} as const;

export function isSupportedLocale(value: string): value is Language {
  return (syriaGlobals.market.locales as readonly string[]).includes(value);
}

export function getLocaleFromPathname(pathname: string): Language | null {
  const [firstSegment] = pathname.split("/").filter(Boolean);

  if (!firstSegment || !isSupportedLocale(firstSegment)) {
    return null;
  }

  return firstSegment;
}

export function stripLocaleFromPathname(pathname: string) {
  const locale = getLocaleFromPathname(pathname);

  if (!locale) {
    return pathname || "/";
  }

  const pathWithoutLocale = pathname.slice(`/${locale}`.length);

  return pathWithoutLocale || "/";
}

export function localizeHref(pathname: string, href: string) {
  const locale = getLocaleFromPathname(pathname);

  if (!locale || !href.startsWith("/")) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function translatePathnameToLanguage(pathname: string, language: Language) {
  const normalizedPathname = stripLocaleFromPathname(pathname);

  if (language === syriaGlobals.market.defaultLocale) {
    return normalizedPathname;
  }

  if (normalizedPathname === "/") {
    return `/${language}`;
  }

  return `/${language}${normalizedPathname}`;
}

export function getMarketDirection(language: Language) {
  return syriaGlobals.market.direction[language];
}
