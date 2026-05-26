"use client";

import Image from "next/image";

export function MarketLogo({
  ariaLabel,
  preset,
  wrapperClassName = "",
}: {
  ariaLabel: string;
  preset: "header" | "footer";
  wrapperClassName?: string;
}) {
  const dimensions =
    preset === "header"
      ? { width: 144, height: 32 }
      : { width: 172, height: 38 };

  return (
    <span className={["inline-flex items-center", wrapperClassName].join(" ")}>
      <Image
        src="/logo.png"
        alt={ariaLabel}
        width={dimensions.width}
        height={dimensions.height}
        className="h-auto w-auto object-contain"
        sizes={`${dimensions.width}px`}
      />
    </span>
  );
}
