/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        palette: {
          100: '#f5f5f5',
          200: '#e9f2ef',
          300: '#c4c4c4',
          500: '#d2f34c',
          600: '#31795a',
          800: '#254135',
          900: '#0f1620',
        },
      },
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        gordita: ['Gordita Regular', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
