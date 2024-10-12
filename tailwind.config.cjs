/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'charcoal': '#1a1a1a',
        'accent-yellow': '#FFD700',
        'accent-green': '#00FF00',
        'accent-orange': '#FFA500',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};