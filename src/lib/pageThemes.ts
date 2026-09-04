import type { BannerTheme } from "@/components/ui/InteractiveBackdrop";

export type NavAccent = {
  linkBg: string;
  linkText: string;
  underline: string;
  ctaActive: string;
  ctaDefault: string;
  ctaHover: string;
};

/** Product nav — crimson CTA with a defined gold rule, classic-seal styling */
const productAccent: NavAccent = {
  linkBg: "bg-gold/10",
  linkText: "text-gold",
  underline: "bg-gold/80",
  ctaActive: "bg-[#9A4318] text-[#FFFFFF] ring-2 ring-gold/50 border border-gold/60",
  ctaDefault: "bg-[#C45E28] text-[#FFFFFF] border border-gold/50",
  ctaHover: "hover:bg-[#9A4318] hover:border-gold/80",
};

export const navAccents: Record<BannerTheme, NavAccent> = {
  home: productAccent,
  services: productAccent,
  crm: productAccent,
  cases: productAccent,
  pricing: productAccent,
  enterprise: productAccent,
  resources: productAccent,
  contact: productAccent,
};

export function themeFromPath(pathname: string): BannerTheme {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/crm")) return "crm";
  if (pathname.startsWith("/case-studies")) return "cases";
  if (pathname.startsWith("/pricing")) return "pricing";
  if (pathname.startsWith("/enterprise")) return "enterprise";
  if (pathname.startsWith("/resources")) return "resources";
  if (pathname.startsWith("/contact")) return "contact";
  return "home";
}
