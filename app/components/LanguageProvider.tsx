"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { dictionary, type Language } from "@/lib/dictionary";
import {
  getMarketDirection,
  translatePathnameToLanguage,
} from "@/lib/market/syria.globals";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: typeof dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({
  children,
  initialLanguage,
}: {
  children: ReactNode;
  initialLanguage: Language;
}) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    setLanguageState(initialLanguage);
  }, [initialLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = getMarketDirection(language);
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) {
      return;
    }

    setLanguageState(nextLanguage);

    const currentHash = typeof window === "undefined" ? "" : window.location.hash;
    const nextPath = translatePathnameToLanguage(pathname, nextLanguage);
    router.replace(`${nextPath}${currentHash}`, { scroll: false });
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage,
      t: dictionary,
    }),
    [language, pathname, router]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
