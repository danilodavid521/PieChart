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
        brand: {
          "50": "#fdf3f3",
          "100": "#fce7e8",
          "200": "#f9d2d6",
          "300": "#f7bfc2",
          "400": "#eb7d8a",
          "500": "#e05367",
          "600": "#cb3350",
          "700": "#ab2542",
          "800": "#8f223d",
          "900": "#7b203a",
          "950": "#4d0d0a",
        },
        "brand-secondary": {
          "50": "#f5f5f2",
          "100": "#edede7",
          "200": "#d9d8cf",
          "300": "#c1c1b0",
          "400": "#a8a58f",
          "500": "#969279",
          "600": "#89826d",
          "700": "#4e4c3d",
          "800": "#403f34",
          "900": "#38372f",
          "950": "#1d1c16",
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
