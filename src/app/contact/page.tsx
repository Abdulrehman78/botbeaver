import type { Metadata } from "next";
import CtaContact from "@/components/sections/CtaContact";

export const metadata: Metadata = {
  title: "Book a meeting",
  description:
    "Book a BotBeaver meeting on Cal.com or send a brief. AI sales chatbots and growth services (SEO, AEO, marketing) — live in about 14 days or your setup fee back.",
};

export default function ContactPage() {
  return <CtaContact />;
}
