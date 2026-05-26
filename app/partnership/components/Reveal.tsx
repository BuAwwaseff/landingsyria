"use client";

import type { ReactNode } from "react";

type StaggerRevealProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  immediate?: boolean;
};

type FadeUpProps = {
  children: ReactNode;
  className?: string;
};

export function StaggerReveal({
  children,
  className,
}: StaggerRevealProps) {
  return <div className={className}>{children}</div>;
}

export function FadeUp({ children, className }: FadeUpProps) {
  return <div className={className}>{children}</div>;
}
