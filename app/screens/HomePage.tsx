"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useLanguage } from "@/app/components/LanguageProvider";
import { getMarketDirection, syriaGlobals } from "@/lib/market/syria.globals";
import { getPlayerHomeContent } from "@/lib/player-home";

function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="mb-3 inline-flex items-center gap-3">
        <span className="h-px w-10 bg-[#C6844B]/70" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#C6844B]">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.02]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">{body}</p>
    </div>
  );
}

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderHeroTitle(title: string, language: "en" | "ar") {
  const highlightWords =
    language === "ar" ? ["ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¹ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â´ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â©", "ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¹ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¹ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶"] : ["fast", "live", "offers"];
  const pattern = new RegExp(
    `(${highlightWords.map((word) => escapeRegExp(word)).join("|")})`,
    language === "en" ? "gi" : "g",
  );

  return title.split(pattern).filter(Boolean).map((part, index) => {
    const normalizedPart = language === "en" ? part.toLowerCase() : part;
    const isHighlighted = highlightWords.some((word) =>
      language === "en" ? normalizedPart === word.toLowerCase() : normalizedPart === word,
    );

    if (!isHighlighted) {
      return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
    }

    return (
      <span
        key={`${part}-${index}`}
        className="glow-contrast"
      >
        {part}
      </span>
    );
  });
}

function FeatureVisual({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.84))]" />
    </>
  );
}

function formatOfferCountdown(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
}

type RouteDemoKind = "partner" | "agent";

function RouteDemoGraphic({
  kind,
}: {
  kind: RouteDemoKind;
}) {
  const isPartner = kind === "partner";

  return (
    <div className={isPartner ? "absolute inset-0 overflow-hidden" : "relative h-full w-full overflow-hidden aspect-[16/11] min-h-[230px]"}>
      <div
        className={`absolute inset-0 ${
          isPartner
            ? "bg-[radial-gradient(circle_at_20%_18%,rgba(47,109,134,0.18),transparent_28%),radial-gradient(circle_at_82%_26%,rgba(94,166,194,0.16),transparent_24%),linear-gradient(180deg,rgba(7,18,24,0.96),rgba(8,11,14,0.98))]"
            : "bg-[radial-gradient(circle_at_22%_18%,rgba(47,109,134,0.2),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(94,166,194,0.18),transparent_24%),linear-gradient(180deg,rgba(7,18,24,0.96),rgba(8,11,14,0.98))]"
        }`}
      />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {isPartner ? <PartnerRouteDemo /> : <AgentRouteDemo />}
    </div>
  );
}

function PartnerMelbetWordmark() {
  return (
    <g transform="translate(144 22)" aria-hidden="true">
      <animateTransform attributeName="transform" type="translate" values="144 22;144 19.5;144 22" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="7.2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.96;1;0.96" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="7.2s" repeatCount="indefinite" />
      <g transform="scale(0.245)" filter="url(#partnerLogoGlow)">
        <path
          d="M101.335 94.0235H79.8467L88.1262 51.4329L57.6879 94.0235H44.2587L30.3794 51.4529L22.1099 94.0235H0.621094L18.8901 0H40.3989L57.9979 57.7644L98.096 0H119.604L101.335 94.0235Z"
          fill="#F6F0DA"
        />
        <path
          d="M187.279 94.0235H106.703L124.992 0H205.568L201.388 21.4954H142.281L139.411 36.2691H185.069L180.889 57.7644H135.232L132.362 72.5381H191.448L187.279 94.0235Z"
          fill="#F6F0DA"
        />
        <path
          d="M261.275 94.0235H192.648L210.917 0H232.406L218.307 72.5381H265.454L261.275 94.0235Z"
          fill="#F6F0DA"
        />
        <path
          d="M341.752 65.1563C340.206 73.1583 336.063 79.9633 329.323 85.5714C322.584 91.1795 315.231 93.9968 307.264 94.0235H248.848L267.117 0H325.533C333.533 0 339.789 2.82071 344.302 8.46212C348.815 14.1035 350.312 20.9086 348.792 28.8772C347.686 34.6187 343.916 40.6635 337.483 47.0118C341.443 53.38 342.866 59.4282 341.752 65.1563ZM320.264 65.1563C320.485 64.2542 320.499 63.3134 320.303 62.4053C320.107 61.4972 319.707 60.6456 319.134 59.915C318.554 59.2044 317.817 58.6397 316.98 58.2662C316.143 57.8927 315.23 57.7209 314.314 57.7644H289.155L293.645 36.2791H318.484C320.568 36.2695 322.578 35.5056 324.143 34.1285C325.786 32.811 326.909 30.9541 327.313 28.8872C327.535 27.9851 327.548 27.0443 327.353 26.1362C327.157 25.2281 326.757 24.3765 326.183 23.6459C325.603 22.9372 324.865 22.3744 324.028 22.0026C323.191 21.6309 322.278 21.4606 321.364 21.5054H284.426L274.516 72.5181H311.444C313.525 72.5061 315.531 71.7424 317.094 70.3676C318.73 69.0576 319.853 67.2123 320.264 65.1563Z"
          fill="#FFBC00"
        />
        <path
          d="M422.076 94.0235H341.5L359.779 0H440.344L436.175 21.5054H377.088L374.208 36.2791H419.866L415.696 57.7644H370.038L367.169 72.5481H426.255L422.076 94.0235Z"
          fill="#FFBC00"
        />
        <path
          d="M528.832 21.5054H495.974L481.835 94.0235H460.346L474.445 21.4954H441.547L445.717 0H532.972L528.832 21.5054Z"
          fill="#FFBC00"
        />
      </g>
    </g>
  );
}

function PartnerRouteDemo() {
  return (
    <svg viewBox="0 0 420 500" preserveAspectRatio="xMidYMin slice" className="absolute inset-0 h-full w-full origin-top scale-[1.02] sm:scale-[1.05]" aria-hidden="true">
      <defs>
        <linearGradient id="partnerFlowStrong" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E4B47B" stopOpacity="0.88" />
          <stop offset="48%" stopColor="#E4B47B" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E4B47B" stopOpacity="0.22" />
        </linearGradient>
        <linearGradient id="partnerFlowCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E4B47B" stopOpacity="0.94" />
          <stop offset="100%" stopColor="#E4B47B" stopOpacity="0.56" />
        </linearGradient>
        <radialGradient id="partnerGlow" cx="50%" cy="45%" r="62%">
          <stop offset="0%" stopColor="#5EA6C2" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#5EA6C2" stopOpacity="0" />
        </radialGradient>
        <filter id="partnerLogoGlow" x="-12%" y="-35%" width="124%" height="180%">
          <feDropShadow dx="0" dy="0" stdDeviation="4.2" floodColor="#FFBC00" floodOpacity="0.18">
            <animate attributeName="flood-opacity" values="0.12;0.22;0.12" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="7.2s" repeatCount="indefinite" />
          </feDropShadow>
        </filter>
      </defs>

      <PartnerMelbetWordmark />

      <g opacity="0.88">
        <animate attributeName="opacity" values="0.72;0.9;0.72" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="9.2s" repeatCount="indefinite" />
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M210 102 C186 112 148 140 124 174" stroke="#E4B47B" strokeOpacity="0.14" strokeWidth="8.8" />
          <path d="M210 102 C234 112 272 140 296 174" stroke="#E4B47B" strokeOpacity="0.14" strokeWidth="8.8" />
          <path d="M124 216 C96 244 72 286 58 310" stroke="#E4B47B" strokeOpacity="0.12" strokeWidth="7.8" strokeDasharray="1 13" />
          <path d="M124 216 C132 250 136 286 136 310" stroke="#E4B47B" strokeOpacity="0.12" strokeWidth="7.2" />

          <path d="M296 216 C288 250 284 286 284 310" stroke="#E4B47B" strokeOpacity="0.12" strokeWidth="7.2" />
          <path d="M296 216 C324 244 348 286 362 310" stroke="#E4B47B" strokeOpacity="0.12" strokeWidth="7.8" strokeDasharray="1 13" />

          <path d="M210 102 C186 112 148 140 124 174" stroke="url(#partnerFlowCore)" strokeOpacity="0.66" strokeWidth="3.6" />
          <path d="M210 102 C234 112 272 140 296 174" stroke="url(#partnerFlowCore)" strokeOpacity="0.66" strokeWidth="3.6" />
          <path d="M124 216 C96 244 72 286 58 310" stroke="url(#partnerFlowStrong)" strokeOpacity="0.52" strokeWidth="3.2" strokeDasharray="1 11" />
          <path d="M124 216 C132 250 136 286 136 310" stroke="url(#partnerFlowStrong)" strokeOpacity="0.48" strokeWidth="3" />

          <path d="M296 216 C288 250 284 286 284 310" stroke="url(#partnerFlowStrong)" strokeOpacity="0.48" strokeWidth="3" />
          <path d="M296 216 C324 244 348 286 362 310" stroke="url(#partnerFlowStrong)" strokeOpacity="0.52" strokeWidth="3.2" strokeDasharray="1 11" />
        </g>

      </g>

      <circle cx="210" cy="96" r="92" fill="url(#partnerGlow)">
        <animate attributeName="r" values="90;94;90" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.82;0.94;0.82" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.8s" repeatCount="indefinite" />
      </circle>
      <circle cx="210" cy="96" r="78" fill="none" stroke="#5EA6C2" strokeOpacity="0.16" strokeWidth="1.2">
        <animate attributeName="r" values="80;102" keyTimes="0;1" calcMode="spline" keySplines="0.2 0 0.2 1" dur="7.6s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.12;0" keyTimes="0;1" calcMode="spline" keySplines="0.2 0 0.2 1" dur="7.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="210" cy="96" r="78" fill="none" stroke="#E4B47B" strokeOpacity="0.14" strokeWidth="1.2">
        <animate attributeName="r" values="80;102" keyTimes="0;1" calcMode="spline" keySplines="0.2 0 0.2 1" dur="7.6s" begin="3.8s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.1;0" keyTimes="0;1" calcMode="spline" keySplines="0.2 0 0.2 1" dur="7.6s" begin="3.8s" repeatCount="indefinite" />
      </circle>

      
      <g transform="translate(0 0)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.1;0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.6s" repeatCount="indefinite" />
        <rect x="136" y="58" width="148" height="46" rx="23" fill="#09131A" stroke="#2F6D86" strokeOpacity="0.95" />
        <rect x="140" y="62" width="140" height="38" rx="19" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.22">
          <animate attributeName="stroke-opacity" values="0.2;0.28;0.2" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.6s" repeatCount="indefinite" />
        </rect>
        <image href="/teamcash.png" x="149" y="68" width="26" height="26" preserveAspectRatio="xMidYMid meet" opacity="0.96" />
        <text x="220" y="81" textAnchor="middle" dominantBaseline="middle" fill="#E8F6FD" fontSize="8.8" fontWeight="700" letterSpacing="1.12" textLength="58" lengthAdjust="spacingAndGlyphs">TEAMCASH</text>
      </g>

      <g opacity="0.86">
        <text x="104" y="132" textAnchor="middle" fill="#81ABC0" fontSize="8.6" fontWeight="700" letterSpacing="1.08">PASSIVE INCOME</text>
        <text x="326" y="132" textAnchor="middle" fill="#81ABC0" fontSize="8.6" fontWeight="700" letterSpacing="0.96">RECURRING TRANSACTIONS</text>
      </g>

      <g transform="translate(0 0)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -0.8;0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.8s" begin="0.4s" repeatCount="indefinite" />
        <rect x="66" y="174" width="116" height="42" rx="21" fill="#09131A" stroke="#2F6D86" strokeOpacity="0.92" />
        <rect x="70" y="178" width="108" height="34" rx="17" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.22">
          <animate attributeName="stroke-opacity" values="0.18;0.26;0.18" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.8s" begin="0.4s" repeatCount="indefinite" />
        </rect>
        <circle cx="90" cy="195" r="8" fill="#5EA6C2">
          <animate attributeName="fill-opacity" values="0.86;0.96;0.86" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.8s" begin="0.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="90" cy="190.6" r="2.9" fill="#07151C" />
        <path d="M83 199 C84 194 87 192 90 192 C93 192 96 194 97 199 Z" fill="#07151C" />
        <text x="100" y="196" textAnchor="start" dominantBaseline="middle" fill="#81ABC0" fontSize="6.4" fontWeight="700" letterSpacing="0.68" textLength="68" lengthAdjust="spacingAndGlyphs">TEAMCASH AGENT</text>
      </g>

      <g transform="translate(0 0)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -0.8;0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="9s" begin="1s" repeatCount="indefinite" />
        <rect x="238" y="174" width="116" height="42" rx="21" fill="#09131A" stroke="#2F6D86" strokeOpacity="0.92" />
        <rect x="242" y="178" width="108" height="34" rx="17" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.22">
          <animate attributeName="stroke-opacity" values="0.18;0.26;0.18" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="9s" begin="1s" repeatCount="indefinite" />
        </rect>
        <circle cx="262" cy="195" r="8" fill="#5EA6C2">
          <animate attributeName="fill-opacity" values="0.86;0.96;0.86" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="9s" begin="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="262" cy="190.6" r="2.9" fill="#07151C" />
        <path d="M255 199 C256 194 259 192 262 192 C265 192 268 194 269 199 Z" fill="#07151C" />
        <text x="272" y="196" textAnchor="start" dominantBaseline="middle" fill="#81ABC0" fontSize="6.4" fontWeight="700" letterSpacing="0.68" textLength="68" lengthAdjust="spacingAndGlyphs">TEAMCASH AGENT</text>
      </g>

      <g transform="translate(0 0)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.1;0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="7.8s" begin="0s" repeatCount="indefinite" />
        <circle cx="58" cy="328" r="18" fill="#0A1820" stroke="#2F6D86" strokeOpacity="0.9">
          <animate attributeName="stroke-opacity" values="0.76;0.92;0.76" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="7.8s" begin="0s" repeatCount="indefinite" />
        </circle>
        <circle cx="58" cy="328" r="14" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.3" />
        <circle cx="52" cy="324" r="3" fill="#5EA6C2" />
        <circle cx="58" cy="322" r="3" fill="#5EA6C2" />
        <circle cx="64" cy="324" r="3" fill="#5EA6C2" />
        <path d="M47 335 C48 330 51 328 54 328 C57 328 59 330 60 335" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M53 336 C54 331 57 329 60 329 C63 329 65 331 66 336" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(0 0)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.1;0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8s" begin="0.8s" repeatCount="indefinite" />
        <circle cx="136" cy="328" r="18" fill="#0A1820" stroke="#2F6D86" strokeOpacity="0.9">
          <animate attributeName="stroke-opacity" values="0.76;0.92;0.76" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8s" begin="0.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="136" cy="328" r="14" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.3" />
        <circle cx="130" cy="324" r="3" fill="#5EA6C2" />
        <circle cx="136" cy="322" r="3" fill="#5EA6C2" />
        <circle cx="142" cy="324" r="3" fill="#5EA6C2" />
        <path d="M125 335 C126 330 129 328 132 328 C135 328 137 330 138 335" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M131 336 C132 331 135 329 138 329 C141 329 143 331 144 336" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(0 0)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.1;0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.2s" begin="1.6s" repeatCount="indefinite" />
        <circle cx="210" cy="328" r="18" fill="#0A1820" stroke="#2F6D86" strokeOpacity="0.9">
          <animate attributeName="stroke-opacity" values="0.76;0.92;0.76" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.2s" begin="1.6s" repeatCount="indefinite" />
        </circle>
        <circle cx="210" cy="328" r="14" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.3" />
        <circle cx="204" cy="324" r="3" fill="#5EA6C2" />
        <circle cx="210" cy="322" r="3" fill="#5EA6C2" />
        <circle cx="216" cy="324" r="3" fill="#5EA6C2" />
        <path d="M199 335 C200 330 203 328 206 328 C209 328 211 330 212 335" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M205 336 C206 331 209 329 212 329 C215 329 217 331 218 336" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(0 0)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.1;0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="7.9s" begin="1.2s" repeatCount="indefinite" />
        <circle cx="284" cy="328" r="18" fill="#0A1820" stroke="#2F6D86" strokeOpacity="0.9">
          <animate attributeName="stroke-opacity" values="0.76;0.92;0.76" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="7.9s" begin="1.2s" repeatCount="indefinite" />
        </circle>
        <circle cx="284" cy="328" r="14" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.3" />
        <circle cx="278" cy="324" r="3" fill="#5EA6C2" />
        <circle cx="284" cy="322" r="3" fill="#5EA6C2" />
        <circle cx="290" cy="324" r="3" fill="#5EA6C2" />
        <path d="M273 335 C274 330 277 328 280 328 C283 328 285 330 286 335" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M279 336 C280 331 283 329 286 329 C289 329 291 331 292 336" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>
      <g transform="translate(0 0)">
        <animateTransform attributeName="transform" type="translate" values="0 0;0 -1.1;0 0" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.1s" begin="2s" repeatCount="indefinite" />
        <circle cx="362" cy="328" r="18" fill="#0A1820" stroke="#2F6D86" strokeOpacity="0.9">
          <animate attributeName="stroke-opacity" values="0.76;0.92;0.76" keyTimes="0;0.5;1" calcMode="spline" keySplines="0.42 0 0.58 1;0.42 0 0.58 1" dur="8.1s" begin="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="362" cy="328" r="14" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.3" />
        <circle cx="356" cy="324" r="3" fill="#5EA6C2" />
        <circle cx="362" cy="322" r="3" fill="#5EA6C2" />
        <circle cx="368" cy="324" r="3" fill="#5EA6C2" />
        <path d="M351 335 C352 330 355 328 358 328 C361 328 363 330 364 335" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M357 336 C358 331 361 329 364 329 C367 329 369 331 370 336" stroke="#5EA6C2" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

            <g transform="translate(0 0)" opacity="0.88">
        <text x="210" y="290" textAnchor="middle" fill="#81ABC0" fontSize="8.2" fontWeight="700" letterSpacing="1.28">AGENTS BRING IN PLAYERS</text>
        <text x="97" y="368" textAnchor="middle" fill="#81ABC0" fontSize="10.2" fontWeight="700" letterSpacing="1.18">players</text>
        <text x="323" y="368" textAnchor="middle" fill="#81ABC0" fontSize="10.2" fontWeight="700" letterSpacing="1.18">players</text>
      </g>

      <g fill="#9ED9EE" opacity="0.92">
        <circle r="3.4">
          <animate attributeName="opacity" values="0;1;0" dur="5s" begin="0.2s" repeatCount="indefinite" />
          <animateMotion dur="5s" begin="0.2s" repeatCount="indefinite" path="M210 102 C186 112 148 140 124 174" />
        </circle>
        <circle r="3.4">
          <animate attributeName="opacity" values="0;1;0" dur="5s" begin="1.2s" repeatCount="indefinite" />
          <animateMotion dur="5s" begin="1.2s" repeatCount="indefinite" path="M210 102 C234 112 272 140 296 174" />
        </circle>
        <circle r="3.4">
          <animate attributeName="opacity" values="0;1;0" dur="5.1s" begin="0.6s" repeatCount="indefinite" />
          <animateMotion dur="5.1s" begin="0.6s" repeatCount="indefinite" path="M124 216 C96 244 72 286 58 310" />
        </circle>
        <circle r="3.4">
          <animate attributeName="opacity" values="0;1;0" dur="5.1s" begin="1.8s" repeatCount="indefinite" />
          <animateMotion dur="5.1s" begin="1.8s" repeatCount="indefinite" path="M296 216 C324 244 348 286 362 310" />
        </circle>
        <circle r="3.4">
          <animate attributeName="opacity" values="0;1;0" dur="5.1s" begin="1.2s" repeatCount="indefinite" />
          <animateMotion dur="5.1s" begin="1.2s" repeatCount="indefinite" path="M136 310 C136 286 132 250 124 216" />
        </circle>
        <circle r="3.4">
          <animate attributeName="opacity" values="0;1;0" dur="5.1s" begin="2.4s" repeatCount="indefinite" />
          <animateMotion dur="5.1s" begin="2.4s" repeatCount="indefinite" path="M284 310 C284 286 288 250 296 216" />
        </circle>
      </g>
    </svg>
  );
}

function AgentRouteDemo() {
  return (
    <svg viewBox="24 12 372 244" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full origin-center scale-[1.06] sm:scale-[1.1]" aria-hidden="true">
      <defs>
        <linearGradient id="agentLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5EA6C2" stopOpacity="0.12" />
          <stop offset="50%" stopColor="#5EA6C2" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#5EA6C2" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      <g opacity="0.9">
        <path d="M132 116 H170" stroke="url(#agentLine)" strokeWidth="3" strokeDasharray="8 10">
          <animate attributeName="stroke-dashoffset" values="56;0" dur="2.4s" repeatCount="indefinite" />
        </path>
        <path d="M250 116 H288" stroke="url(#agentLine)" strokeWidth="3" strokeDasharray="8 10">
          <animate attributeName="stroke-dashoffset" values="56;0" dur="2.4s" repeatCount="indefinite" />
        </path>
        <path d="M210 164 V205" stroke="url(#agentLine)" strokeWidth="3" strokeDasharray="8 10">
          <animate attributeName="stroke-dashoffset" values="48;0" dur="2.8s" repeatCount="indefinite" />
        </path>
      </g>

      <g>
        <rect x="42" y="88" width="90" height="56" rx="18" fill="#0A1820" fillOpacity="0.88" stroke="#5EA6C2" strokeOpacity="0.22" />
        <rect x="288" y="88" width="90" height="56" rx="18" fill="#0A1820" fillOpacity="0.88" stroke="#5EA6C2" strokeOpacity="0.22" />
        <rect x="170" y="64" width="80" height="104" rx="26" fill="#09131A" fillOpacity="0.94" stroke="#5EA6C2" strokeOpacity="0.3" />
        <circle cx="210" cy="96" r="16" fill="#5EA6C2" fillOpacity="0.18" />
        <circle cx="210" cy="96" r="16" stroke="#5EA6C2" strokeOpacity="0.78" fill="none">
          <animate attributeName="r" values="16;26;16" dur="2.6s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values="0.78;0.12;0.78" dur="2.6s" repeatCount="indefinite" />
        </circle>
        <rect x="192" y="118" width="36" height="8" rx="4" fill="#5EA6C2" fillOpacity="0.84">
          <animate attributeName="width" values="24;42;24" dur="2.2s" repeatCount="indefinite" />
        </rect>
        <rect x="184" y="134" width="52" height="7" rx="3.5" fill="#FFFFFF" fillOpacity="0.22">
          <animate attributeName="width" values="36;58;36" dur="2.9s" repeatCount="indefinite" />
        </rect>
      </g>

      <g>
        <circle cx="150" cy="116" r="5" fill="#5EA6C2">
          <animate attributeName="cx" values="132;170;132" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="270" cy="116" r="5" fill="#5EA6C2">
          <animate attributeName="cx" values="250;288;250" dur="2.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="210" cy="180" r="5" fill="#5EA6C2">
          <animate attributeName="cy" values="164;205;164" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </g>

      <g opacity="0.94">
        <rect x="106" y="196" width="68" height="26" rx="13" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.2" />
        <rect x="178" y="196" width="64" height="26" rx="13" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.2" />
        <rect x="246" y="196" width="74" height="26" rx="13" fill="#0D1A20" stroke="#5EA6C2" strokeOpacity="0.2" />
        <rect x="120" y="206" width="18" height="6" rx="3" fill="#5EA6C2" fillOpacity="0.84">
          <animate attributeName="width" values="12;26;12" dur="2.1s" repeatCount="indefinite" />
        </rect>
        <rect x="192" y="206" width="18" height="6" rx="3" fill="#5EA6C2" fillOpacity="0.84">
          <animate attributeName="width" values="10;24;10" dur="2.5s" repeatCount="indefinite" />
        </rect>
        <rect x="264" y="206" width="24" height="6" rx="3" fill="#5EA6C2" fillOpacity="0.84">
          <animate attributeName="width" values="14;30;14" dur="2.8s" repeatCount="indefinite" />
        </rect>
      </g>
    </svg>
  );
}

export default function HomePage() {
  const { language, t } = useLanguage();
  const direction = getMarketDirection(language);
  const content = getPlayerHomeContent(language);
  const assets = syriaGlobals.home.assets;
  const playNowLabel = language === "ar" ? "ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¹ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¨ ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¾ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â¹Ãƒâ€¦Ã¢â‚¬Å“ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â " : "Play now";
  const sportsPlayHref = "https://refpa3665.com/L?tag=d_4092175m_66329c_SyriaSport";
  const gamesPlayHref = "https://refpa3665.com/L?tag=d_4092175m_66329c_MLBSyria26";
  const [offerCountdown, setOfferCountdown] = useState("11:59:59");

  useEffect(() => {
    const offerWindowSeconds = 12 * 60 * 60;
    let deadline = Date.now() + offerWindowSeconds * 1000;

    const syncCountdown = () => {
      const remainingMs = deadline - Date.now();

      if (remainingMs <= 0) {
        deadline = Date.now() + offerWindowSeconds * 1000;
        setOfferCountdown(formatOfferCountdown(offerWindowSeconds));
        return;
      }

      setOfferCountdown(formatOfferCountdown(Math.floor(remainingMs / 1000)));
    };

    syncCountdown();
    const intervalId = window.setInterval(syncCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const heroCards = [content.hero.lead, ...content.hero.sideCards];
  const heroCardThemes = [
    {
      orbClass: "bg-[#C6844B]/14",
      badgeClass: "border-[#C6844B]/24 bg-[#1A1208]/72 text-[#E4B47B]",
      wordClass: "glow-contrast",
      dotClass: "bg-[#C6844B] shadow-[0_0_16px_rgba(198,132,75,0.6)]",
    },
    {
      orbClass: "bg-[#2F6D86]/12",
      badgeClass: "border-[#2F6D86]/24 bg-[#08141B]/72 text-[#5EA6C2]",
      wordClass: "glow-green",
      dotClass: "bg-[#5EA6C2] shadow-[0_0_16px_rgba(94,166,194,0.65)]",
    },
    {
      orbClass: "bg-[#C6844B]/12",
      badgeClass: "border-[#C6844B]/24 bg-[#1A1208]/72 text-[#E4B47B]",
      wordClass: "glow-contrast",
      dotClass: "bg-[#C6844B] shadow-[0_0_16px_rgba(198,132,75,0.6)]",
    },
  ] as const;

  const partnerRouteCard = {
    side: t.paths.partner.side[language],
    title: t.paths.partner.title[language],
    kind: "partner" as const,
    badgeClass: "border-[#C6844B]/24 bg-[#1A1208]/72 text-[#E4B47B]",
    dotClass: "bg-[#C6844B] shadow-[0_0_16px_rgba(198,132,75,0.6)]",
    glowClass: "bg-[#C6844B]/12",
    demoFrameClass: "border-[#2F6D86]/18 bg-[#071117]/70",
  };

  const agentRouteCard = {
    side: t.paths.agent.side[language],
    title: t.paths.agent.title[language],
    kind: "agent" as const,
    badgeClass: "border-[#2F6D86]/24 bg-[#08141B]/72 text-[#5EA6C2]",
    dotClass: "bg-[#5EA6C2] shadow-[0_0_16px_rgba(94,166,194,0.65)]",
    glowClass: "bg-[#2F6D86]/12",
    demoFrameClass: "border-[#2F6D86]/18 bg-[#071117]/70",
  };

  const routeCards = direction === "rtl" ? [agentRouteCard, partnerRouteCard] : [partnerRouteCard, agentRouteCard];

  const containerStyle = { maxWidth: syriaGlobals.home.layout.containerWidth };
  const sectionStyle = {
    paddingTop: syriaGlobals.home.layout.sectionPaddingY,
    paddingBottom: syriaGlobals.home.layout.sectionPaddingY,
  };

  const sections = {
    hero: (
      <section
        key="hero"
        id="top"
        className="relative overflow-hidden px-4 sm:px-6"
        style={{
          paddingTop: syriaGlobals.home.layout.heroPaddingTop,
          paddingBottom: syriaGlobals.home.layout.heroPaddingBottom,
        }}
      >
        <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#2F6D86]/[0.08] blur-[140px]" />
        <div className="pointer-events-none absolute left-[6%] top-[18%] h-44 w-44 rounded-full bg-white/[0.03] blur-[100px]" />
        <div className="pointer-events-none absolute right-[4%] top-[28%] h-52 w-52 rounded-full bg-[#C6844B]/[0.08] blur-[120px]" />

        <div className="mx-auto" style={containerStyle}>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#C6844B]/30 bg-[#C6844B]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E4B47B]">
                <span className="h-2 w-2 rounded-full bg-[#C6844B]" />
                {content.hero.eyebrow}
              </div>

              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {renderHeroTitle(content.hero.title, language)}
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
                {content.hero.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={syriaGlobals.home.anchors.games}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#2F6D86] px-6 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                >
                  {content.hero.primary}
                </Link>

                <Link
                  href={syriaGlobals.home.anchors.offers}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#C6844B]/22 bg-[#C6844B]/12 px-6 text-sm font-semibold text-[#E4B47B] transition duration-300 hover:border-[#C6844B]/40 hover:bg-[#C6844B]/18"
                >
                  {content.hero.secondary}
                </Link>
              </div>

              <div className="mt-8">
                <Link
                  href={gamesPlayHref}
                  className="group relative inline-flex min-h-[98px] w-full overflow-hidden rounded-[32px] border border-[#D39A5F]/48 bg-[linear-gradient(135deg,rgba(198,132,75,0.34),rgba(228,180,123,0.16)_34%,rgba(14,19,24,0.96)_72%)] px-5 py-4 text-left shadow-[0_24px_58px_rgba(198,132,75,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 hover:scale-[1.01] hover:border-[#F0C693]/72 hover:shadow-[0_30px_80px_rgba(198,132,75,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.16),transparent_22%),radial-gradient(circle_at_88%_50%,rgba(240,198,147,0.16),transparent_20%),linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)] opacity-90 transition duration-300 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/28 to-transparent" />
                  <span className="pointer-events-none absolute inset-y-5 right-[186px] hidden w-px bg-gradient-to-b from-transparent via-white/8 to-transparent sm:block" />
                  <span className="pointer-events-none absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-[#E4B47B]/16 blur-3xl transition duration-300 group-hover:bg-[#E4B47B]/26" />
                  <span className="relative grid w-full items-center gap-4 sm:grid-cols-[minmax(0,1fr)_180px]">
                    <span className="flex min-w-0 flex-col justify-center">
                      <span className="text-[22px] font-semibold leading-[1.01] text-white sm:max-w-[19ch] sm:text-[28px]">
                        Claim your <span className="text-[#FFD7A7]">200$ offer now!</span>
                      </span>
                    </span>
                    <span className="flex self-center sm:justify-end">
                      <span className="inline-flex items-center justify-center gap-3 rounded-[20px] border border-[#F0C693]/18 bg-[linear-gradient(180deg,rgba(18,14,9,0.82),rgba(18,14,9,0.62))] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFE0B8] shadow-[0_0_22px_rgba(198,132,75,0.12)]">
                        <span className="relative flex h-6 w-6 items-center justify-center rounded-full border border-[#F0C693]/28 bg-[#F0C693]/10">
                          <span className="absolute h-2 w-[1.5px] -translate-y-[1px] rounded-full bg-[#FFD7A7]" />
                          <span className="absolute h-[1.5px] w-2 translate-x-[2px] rounded-full bg-[#FFD7A7]" />
                        </span>
                                                <span className="flex flex-col items-center gap-1">
                          <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 font-mono text-[14px] tracking-[0.12em] text-white">
                            {offerCountdown}
                          </span>
                          <span className="text-[9px] font-semibold tracking-[0.14em] text-[#E4B47B]/78">
                            time left!
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            <div className="relative">
              <article
                className="relative flex min-h-[560px] flex-col overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(7,12,16,0.7),rgba(5,9,12,0.82))] p-5 shadow-[0_22px_64px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.035)] sm:min-h-[620px] sm:p-6"
              >
                <div className={`pointer-events-none absolute right-[-2rem] top-[-2rem] h-28 w-28 rounded-full ${partnerRouteCard.glowClass} blur-3xl`} />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                <div className="relative flex flex-1 flex-col">
                  <div className={`relative flex-1 overflow-hidden rounded-[22px] border ${partnerRouteCard.demoFrameClass} min-h-[520px] sm:min-h-[580px]`}>
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
                    <RouteDemoGraphic kind={partnerRouteCard.kind} />
                    <p className="absolute inset-x-0 bottom-6 text-center text-base font-semibold uppercase tracking-[0.22em] text-[#81ABC0]">
                      Become a MELBET agent
                    </p>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <Link
                      href={syriaGlobals.support.telegram.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2F6D86] px-6 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                    >
                      <Image
                        src={syriaGlobals.support.telegram.icon}
                        alt={content.finalCta.primary}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain brightness-0 invert"
                      />
                      <span>{content.finalCta.primary}</span>
                    </Link>

                    <Link
                      href={syriaGlobals.support.email.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white transition duration-300 hover:border-[#2F6D86]/45 hover:bg-white/[0.07]"
                    >
                      <Image
                        src={syriaGlobals.support.email.icon}
                        alt={content.finalCta.secondary}
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] object-contain brightness-0 invert"
                      />
                      <span>{content.finalCta.secondary}</span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    ),
    games: (
      <section key="games" id="games" className="px-4 sm:px-6" style={sectionStyle}>
        <div className="mx-auto" style={containerStyle}>
          <SectionHeading eyebrow={content.games.eyebrow} title={content.games.title} body={content.games.body} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.games.cards.map((card) => (
              <article
                key={card.title}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <FeatureVisual src={assets[card.asset]} alt={card.title} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
                      {card.eyebrow}
                    </p>
                    {card.metric ? (
                      <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74">
                        {card.metric}
                      </div>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/64">{card.body}</p>
                  <Link
                    href={gamesPlayHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex min-h-[44px] w-fit items-center justify-center rounded-full bg-[#2F6D86] px-5 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                  >
                    {playNowLabel}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ),
    sports: (
      <section key="sports" id="sports" className="px-4 sm:px-6" style={sectionStyle}>
        <div className="mx-auto" style={containerStyle}>
          <SectionHeading eyebrow={content.sports.eyebrow} title={content.sports.title} body={content.sports.body} />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-white/10 bg-black/20 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
              <FeatureVisual src={assets[content.sports.lead.asset]} alt={content.sports.lead.title} />
              <div className="absolute left-4 top-4 rounded-full border border-[#2F6D86]/22 bg-[#08141B]/72 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2] backdrop-blur-md">
                {content.sports.lead.metric}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
                  {content.sports.lead.eyebrow}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{content.sports.lead.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/68">
                  {content.sports.lead.body}
                </p>
                <Link
                  href={sportsPlayHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex min-h-[44px] w-fit items-center justify-center rounded-full bg-[#2F6D86] px-5 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                >
                  {playNowLabel}
                </Link>
              </div>
            </article>

            <div className="grid gap-4">
              {content.sports.rails.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
                >
                  <div className="grid min-h-[148px] gap-0 sm:grid-cols-[152px_1fr]">
                    <div className="relative min-h-[160px] sm:min-h-full">
                      <FeatureVisual src={assets[card.asset]} alt={card.title} />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
                          {card.eyebrow}
                        </p>
                        {card.metric ? (
                          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74">
                            {card.metric}
                          </span>
                        ) : null}
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-white">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/64">{card.body}</p>
                      <Link
                        href={sportsPlayHref}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-4 inline-flex min-h-[42px] w-fit items-center justify-center rounded-full bg-[#2F6D86] px-5 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                      >
                        {playNowLabel}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    ),
    offers: (
      <section key="offers" id="offers" className="px-4 sm:px-6" style={sectionStyle}>
        <div className="mx-auto" style={containerStyle}>
          <SectionHeading eyebrow={content.offers.eyebrow} title={content.offers.title} body={content.offers.body} />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {content.offers.cards.map((card) => (
              <article
                key={card.title}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015))] shadow-[0_24px_70px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <FeatureVisual src={assets[card.asset]} alt={card.title} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5EA6C2]">
                      {card.eyebrow}
                    </p>
                    {card.metric ? (
                      <div className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/74">
                        {card.metric}
                      </div>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-white/64">{card.body}</p>
                  {card.asset === "offerWelcome" ? (
                    <Link
                      href={gamesPlayHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex min-h-[36px] w-fit items-center justify-center rounded-full border border-[#C6844B]/26 bg-[#C6844B]/12 px-4 text-xs font-semibold text-[#E4B47B] transition duration-300 hover:bg-[#C6844B]/18"
                    >
                      Collect 200$ bonus!
                    </Link>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    ),
    support: (
      <section
        key="support"
        id="support"
        className="px-4 pb-24 sm:px-6 sm:pb-28"
        style={{ paddingTop: syriaGlobals.home.layout.sectionPaddingY }}
      >
        <div className="mx-auto" style={containerStyle}>
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.014))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8">
            <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#2F6D86]/40 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[#2F6D86]/[0.05] blur-3xl" />
            <div className="pointer-events-none absolute left-0 bottom-0 h-40 w-40 bg-white/[0.02] blur-3xl" />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#2F6D86]/30 bg-[#2F6D86]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5EA6C2]">
                  <span className="h-2 w-2 rounded-full bg-[#2F6D86]" />
                  {content.finalCta.eyebrow}
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[46px] lg:leading-[1.02]">
                  {content.finalCta.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/65 sm:text-base">{content.finalCta.body}</p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <Link
                  href={syriaGlobals.support.telegram.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#2F6D86] px-6 text-sm font-semibold text-[#07151C] transition duration-300 hover:scale-[1.02] hover:bg-[#5EA6C2]"
                >
                  <Image
                    src={syriaGlobals.support.telegram.icon}
                    alt={content.finalCta.primary}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain brightness-0 invert"
                  />
                  <span>{content.finalCta.primary}</span>
                </Link>

                <Link
                  href={syriaGlobals.support.email.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-semibold text-white transition duration-300 hover:border-[#2F6D86]/45 hover:bg-white/[0.07]"
                >
                  <Image
                    src={syriaGlobals.support.email.icon}
                    alt={content.finalCta.secondary}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain brightness-0 invert"
                  />
                  <span>{content.finalCta.secondary}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    ),
  } as const;

  return (
    <main dir={direction} className="text-white">
      {syriaGlobals.home.sectionOrder.map((sectionId) => (
        <Fragment key={sectionId}>{sections[sectionId]}</Fragment>
      ))}
    </main>
  );
}















































