/** Lightweight GA4 helpers. No-ops when gtag is not ready. */

type GtagFn = (
  command: "event" | "config" | "js" | "set",
  targetOrAction: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackEvent(
  action: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}

export function trackBookDemo(source: string): void {
  trackEvent("book_demo_click", {
    event_category: "engagement",
    event_label: source,
  });
  trackEvent("generate_lead", {
    event_category: "lead",
    method: "cal_com",
    source,
  });
}

export function trackFormStart(formName: string): void {
  trackEvent("form_start", {
    event_category: "lead",
    form_name: formName,
  });
}

export function trackFormSubmit(formName: string): void {
  trackEvent("generate_lead", {
    event_category: "lead",
    form_name: formName,
  });
}
