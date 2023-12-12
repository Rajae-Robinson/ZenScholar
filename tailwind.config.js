/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        heading: "#091133",
        body: "#6F7CB2",
        accent: "#003BD2",
        btn: "#111B47",
        navItem: "#505F98"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
