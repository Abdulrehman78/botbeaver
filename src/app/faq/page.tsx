import type { Metadata } from "next";
import FaqPageClient from "@/components/FaqPageClient";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers about BotBeaver AI chat and phone agents, go-live timing, healthcare and law scoping, recording consent, and outbound rules.",
};

export default function FaqPage() {
  return <FaqPageClient />;
}
