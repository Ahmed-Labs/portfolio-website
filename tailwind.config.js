/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          500: "#F0E7DB",
          400: "#F4EDE4",
          300: "#F5F0E8",
        },
        dark: {
          500: "#202023",
          300: "#313134",
          200: "525252",
        },
        indigo: {
          500: "#6B9080",
        },
      },
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
