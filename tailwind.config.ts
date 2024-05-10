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
        primary: "#3F72AF",
        primaryLight: "#ecf2f8",
        primaryDark: "#3d6da9",
        gray: "#767676",
        lightGray: "#e6e6e6",
        darkGray: "#1a1a1a",
      },
      boxShadow: {
        sm: "0px 8px 24px rgba(149, 157, 165, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
