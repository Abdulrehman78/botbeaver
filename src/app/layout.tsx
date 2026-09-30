import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieNotice from "@/components/CookieNotice";
import { SITE } from "@/lib/siteContent";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | AI lead capture for US teams`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "BotBeaver builds and maintains AI chat agents and growth services (SEO, AEO, marketing) so US businesses answer leads and get found online.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png" }],
    shortcut: ["/icon.png"],
  },
  openGraph: {
    title: `${SITE.name} | AI lead capture for US teams`,
    description:
      "AI Sales Development Representative for your website, plus marketing, SEO, and AEO growth services.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    images: [{ url: "/logo.png", alt: SITE.name }],
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | AI lead capture for US teams`,
    description:
      "AI chat agents and growth services built and maintained for US service businesses.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: SITE.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F7F9F8",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Source+Sans+3:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png?v=2" />
      </head>
      <body className="relative bg-bg text-text">
        <Nav />
        {children}
        <Footer />
        <CookieNotice />
      </body>
    </html>
  );
}
