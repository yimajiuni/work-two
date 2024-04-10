/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brightColor: "#FF07AD",
        backgroundColor: "#b7bca9",
        lightText: "#959595",
      },
      screens: {
        sm: "500px",
        sx: "378px",
      },
    },
  },
  plugins: [],
};
