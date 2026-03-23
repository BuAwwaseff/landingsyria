import { DifferenceColumnProps } from "@/lib/types";
export default function DifferenceColumn({
  side,
  intro,
  points,
}: DifferenceColumnProps) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-black/18 p-3.5 sm:p-4">
      <div className="text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#d0a11a]/88">
          {side}
        </div>

        <p className="mx-auto mt-2.5 max-w-[34ch] text-[12px] leading-5 text-white/76 sm:text-[13px]">
          {intro}
        </p>
      </div>

      <div className="mt-5 grid gap-3">
        {points.map((point) => (
          <div
            key={point.title}
            className="rounded-[16px] border border-white/10 bg-black/18 p-3.5 text-center"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#d0a11a]/86">
              {point.title}
            </div>

            <p className="mt-2 text-[11px] leading-5 text-white/72 sm:text-[12px]">
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}