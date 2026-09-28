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
        /* Wood amber CTAs — distinct from ArQonnect orange-on-charcoal */
        accent: "#C47A2E",
        "accent-dim": "#A86424",
        "accent-pale": "#FBF0E4",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        "text-dim": "rgb(var(--text-dim-rgb) / <alpha-value>)",
        "text-dimmer": "rgb(var(--text-dimmer-rgb) / <alpha-value>)",
        line: "var(--line)",
        /* Dam teal surfaces (token name kept for existing class usage) */
        sapphire: "#1E5C63",
        "sapphire-deep": "#123C42",
        circuit: "#2D8F7B",
        birch: "#F7F9F8",
        ink: "#14201C",
        slate: "#3D4F49",
        "slate-dark": "#2A3A35",
      },
      borderRadius: {
        DEFAULT: "8px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "system-ui", "sans-serif"],
        display: ["'DM Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
