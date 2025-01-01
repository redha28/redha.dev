/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D1C47", // Warna primary
        secondary: "#F3E8F6", // Warna secondary
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
