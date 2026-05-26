"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] p-1">
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          language === "en"
            ? "bg-[#2F6D86] text-[#07151C]"
            : "text-white/70 hover:text-white"
        }`}
      >
        EN
      </button>

      <button
        type="button"
        onClick={() => setLanguage("ar")}
        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] transition ${
          language === "ar"
            ? "bg-[#2F6D86] text-[#07151C]"
            : "text-white/70 hover:text-white"
        }`}
      >
        AR
      </button>
    </div>
  );
}