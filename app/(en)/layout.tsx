import type { ReactNode } from "react";
import RootShell from "../components/RootShell";
import "../globals.css";

export default function EnglishLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <RootShell initialLanguage="en">{children}</RootShell>
    </html>
  );
}
