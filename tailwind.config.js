/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "340px",
        md: "640px",
        lg: "976px",
        xl: "1440px",
      },
      container: {
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
