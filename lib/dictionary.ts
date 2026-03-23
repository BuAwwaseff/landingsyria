export type Benefit = {
  title: string;
  text: string;
};

export type HeroCard = {
  side: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  benefitA: Benefit;
  benefitB: Benefit;
};

export type SharedPoint = {
  title: string;
  text: string;
};

export type SharedFoundationSection = {
  tag: string;
  title: string;
  text: string;
  points: SharedPoint[];
};

export type DifferencePoint = {
  title: string;
  text: string;
};

export type DifferenceColumn = {
  side: string;
  intro: string;
  points: DifferencePoint[];
};

export type DifferencesSection = {
  tag: string;
  title: string;
  text: string;
  columns: DifferenceColumn[];
};

export type OurPartnerPageContent = {
  hero: {
    agent: HeroCard;
    partner: HeroCard;
  };
  sharedFoundation: SharedFoundationSection;
  differences: DifferencesSection;
};

export type HomePageContent = {
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: string;
    primaryHref: string;
    secondaryCta: string;
    secondaryHref: string;
  };
  overview: {
    tag: string;
    title: string;
    text: string;
  };
};

export type SiteDictionary = {
  home: HomePageContent;
  ourPartner: OurPartnerPageContent;
};

function createBenefit(title: string, text: string): Benefit {
  return { title, text };
}

function createHeroCard(input: {
  side: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  benefitA: Benefit;
  benefitB: Benefit;
}): HeroCard {
  return input;
}

function createSharedPoint(title: string, text: string): SharedPoint {
  return { title, text };
}

function createSharedFoundationSection(input: {
  tag: string;
  title: string;
  text: string;
  points: SharedPoint[];
}): SharedFoundationSection {
  return input;
}

function createDifferencePoint(title: string, text: string): DifferencePoint {
  return { title, text };
}

function createDifferenceColumn(input: {
  side: string;
  intro: string;
  points: DifferencePoint[];
}): DifferenceColumn {
  return input;
}

function createDifferencesSection(input: {
  tag: string;
  title: string;
  text: string;
  columns: DifferenceColumn[];
}): DifferencesSection {
  return input;
}

function createHomeHeroSection(): HomePageContent["hero"] {
  return {
    eyebrow: "Syrian Network Gateway",
    title: "A premium entry point built around structure, trust, and growth",
    text: "A Syrian-inspired landing system designed to guide users through clear paths, strong framing, and a more intentional first impression.",
    primaryCta: "Explore Paths",
    primaryHref: "/ourpartner",
    secondaryCta: "Learn More",
    secondaryHref: "#",
  };
}

function createHomeOverviewSection(): HomePageContent["overview"] {
  return {
    tag: "Overview",
    title: "Built with one visual language, ready for multiple paths",
    text: "The homepage will act as the central entry layer, while deeper pages like Our Partner will expand the structure into more focused framed sections.",
  };
}

function createHomePageContent(): HomePageContent {
  return {
    hero: createHomeHeroSection(),
    overview: createHomeOverviewSection(),
  };
}

function createOurPartnerHeroSection(): OurPartnerPageContent["hero"] {
  return {
    agent: createHeroCard({
      side: "Agent",
      title: "Start fast with a direct local agent setup",
      text: "Join an existing structure, move quickly, and work with a model built for clear day-to-day operations.",
      cta: "Become an Agent",
      href: "#",
      benefitA: createBenefit(
        "Fast setup",
        "Simple onboarding and a clear starting path."
      ),
      benefitB: createBenefit(
        "Daily flow",
        "Built for practical, active day-to-day work."
      ),
    }),

    partner: createHeroCard({
      side: "Partner",
      title: "Build a stronger network with a scalable path",
      text: "Grow with a structure designed for long-term expansion, local support, and stronger network value over time.",
      cta: "Become a Partner",
      href: "#",
      benefitA: createBenefit(
        "Long-term growth",
        "Designed for network expansion and steady scale."
      ),
      benefitB: createBenefit(
        "Existing structure",
        "Work with infrastructure that is already in place."
      ),
    }),
  };
}

function createOurPartnerSharedFoundationSection(): SharedFoundationSection {
  return createSharedFoundationSection({
    tag: "Shared Foundation",
    title: "What both paths share",
    text: "Whether someone joins as an agent or grows as a partner, both paths are built on the same core operating model: trusted structure, practical support, and room to build steadily over time.",
    points: [
      createSharedPoint(
        "Clear Structure",
        "Both sides work inside an organized model with defined roles, stable flow, and clearer execution."
      ),
      createSharedPoint(
        "Local Support",
        "Both paths depend on guidance, coordination, and direct support that helps operations stay active."
      ),
      createSharedPoint(
        "Steady Growth",
        "Both are designed to create continuity, long-term value, and a stronger network over time."
      ),
    ],
  });
}

function createOurPartnerDifferencesSection(): DifferencesSection {
  return createDifferencesSection({
    tag: "Key Differences",
    title: "Where the two paths differ",
    text: "The foundation is shared, but the role, pace, and growth direction are not the same. One path is closer to direct daily execution, while the other is built more around expansion and wider coordination.",
    columns: [
      createDifferenceColumn({
        side: "Agent Path",
        intro:
          "The agent side is closer to active local operation and fast practical movement.",
        points: [
          createDifferencePoint(
            "Closer to Daily Work",
            "The role stays near direct activity, local handling, and immediate operational rhythm."
          ),
          createDifferencePoint(
            "Faster Entry",
            "It is built for getting started quickly with a more direct and accessible setup."
          ),
          createDifferencePoint(
            "Execution First",
            "The focus is on practical movement, consistency, and day-to-day presence."
          ),
        ],
      }),

      createDifferenceColumn({
        side: "Partner Path",
        intro:
          "The partner side is more focused on network value, structure, and long-term scale.",
        points: [
          createDifferencePoint(
            "Broader Scope",
            "The role looks more at coordination, reach, and building stronger network presence."
          ),
          createDifferencePoint(
            "Expansion Driven",
            "It is designed for growth over time with a wider structural perspective."
          ),
          createDifferencePoint(
            "Strategic Value",
            "The emphasis is more on larger positioning, support systems, and scalable development."
          ),
        ],
      }),
    ],
  });
}

function createOurPartnerPageContent(): OurPartnerPageContent {
  return {
    hero: createOurPartnerHeroSection(),
    sharedFoundation: createOurPartnerSharedFoundationSection(),
    differences: createOurPartnerDifferencesSection(),
  };
}

export function getSiteDictionary(): SiteDictionary {
  return {
    home: createHomePageContent(),
    ourPartner: createOurPartnerPageContent(),
  };
}

export function getHomePageContent(): HomePageContent {
  return getSiteDictionary().home;
}

export function getOurPartnerPageContent(): OurPartnerPageContent {
  return getSiteDictionary().ourPartner;
}