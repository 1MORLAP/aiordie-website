import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        surface: "var(--bg-secondary)",
        "surface-2": "var(--bg-card)",
        accent: "var(--accent)",
        "accent-dark": "var(--accent-hover)",
        muted: "var(--text-muted)",
        subtle: "var(--border)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
