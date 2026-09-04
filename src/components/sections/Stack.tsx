"use client";

import { Section, SectionHeader } from "@/components/ui/PageSection";
import { FadeUp, Stagger, MotionItem } from "@/components/ui/Motion";

const badges = [
  { color: "#C45E28", label: "Enterprise-Grade LLMs" },
  { color: "#C45E28", label: "Carrier-Grade Voice" },
  { color: "#25D366", label: "WhatsApp Business API" },
  { color: "#635BFF", label: "Stripe Billing" },
  { color: "#4285F4", label: "Google Workspace" },
  { color: "#4A154B", label: "Slack & Webhooks" },
  { color: "#C45E28", label: "Cloud-Native Hosting" },
  { color: "#9A4318", label: "Encrypted Data Storage" },
];

export default function Stack() {
  return (
    <Section border id="stack" alt>
      <SectionHeader
        center
        eyebrow="Built On"
        title="Real infrastructure, not duct tape"
        description="BotBeaver agents run on enterprise-grade rails — large language models, carrier-grade messaging, and cloud infrastructure built to stay up when it matters."
        accent="cyan"
      />
      <Stagger className="flex flex-wrap justify-center gap-3">
        {badges.map((b) => (
          <MotionItem key={b.label}>
            <span className="ai-chip-breathe inline-flex items-center gap-2 rounded-sm border border-line bg-panel/60 px-4 py-2.5 text-sm text-text-dim">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: b.color }}
              />
              {b.label}
            </span>
          </MotionItem>
        ))}
      </Stagger>
      <FadeUp className="mt-10">
        <div className="overflow-hidden rounded border-2 border-line border border-line bg-bg/50 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6">
            {badges.map((b) => (
              <span
                key={b.label}
                className="whitespace-nowrap text-sm font-medium text-text-dimmer"
              >
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
