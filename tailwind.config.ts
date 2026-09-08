import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        "bg-alt": "rgb(var(--bg-alt-rgb) / <alpha-value>)",
        panel: "rgb(var(--panel-rgb) / <alpha-value>)",
        accent: "#1F6BFF",
        "accent-dim": "#0F56E6",
        "accent-pale": "#EAF0FF",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        "text-dim": "rgb(var(--text-dim-rgb) / <alpha-value>)",
        "text-dimmer": "rgb(var(--text-dimmer-rgb) / <alpha-value>)",
        line: "var(--line)",
        sapphire: "#0B2447",
        "sapphire-deep": "#071A35",
        circuit: "#14C48A",
        birch: "#F5F4F1",
        ink: "#16181D",
        slate: "#64748B",
        "slate-dark": "#334155",
      },
      borderRadius: {
        DEFAULT: "6px",
        sm: "6px",
        md: "10px",
        lg: "16px",
        xl: "16px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
