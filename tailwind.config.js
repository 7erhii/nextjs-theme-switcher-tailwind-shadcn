/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          buttonBg: "#FFB703",
          buttonBorder: "#FB8500",
          h1Text: "#023047",
        },
        dark: {
          buttonBg: "#8ECae6",
          buttonBorder: "#FF5A36",
          h1Text: "#219EBC",
        },
      },
    },
  },
  plugins: [],
};
