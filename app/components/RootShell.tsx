import type { ReactNode } from "react";
import type { Language } from "@/lib/dictionary";
import Footer from "./Footer";
import InteractiveBackground from "./interactivebackground";
import LanguageProvider from "./LanguageProvider";
import TopBar from "./TopBar";
import { getSyriaThemeVars } from "@/lib/market/syria.theme";

export default function RootShell({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  return (
    <body
      style={getSyriaThemeVars()}
      className="min-h-screen bg-[var(--market-background)] text-white"
    >
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
  );
}
