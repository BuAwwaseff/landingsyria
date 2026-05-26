import type { CSSProperties } from "react";

export const syriaTheme = {
  background: "#05080B",
  backgroundSoft: "#08131A",
  accent: "#2F6D86",
  accentStrong: "#5EA6C2",
  accentText: "#07151C",
  contrast: "#C6844B",
  contrastStrong: "#E4B47B",
  contrastText: "#1C1207",
  textStrong: "#F5F7F4",
  textMuted: "rgba(255,255,255,0.68)",
  line: "rgba(47,109,134,0.45)",
  glow: "rgba(47,109,134,0.18)",
  contrastLine: "rgba(198,132,75,0.42)",
  contrastGlow: "rgba(198,132,75,0.18)",
  surfacePanel:
    "linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.014))",
  surfaceCard:
    "linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.012))",
  shadowPanel: "0 30px 90px rgba(0,0,0,0.3)",
} as const;

export function getSyriaThemeVars(): CSSProperties {
  return {
    "--market-background": syriaTheme.background,
    "--market-background-soft": syriaTheme.backgroundSoft,
    "--market-accent": syriaTheme.accent,
    "--market-accent-strong": syriaTheme.accentStrong,
    "--market-accent-text": syriaTheme.accentText,
    "--market-contrast": syriaTheme.contrast,
    "--market-contrast-strong": syriaTheme.contrastStrong,
    "--market-contrast-text": syriaTheme.contrastText,
    "--market-text-strong": syriaTheme.textStrong,
    "--market-text-muted": syriaTheme.textMuted,
    "--market-line": syriaTheme.line,
    "--market-glow": syriaTheme.glow,
    "--market-contrast-line": syriaTheme.contrastLine,
    "--market-contrast-glow": syriaTheme.contrastGlow,
    "--market-surface-panel": syriaTheme.surfacePanel,
    "--market-surface-card": syriaTheme.surfaceCard,
    "--market-shadow-panel": syriaTheme.shadowPanel,
  } as CSSProperties;
}
