/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#FF07AD",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
      },
      screens: {
        sm: "400px",
        sx: "375px",
      },
    },
  },
  plugins: [],
};
