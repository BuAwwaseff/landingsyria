"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";
import { MarketLogo } from "./MarketLogo";
import { getLocalizedText, syriaContent } from "@/lib/market/syria.content";
import { getMarketDirection, syriaGlobals } from "@/lib/market/syria.globals";
import { getPlayerHomeContent } from "@/lib/player-home";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      dir="ltr"
      className="relative inline-grid grid-cols-2 rounded-full border border-[#C6844B]/22 bg-white/[0.04] p-1"
    >
      <div
        className={`absolute bottom-1 top-1 w-[calc(50%-4px)] rounded-full bg-[#C6844B] transition-transform duration-300 ease-out ${
          language === "en" ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ left: 4 }}
      />

      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`relative z-10 min-w-[48px] rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          language === "en" ? "text-[#1C1207]" : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ar")}
        className={`relative z-10 min-w-[48px] rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          language === "ar" ? "text-[#1C1207]" : "text-white/70 hover:text-white"
        }`}
      >
        AR
      </button>
    </div>
  );
}

export default function TopBar() {
  const pathname = usePathname() ?? "/";
  const { language, t } = useLanguage();
  const home = getPlayerHomeContent(language);
  const direction = getMarketDirection(language);
  const isPartnershipPage = pathname.startsWith(syriaGlobals.routes.partnership);

  const pageItems = isPartnershipPage
    ? [
        {
          href: `${syriaGlobals.routes.partnership}${syriaGlobals.partnership.anchors.benefits}`,
          label: getLocalizedText(syriaContent.navigation.benefits, language),
        },
        {
          href: `${syriaGlobals.routes.partnership}${syriaGlobals.partnership.anchors.steps}`,
          label: getLocalizedText(syriaContent.navigation.steps, language),
        },
        {
          href: `${syriaGlobals.routes.partnership}${syriaGlobals.partnership.anchors.paths}`,
          label: getLocalizedText(syriaContent.navigation.paths, language),
        },
        {
          href: `${syriaGlobals.routes.partnership}${syriaGlobals.partnership.anchors.tools}`,
          label: getLocalizedText(syriaContent.navigation.tools, language),
        },
      ]
    : [
        {
          href: `${syriaGlobals.routes.home}${syriaGlobals.home.anchors.games}`,
          label: home.nav.games,
        },
        {
          href: `${syriaGlobals.routes.home}${syriaGlobals.home.anchors.sports}`,
          label: home.nav.sports,
        },
        {
          href: `${syriaGlobals.routes.home}${syriaGlobals.home.anchors.offers}`,
          label: home.nav.offers,
        },
        {
          href: `${syriaGlobals.routes.home}${syriaGlobals.home.anchors.support}`,
          label: home.nav.support,
        },
      ];

  const navItems = [
    {
      href: syriaGlobals.routes.home,
      label: t.topBar.home[language],
      icon: null,
      active: isActive(pathname, syriaGlobals.routes.home),
    },
    ...pageItems.map((item) => ({
      ...item,
      icon: null,
      active: false,
    })),
    {
      href: syriaGlobals.routes.partnership,
      label: t.topBar.partnership[language],
      icon: null,
      active: isActive(pathname, syriaGlobals.routes.partnership),
    },
  ];

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
            <div className="flex flex-1 items-center lg:flex-none">
              <LanguageSwitcher />
            </div>

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
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

            <div className="flex flex-1 items-center justify-end lg:flex-none">
              <Link
                href={syriaGlobals.routes.home}
                className="group inline-flex items-center"
              >
                <MarketLogo
                  ariaLabel={syriaGlobals.market.brandName[language]}
                  preset="header"
                  wrapperClassName="inline-flex"
                />
              </Link>
            </div>
          </div>

          <div className="relative mt-3 lg:hidden">
            <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group inline-flex min-h-[40px] shrink-0 items-center gap-2 rounded-full border px-4 transition-all duration-300",
                    item.active
                      ? "border-[#C6844B]/32 bg-[#C6844B]/12 text-white"
                      : "border-white/10 bg-white/[0.04] text-white/72",
                  ].join(" ")}
                >
                  <span className="text-[13px] font-medium">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
