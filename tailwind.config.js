/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "#f97316",
        primaryOrangeHover: "#ea580c",
        primaryBlack: "#14141f",
        primaryGrayDark: "#343a40",
        primaryGray: "#6c757d",
      },
      fontFamily: {
        Poppins: '"Poppins", sans-serif',
        Itim: '"Itim", cursive',
      },
    },
  },
  plugins: [],
};
