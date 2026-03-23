import type { ReactNode } from "react";
import { FramedSectionProps } from "@/lib/types";

export default function FramedSection({
  tag,
  title,
  text,
  children,
  glowId,
  viewBox,
  outerPath,
  innerPath,
  line,
}: FramedSectionProps) {
  return (
    <section className="mt-6">
      <div className="relative rounded-[30px] border border-white/80 bg-black/14 p-2.5 sm:p-3">
        <div className="relative rounded-[24px] border border-white/50 bg-black/10 p-3.5 sm:p-4">
          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/20 px-4 pb-5 pt-11 sm:px-5 sm:pb-6 sm:pt-12 lg:px-6">
            <div className="pointer-events-none absolute inset-0">
              <svg
                viewBox={viewBox}
                className="h-full w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id={glowId}
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="3.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d={outerPath}
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2.8"
                />

                <path
                  d={innerPath}
                  fill="none"
                  stroke="#d0a11a"
                  strokeWidth="2.05"
                  opacity="0.82"
                  filter={`url(#${glowId})`}
                />

                <line
                  x1={line.x1}
                  y1={line.y1}
                  x2={line.x2}
                  y2={line.y2}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1.2"
                />
              </svg>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-[-14px] z-20 -translate-x-1/2">
              <div className="rounded-full border border-white/15 bg-black/55 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d0a11a]/90 backdrop-blur-md">
                {tag}
              </div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-[21px] font-semibold leading-tight text-white/96 sm:text-[24px]">
                {title}
              </h2>

              <p className="mx-auto mt-4 max-w-[760px] text-[12px] leading-6 text-white/78 sm:text-[13px]">
                {text}
              </p>

              <div className="mt-7">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}