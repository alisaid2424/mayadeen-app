/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        primary: "#008062",
      },
      fontFamily: {
        arabic: ["HelveticaNeueLTArabic", "sans-serif"],
      },
    },
  },
  plugins: [],
};
