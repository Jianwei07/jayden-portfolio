/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      publicSans: ["Public Sans", "sans-serif"],
    },
    container: {
      extend: {
        colors: {
          black: "#000000",
          wow: "#2D2E32",
          grey: "#808080",
          dark_primary: "#06223F",
          bg_light_primary: "#F5F9FD",
          dark_gray: "#B7C5D3",
          blue: "#147EFB",
          grey_blue: "#B7C4CF",
          F2EAD3: "#F2EAD3",
          dfdfbf: "#DFD7BF",
          "3f2305": "#3F2305",
        },
      },
    },
  },
  plugins: [],
};
