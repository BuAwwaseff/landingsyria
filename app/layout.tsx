import type { ReactNode } from "react";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/interactivebackground";
import LanguageProvider from "./components/LanguageProvider";
import TopBar from "./components/TopBar";
import { syriaGlobals } from "@/lib/market/syria.globals";
import { getSyriaThemeVars } from "@/lib/market/syria.theme";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang={syriaGlobals.market.defaultLocale}>
      <body style={getSyriaThemeVars()} className="min-h-screen bg-[var(--market-background)] text-white">
        <LanguageProvider>
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
