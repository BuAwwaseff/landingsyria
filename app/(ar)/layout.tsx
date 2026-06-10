import type { ReactNode } from "react";
import RootShell from "../components/RootShell";
import "../globals.css";

export default function ArabicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <RootShell initialLanguage="ar">{children}</RootShell>
    </html>
  );
}
