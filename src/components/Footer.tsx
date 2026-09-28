import Link from "next/link";
import Image from "next/image";
import { LEGAL_LINKS } from "@/lib/legalContent";
import { PRODUCT_LINKS, SITE } from "@/lib/siteContent";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sapphire-deep text-white">
      <div className="bb-hero-glow pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div className="dam-grid dam-grid--fade pointer-events-none absolute inset-0" aria-hidden />
      <div className="site-wrap site-section relative z-10">
        <div className="grid min-w-0 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 no-underline">
              <Image
                src="/logo.png"
                alt={SITE.name}
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
              {SITE.footerBlurb}
            </p>
            <p className="mt-4 text-sm text-[#8FA3C4]">
              <a
                href={`mailto:${SITE.email}`}
                className="text-[#8FA3C4] no-underline hover:text-white"
              >
                {SITE.email}
              </a>
            </p>
          </div>

          <div>
            <h5 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-circuit">
              Products
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              {PRODUCT_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#8FA3C4] no-underline hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-circuit">
              Company
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              <Link href="/process" className="text-sm text-[#8FA3C4] no-underline hover:text-white">
                How it works
              </Link>
              <Link href="/pricing" className="text-sm text-[#8FA3C4] no-underline hover:text-white">
                Pricing
              </Link>
              <Link href="/faq" className="text-sm text-[#8FA3C4] no-underline hover:text-white">
                FAQ
              </Link>
              <Link href="/contact" className="text-sm text-[#8FA3C4] no-underline hover:text-white">
                Book a demo
              </Link>
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-circuit">
              Legal
            </h5>
            <div className="mt-4 flex flex-col gap-2.5">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#8FA3C4] no-underline hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8FA3C4]">
            © {new Date().getFullYear()} {SITE.legalName} · {SITE.location}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8FA3C4]">
            {SITE.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
