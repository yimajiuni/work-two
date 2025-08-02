import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'inter': ['var(--font-inter)', 'sans-serif'],
        'bodoni': ['var(--font-bodoni)', 'serif'],
        'finches': ['var(--font-finches)', 'serif'],
        'century-gothic': ['var(--font-century-gothic)', 'sans-serif'],
        'century-gothic-thin': ['var(--font-century-gothic-thin)', 'sans-serif'],
        'times-new-roman': ['Times New Roman', 'Times', 'serif'],
        'times-new-roman-italic': ['Times New Roman', 'Times', 'serif'],
      },
      fontSize: {
        'xs': ['8pt', { lineHeight: '1.4' }],
        'xxs': ['7pt', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
};
export default config;
