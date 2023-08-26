/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      publicSans: ["Public Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "4rem",
      extend: {
        colors: {
          black: "#000000",
          grey: "#808080",
          dark_primary: "#06223F",
          bg_light_primary: "#F5F9FD",
          dark_gray: "#B7C5D3",
        },
        backgroundImage: {
          primaryLinear: "linear-gradient(180deg, #B6CCF5 0.48%, #D5E3F1 100%)",
        },
      },
    },
  },
  plugins: [],
};
