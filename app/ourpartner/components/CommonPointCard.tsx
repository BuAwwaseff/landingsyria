import { CommonPointCardProps } from "@/lib/types";

export default function CommonPointCard({
  title,
  text,
}: CommonPointCardProps) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-black/16 p-4 sm:p-5 text-center">
      <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#d0a11a]/88">
        {title}
      </div>

      <p className="mt-2.5 text-[12px] leading-5 text-white/76 sm:text-[13px]">
        {text}
      </p>
    </div>
  );
}