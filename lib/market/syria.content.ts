import type { Language } from "@/lib/dictionary";
import type { SyriaPartnershipAssetKey } from "./syria.globals";

type LocalizedText = Record<Language, string>;

type ToolCardContent = {
  eyebrow: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
  metric: LocalizedText;
  asset: SyriaPartnershipAssetKey;
};

export const syriaContent = {
  shell: {
    marketLabel: {
      en: "Market",
      ar: "\u0627\u0644\u0633\u0648\u0642",
    },
    routeLinksLabel: {
      en: "Routes",
      ar: "\u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062a",
    },
    homeLinksLabel: {
      en: "Home",
      ar: "\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629",
    },
    partnershipLinksLabel: {
      en: "Partnership",
      ar: "\u0627\u0644\u0634\u0631\u0627\u0643\u0629",
    },
    supportLinksLabel: {
      en: "Support",
      ar: "\u0627\u0644\u062f\u0639\u0645",
    },
    copyright: {
      en: "\u00a9 2026 Melbet Syria. All rights reserved.",
      ar: "\u00a9 2026 \u0645\u064a\u0644\u0628\u064a\u062a \u0633\u0648\u0631\u064a\u0627. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.",
    },
  },
  navigation: {
    benefits: {
      en: "Benefits",
      ar: "\u0627\u0644\u0645\u0632\u0627\u064a\u0627",
    },
    steps: {
      en: "Steps",
      ar: "\u0627\u0644\u062e\u0637\u0648\u0627\u062a",
    },
    paths: {
      en: "Paths",
      ar: "\u0627\u0644\u0645\u0633\u0627\u0631\u0627\u062a",
    },
    tools: {
      en: "Tools",
      ar: "\u0627\u0644\u0623\u062f\u0648\u0627\u062a",
    },
  },
  partnership: {
    tools: {
      eyebrow: {
        en: "Tools",
        ar: "الأدوات",
      },
      title: {
        en: "Get the tools that help you start and follow results.",
        ar: "احصل على الأدوات التي تساعدك على البدء ومتابعة النتائج.",
      },
      text: {
        en: "Use direct contact, tracking, promo support, and practical guidance while you build your route step by step.",
        ar: "استخدم التواصل المباشر، وتتبع الأداء، والدعم الترويجي، والإرشاد العملي أثناء بناء مسارك خطوة بخطوة.",
      },
      cards: [
        {
          eyebrow: {
            en: "Contact",
            ar: "التواصل",
          },
          title: {
            en: "Talk to a manager when you need help.",
            ar: "تحدث مع مدير مختص عندما تحتاج إلى المساعدة.",
          },
          text: {
            en: "Use Telegram or email for quick answers, next steps, and day-to-day follow-up while you begin.",
            ar: "استخدم تيليجرام أو البريد الإلكتروني للحصول على إجابات سريعة وخطوات واضحة ومتابعة يومية أثناء البداية.",
          },
          metric: {
            en: "Direct support",
            ar: "دعم مباشر",
          },
          asset: "toolSupport",
        },
        {
          eyebrow: {
            en: "Tracking",
            ar: "التتبع",
          },
          title: {
            en: "Follow performance and keep your work visible.",
            ar: "تابع الأداء واجعل نتائج عملك واضحة.",
          },
          text: {
            en: "Track registrations, activity, and the movement that matters to your route so you can keep improving.",
            ar: "تابع التسجيلات والنشاط والحركة التي تهم مسارك حتى تتمكن من تحسين عملك باستمرار.",
          },
          metric: {
            en: "Performance",
            ar: "الأداء",
          },
          asset: "toolStructure",
        },
        {
          eyebrow: {
            en: "Work setup",
            ar: "أدوات العمل",
          },
          title: {
            en: "Use the tools that match the way you work.",
            ar: "استخدم الأدوات التي تناسب طريقة عملك.",
          },
          text: {
            en: "Partners can work with promo support and codes, while agents can focus on local player help and payment methods.",
            ar: "يمكن للشركاء العمل عبر الدعم الترويجي والأكواد، بينما يركز الوكلاء على مساعدة اللاعبين وطرق الدفع المحلية.",
          },
          metric: {
            en: "Partner or agent",
            ar: "شريك أو وكيل",
          },
          asset: "toolGrowth",
        },
      ] satisfies readonly ToolCardContent[],
    },
  },
} as const;

export function getLocalizedText(value: LocalizedText, language: Language) {
  return value[language];
}
