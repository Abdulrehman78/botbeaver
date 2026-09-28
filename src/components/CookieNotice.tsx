"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  setAnalyticsConsent,
  shouldShowCookieNotice,
} from "@/lib/cookieConsent";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(shouldShowCookieNotice());
  }, []);

  if (!visible) return null;

  function accept() {
    setAnalyticsConsent("granted");
    setVisible(false);
  }

  function reject() {
    setAnalyticsConsent("denied");
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-white/95 px-4 py-4 shadow-[0_-8px_32px_rgba(18,60,66,0.12)] backdrop-blur-md sm:px-6"
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
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={reject}
            className="rounded-md border border-line bg-birch px-4 py-2.5 text-sm font-semibold text-slate-dark transition-colors hover:border-sapphire/30 hover:text-sapphire"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-sapphire px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sapphire-deep"
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
