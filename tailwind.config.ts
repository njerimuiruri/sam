import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep, trustworthy navy — the primary brand blue
        navy: {
          DEFAULT: "#12294d",
          50: "#f2f5fa",
          100: "#e2e9f4",
          200: "#c4d2e8",
          300: "#9ab2d6",
          400: "#6a8abd",
          500: "#456aa3",
          600: "#345187",
          700: "#2b426d",
          800: "#1c2f4f",
          900: "#12294d",
          950: "#0b1a33",
        },
        // Brighter accent blue for links, buttons, highlights
        accent: {
          DEFAULT: "#2f6fed",
          light: "#5b8ef2",
          dark: "#1f4fbf",
        },
        // Subtle gold for fine lines and flourishes
        gold: "#c9a24b",
        cream: "#f8fafc",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
