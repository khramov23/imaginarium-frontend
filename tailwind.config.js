/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      primary: '#ff3838',
      black: colors.black,
      white: colors.white,
      transparent: colors.transparent,
      red: {
        'light': '#ff4d4d',
        'dark': '#E3000E'
      },
    },
    extend: {},
  },
  plugins: [],
}
