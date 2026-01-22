/** @type {import('tailwindcss').Config} */

import relumeTailwind from "@relume_io/relume-tailwind";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./home/**/*.{js,ts,jsx,tsx}",
    "./portfolio/**/*.{js,ts,jsx,tsx}",
    "./contact/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [relumeTailwind],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        secondary: ['Karla', 'sans-serif'],
      },
    },
  },
};
