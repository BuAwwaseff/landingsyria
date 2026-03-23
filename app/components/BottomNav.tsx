"use client";

import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[18px] border border-white/40 backdrop-blur">
          <div className="grid grid-cols-2">
            <Link
              href="/"
              className="flex min-h-[48px] items-center justify-center border-r bg-transparent px- text-center text-sm font-semibold uppercase tracking-[0.08em] text-white/88 transition-all duration-200 hover:bg-[#d2a000]/90 hover:text-black hover:shadow-[0_0_24px_rgba(210,160,0,0.22)]"
            >
              About Us
            </Link>

            <Link
              href="/ourpartner"
              className="flex min-h-[48px] items-center justify-center bg-transparent px-2 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white/88 transition-all duration-200 hover:bg-[#d2a000]/90 hover:text-black hover:shadow-[0_0_24px_rgba(210,160,0,0.22)]"
            >
              Become Our Partner
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}