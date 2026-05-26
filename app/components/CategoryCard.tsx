import Image from "next/image";
import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  eyebrow: string;
  topTag: string;
  chips: readonly string[];
  ctaLabel: string;
  bottomLabel: string;
  href?: string;
  dir?: "ltr" | "rtl";
};

export default function CategoryCard({
  title,
  description,
  image,
  imageAlt,
  eyebrow,
  topTag,
  chips,
  ctaLabel,
  bottomLabel,
  href = "#",
  dir = "ltr",
}: CategoryCardProps) {
  const isRtl = dir === "rtl";

  return (
    <article
      dir={dir}
      className="relative w-full max-w-[260px] shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-black/50 sm:w-[240px] sm:max-w-none lg:w-[250px] xl:w-[260px]"
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={image}
          alt={imageAlt ?? title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 260px"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.16)_24%,rgba(0,0,0,0.58)_62%,rgba(0,0,0,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_32%)] opacity-70" />
        <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/8" />

        <div className="relative z-10 flex h-full flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ff5757] backdrop-blur-md">
              {eyebrow}
            </span>

            <span className="rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/78 backdrop-blur-md">
              {topTag}
            </span>
          </div>

          <div className="mt-auto">
            <h3 className="text-[22px] font-semibold leading-none tracking-tight text-white">
              {title}
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-white/72">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-end justify-between gap-3">
              <Link
                href={href}
                className="inline-flex h-12 min-w-[118px] items-center justify-between gap-3 rounded-full bg-white px-4 text-sm font-semibold text-[#101010]"
              >
                <span>{ctaLabel}</span>
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/5 text-sm">
                  {isRtl ? "←" : "→"}
                </span>
              </Link>

              <div className="max-w-[92px] text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                {bottomLabel}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}