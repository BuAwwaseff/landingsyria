"use client";

import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto flex items-center justify-center py-4  border-b border-white/10 backdrop-blur">
        <Link href="/" className="shrink-0">
          <Image
            src="/melbetSyria3.png"
            alt="Logo"
            width={170}
            height={48}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>
      </div>
    </header>
  );
}