"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export default function Footer() {
  const pathname = usePathname() ?? "/";
  const normalizedPathname = stripLocaleFromPathname(pathname);
  const { language, t } = useLanguage();
  const direction = getMarketDirection(language);
  const home = getPlayerHomeContent(language);
  const isPartnershipPage = normalizedPathname.startsWith(syriaGlobals.routes.partnership);
  const homeHref = localizeHref(pathname, syriaGlobals.routes.home);
  const partnershipHref = localizeHref(pathname, syriaGlobals.routes.partnership);

  const homeLinks = [
    { href: `${homeHref}${syriaGlobals.home.anchors.games}`, label: home.nav.games },
    { href: `${homeHref}${syriaGlobals.home.anchors.sports}`, label: home.nav.sports },
    { href: `${homeHref}${syriaGlobals.home.anchors.offers}`, label: home.nav.offers },
    { href: `${homeHref}${syriaGlobals.home.anchors.support}`, label: home.nav.support },
  ];

  const partnershipLinks = [
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
  ];

  const supportLinks = [
    {
      href: syriaGlobals.support.telegram.href,
      label: t.finalCta.telegramCta[language],
      icon: syriaGlobals.support.telegram.icon,
    },
    {
      href: syriaGlobals.support.email.href,
      label: t.finalCta.emailCta[language],
      icon: syriaGlobals.support.email.icon,
    },
  ];

  return (
    <footer dir={direction} className="mt-auto px-4 pb-8 pt-4 sm:px-6 lg:px-12">
      <div
        className="mx-auto"
        style={{ maxWidth: syriaGlobals.shell.containerWidth }}
      >
        <div className="relative overflow-hidden rounded-[32px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))] px-6 py-8 shadow-[0_22px_60px_rgba(0,0,0,0.26),inset_0_1px_0_rgba(255,255,255,0.04)] sm:px-8">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#C6844B]/45 to-transparent" />
          <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 bg-[#C6844B]/[0.06] blur-3xl" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-44 w-44 bg-white/[0.02] blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr]">
            <div className="space-y-5">
              <div className="flex items-center">
                <MarketLogo
                  ariaLabel={syriaGlobals.market.brandName[language]}
                  preset="footer"
                  wrapperClassName="inline-flex"
                />
              </div>
              <p className="max-w-lg text-[15px] leading-7 text-white/60">
                {isPartnershipPage ? t.footer.text[language] : home.footer.body}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C6844B]">
                {home.footer.homeLabel}
              </p>
              <div className="flex flex-col gap-3">
                {homeLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/68 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C6844B]">
                {getLocalizedText(syriaContent.shell.partnershipLinksLabel, language)}
              </p>
              <div className="flex flex-col gap-3">
                {partnershipLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-white/68 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#C6844B]">
                {home.footer.supportLabel}
              </p>
              <div className="flex flex-col gap-3">
                {supportLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[42px] items-center gap-3 rounded-full border border-white/8 bg-white/[0.03] px-4 text-sm text-white/70 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#C6844B]/25 hover:text-white"
                  >
                    <Image src={item.icon} alt="" width={16} height={16} className="h-4 w-4 object-contain brightness-0 invert" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 mt-5 text-xs text-white/40">
            <p>{getLocalizedText(syriaContent.shell.copyright, language)}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
