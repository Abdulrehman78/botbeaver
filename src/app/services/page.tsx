import type { Metadata } from "next";
import Threshold from "@/components/sections/Threshold";
import ServicesStory from "@/components/sections/ServicesStory";

export const metadata: Metadata = {
  title: "Services — AI SDR, Marketing, SEO & AEO",
  description:
    "BotBeaver's AI Sales Development Representative for your website, plus growth services: marketing, SEO, AEO, GEO, funnels, and more. No AI phone agents for now.",
};

export default function ServicesPage() {
  return (
    <>
      <Threshold />
      <ServicesStory />
    </>
  );
}
