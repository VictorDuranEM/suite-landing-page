/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#172339",
        darkGray: "#49566D",
        cream: "#F3EDE7",
        light: "#FAF8F6",
        purple: "#A060FF",
        lightPurple: "#A060FF",
        orange: "#FFA84E"
      },
    },
  },
  plugins: [],
}