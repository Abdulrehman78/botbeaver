import type { Metadata } from "next";
import Why from "@/components/sections/Why";

export const metadata: Metadata = {
  title: "Why BotBeaver",
  description:
    "Why businesses choose BotBeaver to run their AI chatbots, voice agents and automation instead of stitching together separate tools.",
};

export default function WhyPage() {
  return <Why />;
}
