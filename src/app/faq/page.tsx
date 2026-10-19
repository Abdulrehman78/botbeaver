import type { Metadata } from "next";
import FaqPageClient from "@/components/FaqPageClient";
import FaqJsonLd from "@/components/FaqJsonLd";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about BotBeaver AI chat, marketing/SEO/AEO services, go-live timing, healthcare and law scoping, and outbound rules.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd />
      <FaqPageClient />
    </>
  );
}
