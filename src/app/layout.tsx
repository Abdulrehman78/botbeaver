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
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg" }],
    shortcut: ["/icon.svg"],
  },
  openGraph: {
    title: `${SITE.name} | AI lead capture for US teams`,
    description:
      "AI Sales Development Representative for your website and AI Phone Receptionist for inbound calls.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    images: [{ url: "/logo.svg", width: 64, height: 64, alt: SITE.name }],
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | AI lead capture for US teams`,
    description:
      "AI chat and phone agents built and maintained for US service businesses.",
    images: ["/logo.svg"],
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
        <link rel="icon" href="/icon.svg?v=1" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/logo.svg?v=1" />
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
