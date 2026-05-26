import type { ReactNode } from "react";

export type AboutIntroSectionProps = {
  section: {
    tag: string;
    title: string;
    text: string;
  };
};


export type FeatureCardProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
};

export type PathPointProps = {
  title: string;
  text: string;
};

export type PathCardProps = {
  side: string;
  title: string;
  text: string;
  image: string;
  cta: string;
  ctaHref: string;
  secondaryCta: string;
  secondaryHref: string;
  pointA: PathPointProps;
  pointB: PathPointProps;
};

export type StepCardProps = {
  number: string;
  title: ReactNode;
  text: ReactNode;
  image: string;
  imageAlt: string;
};
