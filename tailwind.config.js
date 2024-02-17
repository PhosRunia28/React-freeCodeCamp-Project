/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgNav: "#95a5a6",
        bgButtonNav: "#ecf0f1",
        textNav: "#2c3e50",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        kodeMono: ["Kode Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
