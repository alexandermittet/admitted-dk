/** @type {import('tailwindcss').Config} */

import relumeTailwind from "@relume_io/relume-tailwind";
import { colors } from "./src/colors.config.js";

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
      colors: {
        background: {
          primary: colors.background.primary,
          secondary: colors.background.secondary,
          dark: colors.background.dark,
          navbar: colors.background.navbar,
          footer: colors.background.footer,
        },
        text: {
          primary: colors.text.primary,
          secondary: colors.text.secondary,
          black: colors.text.black,
          alternative: colors.text.alternative,
          muted: colors.text.muted,
        },
        border: {
          primary: colors.border.primary,
          white: colors.border.white,
        },
        accent: {
          primary: colors.accent.primary,
          "primary-hover": colors.accent.primaryHover,
        },
        // Direct access for hover states
        "accent-primary": colors.accent.primary,
        "accent-primary-hover": colors.accent.primaryHover,
        button: {
          primary: colors.button.primary,
          "primary-hover": colors.button.primaryHover,
          contact: colors.button.contact,
          "contact-hover": colors.button.contactHover,
          learn: colors.button.learn,
          "learn-hover": colors.button.learnHover,
        },
        // Direct access for button hover states
        "button-primary": colors.button.primary,
        "button-primary-hover": colors.button.primaryHover,
        "button-contact": colors.button.contact,
        "button-contact-hover": colors.button.contactHover,
        "button-learn": colors.button.learn,
        "button-learn-hover": colors.button.learnHover,
        tag: {
          gray: colors.tag.gray,
        },
      },
    },
  },
};
