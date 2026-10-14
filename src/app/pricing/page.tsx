import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CAL_BOOKING_URL } from "@/lib/siteContent";

export const metadata: Metadata = {
  title: "Book a meeting",
  description:
    "Book a BotBeaver demo on Cal.com. Custom quotes after a scoped meeting — no public plan cards.",
  robots: { index: false, follow: true },
};

/** Pricing is retired — send visitors straight to Cal.com booking. */
export default function PricingPage() {
  redirect(CAL_BOOKING_URL);
}
