import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* 🎨 COLORS — DIGIBILITY BRAND */
      colors: {
        background: "#F8FAFF",
        primary: "#4E5674",
        brand: {
          start: "#6D5CEB",
          end: "#2DA4EF",
        },
      },

      /* ✍️ TYPOGRAPHY */
      fontFamily: {
        heading: ["Unbounded", "system-ui", "sans-serif"],
        body: [
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },

      /* 📐 SHAPE */
      borderRadius: {
        sm: "10px",
        md: "14px",
        lg: "20px",
        pill: "999px",
      },

      /* 🌫 SHADOW */
      boxShadow: {
        soft: "0 12px 40px rgba(45,164,239,0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
