/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#FF07AD",
        backgroundColor: "#b7bca9",
        lightText: "#403f3f",
      },
      fontFamily: {
        sans: [
          "Poppins",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: ["Termina Demi", "Poppins", "system-ui", "sans-serif"],
        logo: ["Cedarville Cursive", "cursive"],
      },
      screens: {
        sm: "400px",
        sx: "375px",
      },
    },
  },
  plugins: [],
};
