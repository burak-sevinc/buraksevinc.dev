/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      ...colors,
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        RobotoMono: ["Roboto Mono", "monospace"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography")
  ],
};
