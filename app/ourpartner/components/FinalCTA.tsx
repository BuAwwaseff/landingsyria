import Image from "next/image";
import Link from "next/link";

const TELEGRAM_LINKS = [
  {
    label: "Telegram Agent",
    href: "https://t.me/your_agent_link",
  },
  {
    label: "Telegram Partner",
    href: "https://t.me/your_partner_link",
  },
  {
    label: "Telegram Support",
    href: "https://t.me/your_support_link",
  },
];

const WHATSAPP_LINK = {
  label: "WhatsApp Contact",
  href: "https://wa.me/000000000000",
};

function SocialButton({
  href,
  label,
  iconSrc,
  alt,
}: {
  href: string;
  label: string;
  iconSrc: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center justify-center gap-3 rounded-[18px] border border-white/10 bg-black/18 px-4 py-3 text-center transition duration-200 hover:border-[#d0a11a]/30 hover:bg-black/24"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.14))]" />

      <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
        <Image src={iconSrc} alt={alt} width={18} height={18} className="h-[18px] w-[18px] object-contain" />
      </div>

      <span className="relative z-10 text-[12px] font-semibold uppercase tracking-[0.14em] text-white/88">
        {label}
      </span>
    </Link>
  );
}

export default function FinalCTA() {
  return (
    <section className="mt-6">
      <div className="relative rounded-[30px] border border-white/80 bg-black/14 p-2.5 sm:p-3">
        <div className="relative rounded-[24px] border border-white/50 bg-black/10 p-3.5 sm:p-4">
          <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/20 px-4 pb-5 pt-11 sm:px-5 sm:pb-6 sm:pt-12 lg:px-6">
            <div className="pointer-events-none absolute inset-0">
              <svg
                viewBox="0 0 1200 420"
                className="h-full w-full"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter
                    id="final-cta-glow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="3.2" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d="M56 366 V136 Q56 42 150 42 H1050 Q1144 42 1144 136 V366"
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="2.8"
                />

                <path
                  d="M78 366 V142 Q78 62 158 62 H1042 Q1122 62 1122 142 V366"
                  fill="none"
                  stroke="#d0a11a"
                  strokeWidth="2.05"
                  opacity="0.82"
                  filter="url(#final-cta-glow)"
                />

                <line
                  x1="108"
                  y1="366"
                  x2="1092"
                  y2="366"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1.2"
                />
              </svg>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-[-14px] z-20 -translate-x-1/2">
              <div className="rounded-full border border-white/15 bg-black/55 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d0a11a]/90 backdrop-blur-md">
                Get In Touch
              </div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-[21px] font-semibold leading-tight text-white/96 sm:text-[24px]">
                Choose the channel that fits you best
              </h2>

              <p className="mx-auto mt-4 max-w-[760px] text-[12px] leading-6 text-white/78 sm:text-[13px]">
                Reach out directly through Telegram or WhatsApp and continue
                with the path that matches your role best.
              </p>

              <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {TELEGRAM_LINKS.map((item) => (
                  <SocialButton
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    iconSrc="/telegram.png"
                    alt="Telegram"
                  />
                ))}

                <SocialButton
                  href={WHATSAPP_LINK.href}
                  label={WHATSAPP_LINK.label}
                  iconSrc="/whatsapp.png"
                  alt="WhatsApp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}