import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

export const metadata: Metadata = {
  title: {
    default:
      "BotBeaver | AI Automation Agency — AI Chatbots, Voice Agents & Business Automation",
    template: "%s | BotBeaver",
  },
  description:
    "BotBeaver is an AI automation agency building AI chatbots, AI voice agents, business automation, CRM integration and digital transformation for companies across the US, UK, Canada, Australia and Europe.",
  metadataBase: new URL("https://www.arqonnect.com"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#F4F7F4",
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
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700;800;900&family=Source+Sans+3:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="relative bg-bg text-text">
        <Nav />
        {children}
        <Footer />
        <SiteScripts />
      </body>
    </html>
  );
}
