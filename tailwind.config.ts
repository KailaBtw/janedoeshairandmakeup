import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f7f9f8',    // Very light sage
          100: '#eef2f0',   // Light sage
          200: '#dde5e1',   // Soft sage
          300: '#bcc9c2',   // Medium light sage
          400: '#8fa396',   // Medium sage
          500: '#6b7c73',   // Base sage
          600: '#55665c',   // Dark sage
          700: '#45514a',   // Darker sage
          800: '#37403a',   // Very dark sage
          900: '#2a312c',   // Almost black sage
          950: '#1a1f1c',   // Black sage
        },
        rose: {
          primary: '#8b5a6b',    // Muted rose - "book a consultation" button
          secondary: '#a67b8a',  // Soft rose - headers and accents
          bg: '#faf7f8',        // Very light rose background
          bgAlt: '#f5f0f2',     // Light rose background for cards
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
