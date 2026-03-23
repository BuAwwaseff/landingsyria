export default function SectionDivider() {
  return (
    <div className="relative mt-5 hidden md:block">
      <div className="relative h-14">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#FFC100]/8 via-[#FFC100]/35 to-[#FFC100]/8 shadow-[0_0_18px_rgba(255,193,0,0.14)]" />

        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFC100]/35 bg-[#FFC100]/12 shadow-[0_0_22px_rgba(255,193,0,0.16)] backdrop-blur-sm" />

        <div className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFC100]/22 bg-[#FFC100]/14" />
      </div>
    </div>
  );
}