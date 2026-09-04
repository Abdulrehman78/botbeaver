import type { Metadata } from "next";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Our Process",
  description: "How BotBeaver scopes, builds and deploys your AI workforce.",
};

export default function ProcessPage() {
  return <Process />;
}
