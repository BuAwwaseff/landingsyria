"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { MarketLogo } from "./MarketLogo";
import { getLocalizedText, syriaContent } from "@/lib/market/syria.content";
import {
  getMarketDirection,
  localizeHref,
  stripLocaleFromPathname,
  syriaGlobals,
} from "@/lib/market/syria.globals";
import { getPlayerHomeContent } from "@/lib/player-home";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function LanguageSwitcher({
  fullWidth = false,
}: {
  fullWidth?: boolean;
}) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      dir="ltr"
      className={[
        "relative grid grid-cols-2 rounded-full border border-[#C6844B]/22 bg-white/[0.04] p-1",
        fullWidth ? "w-full" : "inline-grid",
      ].join(" ")}
    >
      <div
        className={`absolute bottom-1 top-1 rounded-full bg-[#C6844B] transition-transform duration-300 ease-out ${
          language === "en" ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ left: 4, width: "calc(50% - 4px)" }}
      />

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative z-10 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          fullWidth ? "min-h-[46px]" : "min-w-[48px]"
        } ${
          language === "en" ? "text-[#1C1207]" : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ar")}
        className={`relative z-10 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          fullWidth ? "min-h-[46px]" : "min-w-[48px]"
        } ${
          language === "ar" ? "text-[#1C1207]" : "text-white/70 hover:text-white"
        }`}
      >
        AR
      </button>
    </div>
  );
}

export default function TopBar() {
  const appDownloadHref = "https://refpa3665.com/L?tag=d_5002529m_70867c_MEMOAPP";
  const pathname = usePathname() ?? "/";
  const normalizedPathname = stripLocaleFromPathname(pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t } = useLanguage();
  const home = getPlayerHomeContent(language);
  const direction = getMarketDirection(language);
  const downloadAppLabel = language === "ar" ? "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u062a\u0637\u0628\u064a\u0642" : "Download App";
  const isPartnershipPage = normalizedPathname.startsWith(syriaGlobals.routes.partnership);
  const homeHref = localizeHref(pathname, syriaGlobals.routes.home);
  const partnershipHref = localizeHref(pathname, syriaGlobals.routes.partnership);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname, language]);

  const pageItems = isPartnershipPage
    ? [
        {
          href: `${partnershipHref}${syriaGlobals.partnership.anchors.benefits}`,
          label: getLocalizedText(syriaContent.navigation.benefits, language),
        },
        {
          href: `${partnershipHref}${syriaGlobals.partnership.anchors.steps}`,
          label: getLocalizedText(syriaContent.navigation.steps, language),
        },
        {
          href: `${partnershipHref}${syriaGlobals.partnership.anchors.paths}`,
          label: getLocalizedText(syriaContent.navigation.paths, language),
        },
        {
          href: `${partnershipHref}${syriaGlobals.partnership.anchors.tools}`,
          label: getLocalizedText(syriaContent.navigation.tools, language),
        },
      ]
    : [
        {
          href: `${homeHref}${syriaGlobals.home.anchors.games}`,
          label: home.nav.games,
        },
        {
          href: `${homeHref}${syriaGlobals.home.anchors.sports}`,
          label: home.nav.sports,
        },
        {
          href: `${homeHref}${syriaGlobals.home.anchors.offers}`,
          label: home.nav.offers,
        },
        {
          href: `${homeHref}${syriaGlobals.home.anchors.support}`,
          label: home.nav.support,
        },
      ];

  const navItems = [
    {
      href: homeHref,
      label: t.topBar.home[language],
      active: isActive(normalizedPathname, syriaGlobals.routes.home),
    },
    ...pageItems.map((item) => ({
      ...item,
      active: false,
    })),
    {
      href: partnershipHref,
      label: t.topBar.partnership[language],
      active: isActive(normalizedPathname, syriaGlobals.routes.partnership),
    },
  ];

  const mobileMenuItems = isPartnershipPage
    ? [
        {
          href: homeHref,
          label: t.topBar.home[language],
          active: isActive(normalizedPathname, syriaGlobals.routes.home),
        },
        {
          href: partnershipHref,
          label: t.topBar.partnership[language],
          active: isActive(normalizedPathname, syriaGlobals.routes.partnership),
        },
        {
          href: `${partnershipHref}${syriaGlobals.partnership.anchors.finalCta}`,
          label: t.finalCta.eyebrow[language],
          active: false,
        },
      ]
    : [
        {
          href: homeHref,
          label: t.topBar.home[language],
          active: isActive(normalizedPathname, syriaGlobals.routes.home),
        },
        {
          href: partnershipHref,
          label: t.topBar.partnership[language],
          active: isActive(normalizedPathname, syriaGlobals.routes.partnership),
        },
        {
          href: `${homeHref}${syriaGlobals.home.anchors.support}`,
          label: home.nav.support,
          active: false,
        },
      ];

  const mobilePrimaryAction = isPartnershipPage
    ? {
        href: `${partnershipHref}${syriaGlobals.partnership.anchors.paths}`,
        label: t.hero.cta[language],
      }
    : {
        href: `${homeHref}${syriaGlobals.home.anchors.games}`,
        label: home.hero.primary,
      };

  return (
    <header dir={direction} className="sticky top-4 z-40 px-3 sm:px-4">
      <div
        className="mx-auto"
        style={{ maxWidth: syriaGlobals.shell.containerWidth }}
      >
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,12,16,0.92),rgba(5,8,11,0.8))] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-2xl sm:px-5">
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#C6844B]/60 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 rounded-full bg-[#2F6D86]/[0.08] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 rounded-full bg-[#C6844B]/[0.07] blur-3xl" />

          <div className="relative flex items-center gap-3 lg:gap-5">
            <div className="order-1 flex flex-1 items-center justify-start lg:flex-none">
              <Link
                href={homeHref}
                className="group inline-flex items-center"
              >
                <MarketLogo
                  ariaLabel={syriaGlobals.market.brandName[language]}
                  preset="header"
                  wrapperClassName="inline-flex"
                />
              </Link>
            </div>

            <div className="order-2 flex shrink-0 lg:hidden">
              <a
                href={appDownloadHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#2F6D86] px-3 text-[12px] font-semibold text-[#07151C] shadow-[0_12px_28px_rgba(47,109,134,0.24)] transition duration-300 hover:scale-[1.01] hover:bg-[#5EA6C2] sm:min-h-[46px] sm:px-4 sm:text-[13px]"
              >
                {downloadAppLabel}
              </a>
            </div>

            <nav className="order-3 hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group inline-flex min-h-[46px] items-center gap-3 rounded-full border px-4 transition-all duration-300",
                    item.active
                      ? "border-[#C6844B]/32 bg-[#C6844B]/12 text-white"
                      : "border-transparent bg-transparent text-white/72 hover:border-[#C6844B]/18 hover:bg-white/[0.05] hover:text-white",
                  ].join(" ")}
                >
                  <span className="text-[14px] font-semibold tracking-[-0.02em]">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="order-4 flex flex-1 items-center justify-end lg:flex-none">
              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href={appDownloadHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center rounded-full bg-[#2F6D86] px-5 text-[14px] font-semibold text-[#07151C] shadow-[0_14px_32px_rgba(47,109,134,0.24)] transition duration-300 hover:scale-[1.01] hover:bg-[#5EA6C2]"
                >
                  {downloadAppLabel}
                </a>

                <LanguageSwitcher />
              </div>

              <button
                type="button"
                aria-controls="mobile-nav-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-[var(--market-line)] bg-[linear-gradient(180deg,rgba(8,19,26,0.92),rgba(5,8,11,0.96))] text-[var(--market-contrast-strong)] shadow-[0_10px_24px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:border-[#5EA6C2]/35 hover:text-[#E4B47B] lg:hidden"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMobileMenuOpen ? (
                    <>
                      <path d="M5 5L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </>
                  ) : (
                    <>
                      <path d="M4 6.5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M4 10H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M4 13.5H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          {isMobileMenuOpen ? (
            <div className="relative mt-3 lg:hidden">
              <div
                id="mobile-nav-menu"
                className="relative overflow-hidden rounded-[28px] border border-[var(--market-line)] bg-[linear-gradient(180deg,rgba(8,19,26,0.96),rgba(5,8,11,0.98))] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.03)]"
              >
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#C6844B]/45 to-transparent" />
                <div className="pointer-events-none absolute left-0 top-0 h-28 w-28 rounded-full bg-[#2F6D86]/[0.08] blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-full bg-[#C6844B]/[0.06] blur-3xl" />

                <div className="relative grid grid-cols-3 gap-2">
                  {mobileMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={[
                        "inline-flex min-h-[44px] items-center justify-center rounded-[18px] border px-3 text-center transition-all duration-300",
                        item.active
                          ? "border-[#C6844B]/35 bg-[#C6844B]/12 text-white"
                          : "border-[var(--market-line)] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.012))] text-white/80 hover:border-[#5EA6C2]/28 hover:bg-[#2F6D86]/10 hover:text-white",
                      ].join(" ")}
                    >
                      <span className="text-[13px] font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>

                <div className="relative mt-3">
                  <LanguageSwitcher fullWidth />
                </div>

                <a
                  href={appDownloadHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative mt-4 inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#2F6D86] px-6 text-sm font-semibold text-[#07151C] shadow-[0_14px_32px_rgba(47,109,134,0.24)] transition duration-300 hover:scale-[1.01] hover:bg-[#5EA6C2]"
                >
                  {downloadAppLabel}
                </a>

                <Link
                  href={mobilePrimaryAction.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative mt-4 inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#2F6D86] px-6 text-sm font-semibold text-[#07151C] shadow-[0_14px_32px_rgba(47,109,134,0.24)] transition duration-300 hover:scale-[1.01] hover:bg-[#5EA6C2]"
                >
                  {mobilePrimaryAction.label}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
