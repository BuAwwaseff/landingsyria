import type {
  ReactNode

} from "react";
export type HeroCardContent = {
  side: string;
  title: string;
  text: string;
  cta: string;
  href: string;
  benefitA: {
    title: string;
    text: string;
  };
  benefitB: {
    title: string;
    text: string;
  };
};

export type HeroGatewaySectionProps = {
  hero: {
    agent: HeroCardContent;
    partner: HeroCardContent;
  };
};

export type FramedSectionProps = {
  tag: string;
  title: string;
  text: string;
  children: ReactNode;
  glowId: string;
  viewBox: string;
  outerPath: string;
  innerPath: string;
  line: {
    x1: string;
    y1: string;
    x2: string;
    y2: string;
  };
};

export type CommonPointCardProps = {
  title: string;
  text: string;
};

export type DifferencePoint = {
  title: string;
  text: string;
};

export type DifferenceColumnProps = {
  side: string;
  intro: string;
  points: DifferencePoint[];
};


export type SharedFoundationSectionProps = {
  section: {
    tag: string;
    title: string;
    text: string;
    points: {
      title: string;
      text: string;
    }[];
  };
};
export type DifferencesSectionProps = {
  section: {
    tag: string;
    title: string;
    text: string;
    columns: {
      side: string;
      intro: string;
      points: {
        title: string;
        text: string;
      }[];
    }[];
  };
};
