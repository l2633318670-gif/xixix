/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./news/*.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0a1628',
          navy: '#0f2044',
          mid: '#1a3a6b',
          accent: '#e86c1e',
          light: '#f97316',
        },
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
