import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECF4FE",
        primary: "#D3E5F8",
        secondary: "#A3BDED",
        tertiary: "#E2E1DF",
        cream: "#FBF1E5",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in forwards',
        'fade-in-delay-1': 'fadeIn 1s 0.5s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: '0' },
          "100%": { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
