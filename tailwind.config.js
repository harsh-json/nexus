/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700',
      },
      backgroundImage: {
        'stars': "url('/vite.svg')", // Replace with a starry image if available
      },
    },
  },
  plugins: [],
};
