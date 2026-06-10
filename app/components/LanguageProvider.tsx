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
  buildLanguageCookieValue,
  getLocaleFromPathname,
  normalizeLanguage,
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
  const pathnameLanguage = getLocaleFromPathname(pathname);
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    setLanguageState(normalizeLanguage(initialLanguage));
  }, [initialLanguage]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.cookie = buildLanguageCookieValue(language);
  }, [language]);

  const setLanguage = (nextLanguage: Language) => {
    if (nextLanguage === language) {
      return;
    }

    document.cookie = buildLanguageCookieValue(nextLanguage);
    setLanguageState(nextLanguage);

    const currentHash = typeof window === "undefined" ? "" : window.location.hash;

    if (pathnameLanguage) {
      const nextPath =
        pathname === `/${pathnameLanguage}`
          ? `/${nextLanguage}`
          : pathname.replace(`/${pathnameLanguage}`, `/${nextLanguage}`);

      router.replace(`${nextPath}${currentHash}`, { scroll: false });
    }
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
    [language, pathname, pathnameLanguage, router]
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
