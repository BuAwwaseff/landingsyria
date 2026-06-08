"use client";

export default function InteractiveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[var(--market-background)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(47,109,134,0.18),transparent_28%),radial-gradient(circle_at_12%_18%,rgba(47,109,134,0.08),transparent_22%),radial-gradient(circle_at_88%_14%,rgba(255,255,255,0.03),transparent_18%)]" />
      <div className="absolute left-[12%] top-[12%] h-[520px] w-[520px] rounded-full bg-[#2F6D86]/[0.08] blur-[120px]" />
      <div className="absolute right-[8%] top-[18%] h-[420px] w-[420px] rounded-full bg-white/[0.03] blur-[120px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,109,134,0.4),transparent_30%),radial-gradient(circle_at_15%_30%,rgba(47,109,134,0.22),transparent_24%),radial-gradient(circle_at_85%_30%,rgba(47,109,134,0.2),transparent_24%),radial-gradient(circle_at_50%_58%,rgba(47,109,134,0.12),transparent_26%)]" />

      <div className="absolute inset-0 opacity-[0.32] [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="absolute left-1/2 top-[38%] h-[120vh] w-[180vw] -translate-x-1/2 [perspective:1400px]">
        <div className="absolute inset-x-0 bottom-[-35vh] h-[110vh] origin-center rotate-x-[78deg] bg-[linear-gradient(to_bottom,rgba(94,166,194,0.08)_1px,transparent_1px),linear-gradient(to_right,rgba(94,166,194,0.08)_1px,transparent_1px)] [background-size:100%_32px,32px_100%] opacity-60" />
      </div>

      <div className="absolute left-[8%] top-[58%] h-[260px] w-[260px] rounded-full bg-[#2F6D86]/28 blur-3xl" />
      <div className="absolute right-[6%] top-[42%] h-[300px] w-[300px] rounded-full bg-[#2F6D86]/24 blur-3xl" />
      <div className="absolute left-1/2 top-[78%] h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#2F6D86]/20 blur-3xl" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,11,0.02)_0%,rgba(5,8,11,0.1)_40%,rgba(5,8,11,0.34)_78%,rgba(5,8,11,0.6)_100%)]" />
    </div>
  );
}
