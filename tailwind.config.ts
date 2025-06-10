import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0f7f4',
          100: '#dce9e2',
          200: '#b8d3c5',
          300: '#8db8a3',
          400: '#629a82',
          500: '#4a7d67',
          600: '#3a634f',
          700: '#2f4f3f',
          800: '#273f33',
          900: '#1f3329',
          950: '#111e18',
        },
        rose: {
          primary: '#724656',    // Primary foreground     d5a2c3   smaller text color
          secondary: '#ad7d8e',  // Secondary foreground   c08b9e b88497 Header text color for text sections
          bg: '#f1e3e9',        // Primary background      f1e3e9  (alt button)
          bgAlt: '#fff9f9',     // Secondary background    e9d8df f1eaec (background od the card)
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
