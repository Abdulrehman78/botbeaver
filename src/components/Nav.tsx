"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "@/components/BrandLogo";
import { NAV_LINKS } from "@/lib/siteContent";

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const contactActive = isActivePath(pathname, "/contact");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <div
        className={`border-b border-white/10 bg-sapphire text-white transition-shadow duration-200 ${
          scrolled
            ? "shadow-[0_8px_28px_rgba(18,60,66,0.45)] backdrop-blur-md bg-sapphire/95"
            : "shadow-none"
        }`}
      >
        <div className="site-wrap grid h-14 grid-cols-[1fr_auto] items-center gap-3 sm:h-16 lg:grid-cols-[auto_1fr_auto]">
          <Link
            href="/"
            className="flex min-w-0 max-w-[70%] items-center no-underline sm:max-w-none"
            aria-label="BotBeaver home"
          >
            <BrandLogo size="nav" onDark priority />
          </Link>

          <nav className="hidden min-w-0 lg:flex lg:justify-center" aria-label="Main navigation">
            <ul className="flex flex-wrap items-center justify-center gap-0.5">
              {NAV_LINKS.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <li key={l.href} className="shrink-0">
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative whitespace-nowrap rounded-md px-3 py-2 text-[13px] font-medium tracking-wide no-underline transition-colors ${
                        active ? "text-white" : "text-white/75 hover:text-white"
                      }`}
                    >
                      {l.label}
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
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
              className={`hidden items-center whitespace-nowrap rounded-md px-[18px] py-2 text-[14px] font-semibold text-white no-underline transition-colors sm:inline-flex ${
                contactActive ? "bg-accent-dim" : "bg-accent hover:bg-accent-dim"
              }`}
            >
              Book a demo
            </Link>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/30 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="bb-mobile-nav"
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

      {menuOpen && (
        <div
          id="bb-mobile-nav"
          className="max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-b border-line bg-white lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="site-wrap py-4">
            <ul className="flex flex-col">
              {NAV_LINKS.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-md px-3 py-3 text-sm font-medium no-underline transition-colors ${
                        active ? "bg-sapphire text-white" : "text-text hover:bg-birch"
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
              className="mt-4 flex w-full items-center justify-center rounded-md bg-accent px-5 py-3 text-[15px] font-semibold text-white no-underline transition-colors hover:bg-accent-dim"
              onClick={() => setMenuOpen(false)}
            >
              Book a demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
