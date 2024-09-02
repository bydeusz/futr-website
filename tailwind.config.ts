import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Grotesk', 'sans-serif'],
      },
      colors: {
        'futr-black': '#000000',
        'futr-white': '#ffffff',
        'futr-red': '#EA3B34',
      },
    },
  },
  plugins: [],
};
export default config;
