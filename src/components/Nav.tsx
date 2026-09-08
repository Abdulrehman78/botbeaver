"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Products" },
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Wordmark({ className = "text-white" }: { className?: string }) {
  return (
    <span className={`truncate font-display text-[18px] tracking-tight ${className}`}>
      <span className="font-bold">Bot</span>
      <span className="font-normal">Beaver</span>
    </span>
  );
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
      <div className="border-b border-white/10 bg-sapphire text-white">
        <div className="site-wrap grid grid-cols-[1fr_auto] items-center gap-3 py-3 lg:grid-cols-[auto_1fr_auto]">
          <Link href="/" className="flex min-w-0 items-center gap-2.5 no-underline">
            <Image
              src="/logo.png"
              alt="BotBeaver"
              width={32}
              height={32}
              className="h-8 w-auto brightness-0 invert"
            />
            <Wordmark />
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
                      className={`relative whitespace-nowrap px-3 py-2 text-[13px] font-medium tracking-wide no-underline ${
                        active ? "text-white" : "text-white/75 hover:text-white"
                      }`}
                    >
                      {l.label}
                      {active && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-accent" />
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
              className={`hidden items-center whitespace-nowrap rounded-sm px-[18px] py-2 text-[14px] font-semibold text-white no-underline sm:inline-flex ${
                contactActive ? "bg-accent-dim" : "bg-accent hover:bg-accent-dim"
              }`}
            >
              Book a demo
            </Link>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/30 text-white lg:hidden"
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
                      className={`block rounded-sm px-3 py-3 text-sm font-medium no-underline ${
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
              className="mt-4 flex w-full items-center justify-center rounded-sm bg-accent px-5 py-3 text-[15px] font-semibold text-white no-underline hover:bg-accent-dim"
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
