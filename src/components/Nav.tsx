"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import FlagStripe from "@/components/ui/FlagStripe";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/crm", label: "CRM" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/resources", label: "Resources" },
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const contactActive = isActivePath(pathname, "/contact");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <div className="bg-[#0B3D38] text-white">
        <p className="truncate px-4 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80 sm:text-[11px]">
          Serving businesses across the United States · UK · Canada · Australia · Europe
        </p>
        <div className="site-wrap grid grid-cols-[1fr_auto] items-center gap-3 py-3 lg:grid-cols-[auto_1fr_auto]">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 no-underline">
            <Image
              src="/logo.png"
              alt="BotBeaver"
              width={32}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
            <span className="truncate font-display text-[18px] font-bold tracking-tight text-white">
              BotBeaver
            </span>
          </Link>

          <nav className="hidden min-w-0 lg:flex lg:justify-center" aria-label="Main navigation">
            <ul className="flex flex-wrap items-center justify-center gap-0.5">
              {links.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <li key={l.href} className="shrink-0">
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative whitespace-nowrap px-2 py-2 text-[12px] font-semibold uppercase tracking-wide no-underline xl:px-3 xl:text-[13px] ${
                        active ? "text-white" : "text-white/75 hover:text-white"
                      }`}
                    >
                      {l.label}
                      {active && (
                        <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-[#C45E28] xl:inset-x-3" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-2">
            <Link
              href="/contact"
              aria-current={contactActive ? "page" : undefined}
              className={`hidden items-center whitespace-nowrap px-4 py-2 text-xs font-bold uppercase tracking-wide text-white no-underline sm:inline-flex ${
                contactActive ? "bg-[#9A4318]" : "bg-[#C45E28] hover:bg-[#9A4318]"
              }`}
            >
              Book a Demo
            </Link>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/30 text-white lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <FlagStripe />

      {menuOpen && (
        <div className="max-h-[calc(100dvh-5.75rem)] overflow-y-auto border-b border-line bg-white lg:hidden">
          <nav className="site-wrap py-4" aria-label="Mobile navigation">
            <ul className="flex flex-col">
              {links.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={`block px-3 py-3 text-sm font-semibold no-underline ${
                        active ? "bg-[#0B3D38] text-white" : "text-text hover:bg-[#F4F7F4]"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contact"
              className="mt-4 flex w-full items-center justify-center bg-[#C45E28] px-5 py-3 text-sm font-bold uppercase tracking-wide text-white no-underline"
              onClick={() => setMenuOpen(false)}
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
