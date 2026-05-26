import Link from "next/link";

type WindowFrameProps = {
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
  variant?: "agent" | "partner";
};

export default function WindowFrame({
  side,
  title,
  text,
  cta,
  href,
  benefitA,
  benefitB,
  variant = "agent",
}: WindowFrameProps) {
  const accent = "#d0a11a";

  return (
    <div className="relative h-full rounded-[30px] border border-white/18 bg-black/28 p-2.5 shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-[3px] sm:p-3">
      <div className="relative h-full rounded-[24px] border border-white/12 bg-black/20 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-3">
        <div className="grid h-full gap-2.5">
          <div className="relative min-h-[360px] overflow-visible rounded-[20px] border border-white/10 bg-black/24 px-4 pb-6 pt-14 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] sm:px-5 sm:pb-7 sm:pt-14 lg:px-6 lg:pb-8 lg:pt-16">
            <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(0,0,0,0.16))]" />

            <div className="pointer-events-none absolute inset-[1px] rounded-[19px] ring-1 ring-white/5" />

            <div className="pointer-events-none absolute inset-0">
              <svg
                viewBox="0 0 600 360"
                className="h-full w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id={`frame-shadow-${variant}`}
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feGaussianBlur in="SourceAlpha" stdDeviation="7" result="blur" />
                    <feOffset dy="5" result="offsetBlur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.38" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="offsetBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter
                    id={`accent-glow-${variant}`}
                    x="-30%"
                    y="-30%"
                    width="160%"
                    height="160%"
                  >
                    <feGaussianBlur stdDeviation="3.4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <linearGradient id={`outer-stroke-${variant}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.62)" />
                    <stop offset="35%" stopColor="rgba(255,255,255,0.24)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.16)" />
                  </linearGradient>

                  <linearGradient id={`inner-stroke-${variant}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f1d472" />
                    <stop offset="45%" stopColor={accent} />
                    <stop offset="100%" stopColor="rgba(208,161,26,0.42)" />
                  </linearGradient>

                  <linearGradient id={`glass-fill-${variant}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                    <stop offset="38%" stopColor="rgba(255,255,255,0.015)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.12)" />
                  </linearGradient>
                </defs>

                <path
                  d="M54 326 V126 Q54 32 148 32 H452 Q546 32 546 126 V326"
                  fill={`url(#glass-fill-${variant})`}
                  stroke={`url(#outer-stroke-${variant})`}
                  strokeWidth="3.4"
                  filter={`url(#frame-shadow-${variant})`}
                />

                <path
                  d="M74 326 V132 Q74 52 154 52 H446 Q526 52 526 132 V326"
                  fill="none"
                  stroke={`url(#inner-stroke-${variant})`}
                  strokeWidth="2.2"
                  opacity="0.96"
                  filter={`url(#accent-glow-${variant})`}
                />

                <path
                  d="M88 326 V136 Q88 66 158 66 H442 Q512 66 512 136 V326"
                  fill="none"
                  stroke="rgba(255,255,255,0.09)"
                  strokeWidth="1.2"
                />
                <line
                  x1="104"
                  y1="326"
                  x2="496"
                  y2="326"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />

                <line
                  x1="120"
                  y1="314"
                  x2="480"
                  y2="314"
                  stroke="rgba(208,161,26,0.34)"
                  strokeWidth="1.15"
                  strokeLinecap="round"
                  filter={`url(#accent-glow-${variant})`}
                />
                <line
                  x1="112"
                  y1="334"
                  x2="488"
                  y2="334"
                  stroke="rgba(0,0,0,0.28)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-[-14px] z-20 -translate-x-1/2">
              <div className="rounded-full border border-[#d0a11a]/28 bg-black/62 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e3c15a] shadow-[0_6px_18px_rgba(0,0,0,0.22)] backdrop-blur-md">
                {side}
              </div>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
              <h1 className="max-w-[16ch] text-[24px] font-semibold leading-[1.08] text-white sm:text-[27px] lg:text-[29px]">
                {title}
              </h1>

              <p className="mt-3.5 max-w-[27ch] text-[12px] leading-5 text-white/82 sm:max-w-[31ch] sm:text-[13px]">
                {text}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href={href}
                  className="inline-flex rounded-full border border-[#d0a11a]/34 bg-[#d0a11a] px-4.5 py-2 text-[13px] font-semibold text-black shadow-[0_8px_18px_rgba(208,161,26,0.16)] transition hover:opacity-90"
                >
                  {cta}
                </Link>

                {secondaryCta && secondaryHref ? (
                  <Link
                    href={secondaryHref}
                    className="inline-flex rounded-full border border-white/14 bg-white/5 px-4.5 py-2 text-[13px] font-semibold text-white/90 backdrop-blur-sm transition hover:bg-white/8"
                  >
                    {secondaryCta}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <div className="relative flex min-h-[114px] flex-col items-center justify-center rounded-[18px] border border-white/10 bg-black/20 p-3.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-4">
              <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.12))]" />
              <div className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d0a11a]/92">
                {benefitA.title}
              </div>
              <p className="relative z-10 mt-2.5 text-[11px] leading-5 text-white/76 sm:text-[12px]">
                {benefitA.text}
              </p>
            </div>

            <div className="relative flex min-h-[114px] flex-col items-center justify-center rounded-[18px] border border-white/10 bg-black/20 p-3.5 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-4">
              <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.12))]" />
              <div className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d0a11a]/92">
                {benefitB.title}
              </div>
              <p className="relative z-10 mt-2.5 text-[11px] leading-5 text-white/76 sm:text-[12px]">
                {benefitB.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}