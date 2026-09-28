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
    "BotBeaver builds and maintains AI chat and phone agents so US businesses answer questions, qualify leads, and book meetings after hours.",
  openGraph: {
    title: `${SITE.name} | AI lead capture for US teams`,
    description:
      "AI Sales Development Representative for your website and AI Phone Receptionist for inbound calls.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | AI lead capture for US teams`,
    description:
      "AI chat and phone agents built and maintained for US service businesses.",
  },
  alternates: {
    canonical: SITE.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F5F4F1",
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
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
