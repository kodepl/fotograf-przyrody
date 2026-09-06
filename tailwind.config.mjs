import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        moss: "#1a2e1c",
        fog: "#e4ecdf",
        lichen: "#8fae7a",
        dusk: "#c47a3a",
        bark: "#2c2118",
        mist: "#9aab95",
      },
      fontFamily: {
        display: ["Source Serif 4", "Georgia", "serif"],
        sans: ["Sora", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};
