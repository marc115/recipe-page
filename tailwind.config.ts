import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'rose-white': 'hsl(330, 100%, 98%)',
        'eggshell': 'hsl(30, 54%, 90%)',
        'dark-charcoal': 'hsl(24, 5%, 18%)',
        'dark-raspberry': 'hsl(332, 51%, 32%)',
        'nutmeg': 'hsl(14, 45%, 36%)'
      },
      fontFamily: {
        'young-serif': 'var(--font-serif)'
      }
    },
  },
  plugins: [],
};
export default config;
