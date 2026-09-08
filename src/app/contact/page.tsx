import type { Metadata } from "next";
import CtaContact from "@/components/sections/CtaContact";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Book a BotBeaver demo. We design, build, and maintain AI sales chatbots and phone receptionists — live in 14 days or your setup fee back.",
};

export default function ContactPage() {
  return <CtaContact />;
}
