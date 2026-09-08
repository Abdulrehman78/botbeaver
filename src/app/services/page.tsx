import type { Metadata } from "next";
import Threshold from "@/components/sections/Threshold";
import ServicesStory from "@/components/sections/ServicesStory";

export const metadata: Metadata = {
  title: "Products — AI SDR & Phone Receptionist",
  description:
    "BotBeaver's two inbound products: an AI Sales Development Representative for your website, and an AI Phone Receptionist that answers, qualifies, and books — 24/7.",
};

export default function ServicesPage() {
  return (
    <>
      <Threshold />
      <ServicesStory />
    </>
  );
}
