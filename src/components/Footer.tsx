import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sapphire-deep text-white">
      <div className="bb-hero-glow pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="dam-grid dam-grid--fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="site-wrap site-section relative z-10">
        <div className="grid min-w-0 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/logo.png"
                alt="BotBeaver"
                width={32}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="font-display text-base tracking-tight text-white">
                <span className="font-bold">Bot</span>
                <span className="font-normal">Beaver</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-[#8FA3C4]">
              We design, build, and maintain AI chat agents — so your website
              answers questions, books meetings, and qualifies leads while you
              sleep.
            </p>
          </div>

          <div>
            <h5 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-circuit">
              Products
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/services#chatbot" className="text-sm text-[#8FA3C4] no-underline hover:text-white">
                AI Sales Development Representative
              </Link>
              <Link href="/services#phone" className="text-sm text-[#8FA3C4] no-underline hover:text-white">
                AI Phone Receptionist
              </Link>
              <Link href="/services#outbound" className="text-sm text-[#8FA3C4] no-underline hover:text-white">
                Outbound prospecting &amp; outreach
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-circuit">
              Get started
            </h5>
            <p className="mt-4 text-sm leading-relaxed text-[#8FA3C4]">
              Live in 14 days or your setup fee back.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center rounded-sm bg-accent px-[18px] py-2.5 text-[14px] font-semibold text-white no-underline hover:bg-accent-dim"
            >
              Book a demo
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8FA3C4]">
            © 2026 BotBeaver LLC
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8FA3C4]">
            Builds conversations that work
          </span>
        </div>
      </div>
    </footer>
  );
}
