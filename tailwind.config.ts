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
      colors:{
        "primary": "#FAFAFA",
        "secondary": "#1A1A1A",
        "accent": "#F2F2F2",
        "background": "#1A1A1A",
        "text": "#F2F2F2",
        "muted": "#9E9E9E",
        "border": "#4F4F4F",
        "highlight": "#FFC107",
        "shadow": "#000000",
        "gradient": {
          "start": "#FFC107",
          "end": "#FF5722",
        },
      },
      fontFamily:{
        "sans": ["general-sans", "sans-serif"],
        "serif": ["Instrument Serif", "serif"],
      
      }
      
    },
  },
  plugins: [],
};
export default config;
