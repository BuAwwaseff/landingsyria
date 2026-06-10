import type { ReactNode } from "react";
import { cookies, headers } from "next/headers";
import type { Language } from "@/lib/dictionary";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/interactivebackground";
import LanguageProvider from "./components/LanguageProvider";
import TopBar from "./components/TopBar";
import {
  getMarketDirection,
  isSupportedLocale,
  LANGUAGE_COOKIE_NAME,
  normalizeLanguage,
} from "@/lib/market/syria.globals";
import { getSyriaThemeVars } from "@/lib/market/syria.theme";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const headerLanguage = headerStore.get("x-language");
  const cookieLanguage = cookieStore.get(LANGUAGE_COOKIE_NAME)?.value;
  const requestLanguage = headerLanguage ?? "";
  const initialLanguage: Language = isSupportedLocale(requestLanguage)
    ? requestLanguage
    : normalizeLanguage(cookieLanguage);
  const direction = getMarketDirection(initialLanguage);

  return (
    <html lang={initialLanguage} dir={direction}>
      <body style={getSyriaThemeVars()} className="min-h-screen bg-[var(--market-background)] text-white">
        <LanguageProvider initialLanguage={initialLanguage}>
          <div className="relative min-h-screen">
            <div className="fixed inset-0 z-0">
              <InteractiveBackground />
            </div>

            <div className="relative z-10 flex min-h-screen flex-col">
              <TopBar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
