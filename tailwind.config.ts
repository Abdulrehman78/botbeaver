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
        "panel-2": "rgb(var(--panel-2-rgb) / <alpha-value>)",
        accent: "#C45E28",
        "accent-dim": "#9A4318",
        violet: "#1E5C56",
        "violet-dim": "#14403C",
        electric: "#0B3D38",
        "electric-2": "#0B3D38",
        cyan: "#0B3D38",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        "text-dim": "rgb(var(--text-dim-rgb) / <alpha-value>)",
        "text-dimmer": "rgb(var(--text-dimmer-rgb) / <alpha-value>)",
        gold: "#2A9B8F",
        "gold-dim": "#1E7A71",
        amber: "#C45E28",
        "on-accent": "#FFFFFF",
        line: "var(--line)",
        scrim: "rgb(var(--scrim-rgb) / <alpha-value>)",
      },
      borderRadius: {
        DEFAULT: "3px",
        lg: "4px",
        xl: "6px",
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "'Helvetica Neue'", "Arial", "system-ui", "sans-serif"],
        display: ["Merriweather", "Georgia", "'Times New Roman'", "serif"],
        mono: ["ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 70% 50% at 22% -10%, rgba(196,94,40,0.16), transparent 60%), radial-gradient(ellipse 60% 45% at 85% 0%, rgba(11,61,56,0.10), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
