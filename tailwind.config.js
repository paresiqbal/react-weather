/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#252429",
        "weather-secondary": "#231f2d",
        "weather-tertiary": "#211a32"
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screen: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
