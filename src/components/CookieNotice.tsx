"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "bb-cookie-ok";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-line bg-white/95 px-4 py-4 shadow-[0_-8px_32px_rgba(11,36,71,0.12)] backdrop-blur-md sm:px-6"
      role="dialog"
      aria-label="Cookie notice"
    >
      <div className="site-wrap flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-slate-dark">
          We use essential cookies so this site works. Optional analytics load only if enabled and
          you consent. See our{" "}
          <Link href="/legal/cookies" className="font-medium text-accent underline">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/legal/privacy" className="font-medium text-accent underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-sm bg-sapphire px-5 py-2.5 text-sm font-semibold text-white hover:bg-sapphire-deep"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
