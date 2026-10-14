"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import {
  GA_MEASUREMENT_ID,
  hasAnalyticsConsent,
  isAnalyticsConfigured,
} from "@/lib/cookieConsent";

/**
 * Consent-gated GA4. Set NEXT_PUBLIC_GA_MEASUREMENT_ID in Netlify.
 */
export default function GoogleAnalytics() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const sync = () => setLoad(hasAnalyticsConsent());
    sync();
    window.addEventListener("bb-consent-change", sync);
    return () => window.removeEventListener("bb-consent-change", sync);
  }, []);

  if (!isAnalyticsConfigured() || !load) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="bb-ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true,
            cookie_flags: 'SameSite=Lax;Secure'
          });
        `}
      </Script>
    </>
  );
}
