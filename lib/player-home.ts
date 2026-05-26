import type { Language } from "@/lib/dictionary";
import type { SyriaHomeAssetKey } from "@/lib/market/syria.globals";

type HomeCard = {
  eyebrow: string;
  title: string;
  body: string;
  asset: SyriaHomeAssetKey;
  metric?: string;
};

type HomeContent = {
  nav: {
    games: string;
    sports: string;
    offers: string;
    support: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    chips: string[];
    stats: {
      label: string;
      value: string;
    }[];
    lead: HomeCard;
    sideCards: HomeCard[];
  };
  games: {
    eyebrow: string;
    title: string;
    body: string;
    cards: HomeCard[];
  };
  sports: {
    eyebrow: string;
    title: string;
    body: string;
    lead: HomeCard;
    rails: HomeCard[];
  };
  offers: {
    eyebrow: string;
    title: string;
    body: string;
    cards: HomeCard[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
  };
  footer: {
    body: string;
    homeLabel: string;
    routesLabel: string;
    supportLabel: string;
  };
};

const content: Record<Language, HomeContent> = {
  en: {
    nav: {
      games: "Games",
      sports: "Sports",
      offers: "Offers",
      support: "Support",
    },
    hero: {
      eyebrow: "For Players in Syria",
      title: "Start fast, follow live matches, and enjoy games with clear offers.",
      body:
        "Open football, casino, and quick-play titles in a few taps, then use the available offers and support whenever you need help.",
      primary: "Explore games",
      secondary: "View offers",
      chips: ["Live football", "Casino games", "Free offers", "Mobile access"],
      stats: [
        { label: "Live", value: "24/7 matches" },
        { label: "Start", value: "Quick signup" },
        { label: "Support", value: "Direct help" },
      ],
      lead: {
        eyebrow: "Fast",
        title: "Start in seconds and move straight into play.",
        body: "Open the main routes quickly, switch between football and casino, and keep the first session simple from the first tap.",
        asset: "heroLead",
        metric: "Quick start",
      },
      sideCards: [
        {
          eyebrow: "Live",
          title: "Stay close to the matches that are moving now.",
          body: "Follow live football, active markets, and the main events players open first during the day.",
          asset: "heroSideGames",
          metric: "24/7",
        },
        {
          eyebrow: "Offers",
          title: "See the rewards before your next session.",
          body: "Keep welcome offers, cashback, and direct support close before you play again.",
          asset: "heroSideRewards",
          metric: "Ready",
        },
      ],
    },
    games: {
      eyebrow: "Games and casino",
      title: "Choose the games you want and start in seconds.",
      body:
        "Live casino, slots, crash, and roulette are ready whenever you want a quick session or a longer one.",
      cards: [
        {
          eyebrow: "Live casino",
          title: "Join live tables with fast entry.",
          body: "Open dealer games quickly and move into live rounds without extra steps.",
          asset: "gameLiveCasino",
          metric: "Tables",
        },
        {
          eyebrow: "Slots",
          title: "Play familiar titles with quick rounds.",
          body: "Choose short sessions, repeat-play favorites, and casino titles that are easy to open on mobile.",
          asset: "gameSlots",
          metric: "Fast",
        },
        {
          eyebrow: "Crash",
          title: "Try faster game types built for mobile play.",
          body: "Open quick-play categories when you want a shorter pace and faster decisions.",
          asset: "gameCrashEsports",
          metric: "Mobile",
        },
        {
          eyebrow: "Roulette",
          title: "Keep a classic table ready for every session.",
          body: "Open roulette when you want a familiar casino option alongside live tables and slots.",
          asset: "gameRoulette",
          metric: "Classic",
        },
      ],
    },
    sports: {
      eyebrow: "Sports",
      title: "Follow the action you want and move into the live market on time.",
      body:
        "Football leads the daily action, with basketball and tennis ready for live movement throughout the day.",
      lead: {
        eyebrow: "Football",
        title: "Watch the main football action first.",
        body: "Open the biggest matches quickly, follow live movement, and stay close to the events players care about most.",
        asset: "sportLead",
        metric: "Prime match",
      },
      rails: [
        {
          eyebrow: "Basketball",
          title: "Follow faster score changes and active markets.",
          body: "Basketball is ready when you want quicker movement and shorter live cycles.",
          asset: "sportBasketball",
          metric: "Fast",
        },
        {
          eyebrow: "Tennis",
          title: "Track point-by-point momentum in live play.",
          body: "Open tennis when you want a faster swing between sets, games, and live moments.",
          asset: "sportTennis",
          metric: "In play",
        },
        {
          eyebrow: "Big nights",
          title: "Stay close to the biggest live sessions.",
          body: "Use this lane when you want bigger live nights and closer action around the main events.",
          asset: "sportEventNights",
          metric: "Live",
        },
      ],
    },
    offers: {
      eyebrow: "Offers and rewards",
      title: "Use the available offers when you want extra value.",
      body:
        "Welcome rewards, cashback offers, and direct support stay close before you start your next session.",
      cards: [
        {
          eyebrow: "Welcome",
          title: "Start with a welcome offer when it is available.",
          body: "Use the current welcome deal to begin with extra value before your first session.",
          asset: "offerWelcome",
          metric: "Bonus",
        },
        {
          eyebrow: "Cashback",
          title: "Keep playing with offers for your next session.",
          body: "Use cashback offers when you come back for match day, casino sessions, or quick play.",
          asset: "offerReload",
          metric: "Cashback",
        },
        {
          eyebrow: "Support",
          title: "Get help quickly if you want a smoother start.",
          body: "Message support when you need help with your account, your next step, or the offers available to you.",
          asset: "offerSupport",
          metric: "Help",
        },
      ],
    },
    finalCta: {
      eyebrow: "Support",
      title: "Need help or want a faster start?",
      body: "Message us on Telegram or by email for quick support, account help, or the right next step.",
      primary: "Telegram",
      secondary: "Email",
    },
    footer: {
      body: "Live matches, casino games, clear offers, and direct support for players in Syria.",
      homeLabel: "Home",
      routesLabel: "Routes",
      supportLabel: "Support",
    },
  },
  ar: {
    nav: {
      games: "الألعاب",
      sports: "الرياضة",
      offers: "العروض",
      support: "الدعم",
    },
    hero: {
      eyebrow: "للاعبين في سوريا",
      title: "ابدأ بسرعة، تابع المباريات المباشرة، واستمتع بالألعاب مع عروض واضحة.",
      body:
        "افتح كرة القدم والكازينو والألعاب السريعة خلال لحظات، ثم استفد من العروض المتاحة والدعم عندما تحتاجه.",
      primary: "استكشف الألعاب",
      secondary: "شاهد العروض",
      chips: ["كرة قدم مباشرة", "ألعاب كازينو", "عروض مجانية", "دخول من الموبايل"],
      stats: [
        { label: "مباشر", value: "مباريات 24/7" },
        { label: "البداية", value: "تسجيل سريع" },
        { label: "الدعم", value: "مساعدة مباشرة" },
      ],
      lead: {
        eyebrow: "سريع",
        title: "ابدأ خلال ثوانٍ وادخل مباشرة إلى اللعب.",
        body: "افتح المسارات الرئيسية بسرعة، وانتقل بين كرة القدم والكازينو، وابدأ جلستك الأولى من دون تعقيد.",
        asset: "heroLead",
        metric: "دخول سريع",
      },
      sideCards: [
        {
          eyebrow: "مباشر",
          title: "ابقَ قريبًا من المباريات التي تتحرك الآن.",
          body: "تابع كرة القدم المباشرة والأسواق النشطة وأهم الأحداث التي يفتحها اللاعبون أولاً خلال اليوم.",
          asset: "heroSideGames",
          metric: "24/7",
        },
        {
          eyebrow: "العروض",
          title: "شاهد المكافآت قبل جلستك التالية.",
          body: "احتفظ بعروض الترحيب والكاش باك والدعم المباشر قريبًا منك قبل أن تلعب من جديد.",
          asset: "heroSideRewards",
          metric: "جاهزة",
        },
      ],
    },
    games: {
      eyebrow: "الألعاب والكازينو",
      title: "اختر الألعاب التي تريدها وابدأ خلال ثوانٍ.",
      body:
        "الكازينو المباشر والسلوتس والكراش والروليت جاهزة عندما تريد جلسة سريعة أو وقت لعب أطول.",
      cards: [
        {
          eyebrow: "كازينو مباشر",
          title: "ادخل إلى الطاولات المباشرة بسرعة.",
          body: "افتح ألعاب الموزعين المباشرين بسرعة وابدأ الجولة بدون خطوات إضافية.",
          asset: "gameLiveCasino",
          metric: "طاولات",
        },
        {
          eyebrow: "سلوتس",
          title: "العب عناوين مألوفة بجولات سريعة.",
          body: "اختر جلسات قصيرة وعناوين متكررة مفضلة وألعاب كازينو سهلة الفتح من الموبايل.",
          asset: "gameSlots",
          metric: "سريع",
        },
        {
          eyebrow: "كراش",
          title: "جرّب أنواع ألعاب أسرع مناسبة للموبايل.",
          body: "افتح فئات اللعب السريع عندما تريد إيقاعًا أقصر وقرارات أسرع.",
          asset: "gameCrashEsports",
          metric: "موبايل",
        },
        {
          eyebrow: "روليت",
          title: "احتفظ بطاولة كلاسيكية جاهزة لكل جلسة.",
          body: "افتح الروليت عندما تريد خيارًا مألوفًا إلى جانب الطاولات المباشرة والسلوتس.",
          asset: "gameRoulette",
          metric: "كلاسيكي",
        },
      ],
    },
    sports: {
      eyebrow: "الرياضة",
      title: "تابع الحدث الذي تريده وادخل إلى السوق المباشر في الوقت المناسب.",
      body:
        "تقود كرة القدم الحركة اليومية، مع كرة السلة والتنس الجاهزين للمتابعة المباشرة طوال اليوم.",
      lead: {
        eyebrow: "كرة القدم",
        title: "ابدأ بأهم مباريات كرة القدم أولًا.",
        body: "افتح أقوى المباريات بسرعة، وتابع الحركة المباشرة، وابقَ قريبًا من الأحداث التي تهم اللاعبين أكثر.",
        asset: "sportLead",
        metric: "المباراة الأبرز",
      },
      rails: [
        {
          eyebrow: "كرة السلة",
          title: "تابع تغيّر النتيجة والأسواق السريعة.",
          body: "كرة السلة جاهزة عندما تريد حركة أسرع ودورات مباشرة أقصر.",
          asset: "sportBasketball",
          metric: "سريع",
        },
        {
          eyebrow: "التنس",
          title: "راقب تغير الإيقاع نقطة بنقطة.",
          body: "افتح التنس عندما تريد تقلبات أسرع بين الأشواط واللحظات المباشرة.",
          asset: "sportTennis",
          metric: "داخل اللعب",
        },
        {
          eyebrow: "ليالي كبرى",
          title: "ابقَ قريبًا من أقوى الجلسات المباشرة.",
          body: "استخدم مسار الأحداث الكبرى عندما تريد تركيزًا أقوى على المباريات المباشرة والليالي المميزة.",
          asset: "sportEventNights",
          metric: "مباشر",
        },
      ],
    },
    offers: {
      eyebrow: "العروض والمكافآت",
      title: "استفد من العروض المتاحة عندما تريد قيمة إضافية.",
      body:
        "مكافآت الترحيب وعروض الكاش باك والدعم المباشر تبقى قريبة منك قبل جلستك التالية.",
      cards: [
        {
          eyebrow: "الترحيب",
          title: "ابدأ بعرض ترحيبي عندما يكون متاحًا.",
          body: "استفد من عرض البداية الحالي لتحصل على قيمة إضافية قبل جلستك الأولى.",
          asset: "offerWelcome",
          metric: "مكافأة",
        },
        {
          eyebrow: "كاش باك",
          title: "واصل اللعب بعروض الكاش باك لجلساتك التالية.",
          body: "استخدم عروض الكاش باك عندما تعود ليوم المباراة أو جلسات الكازينو أو اللعب السريع.",
          asset: "offerReload",
          metric: "كاش باك",
        },
        {
          eyebrow: "الدعم",
          title: "احصل على مساعدة سريعة إذا أردت بداية أسهل.",
          body: "تواصل مع الدعم إذا احتجت مساعدة في حسابك أو في خطوتك التالية أو في العروض المتاحة لك.",
          asset: "offerSupport",
          metric: "مساعدة",
        },
      ],
    },
    finalCta: {
      eyebrow: "الدعم",
      title: "تحتاج مساعدة أو تريد بداية أسرع؟",
      body: "راسلنا عبر تيليجرام أو البريد الإلكتروني للحصول على دعم سريع أو مساعدة في الحساب أو معرفة الخطوة المناسبة لك.",
      primary: "تيليجرام",
      secondary: "البريد الإلكتروني",
    },
    footer: {
      body: "مباريات مباشرة، وألعاب كازينو، وعروض واضحة، ودعم مباشر للاعبين في سوريا.",
      homeLabel: "الرئيسية",
      routesLabel: "المسارات",
      supportLabel: "الدعم",
    },
  },
};

export function getPlayerHomeContent(language: Language) {
  return content[language];
}
