/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e9f2ef',
          300: '#d2f34c',
          400: '#9fb448',
          500: '#31795a',
          700: '#254135',
        },
        secondary: {
          100: '#f5f5f5',
          500: '#c4c4c4',
          900: '#0f1620',
        },
      },
      fontFamily: {
        'eb-garamond': ['EB Garamond', 'serif'],
        gordita: ['Gordita Regular', 'sans-serif'],
      },
      content: {
        'category-icon': 'url("./assets/category-icon.svg")',
        'jobi-icon': 'url("./assets/jobi-icon.svg")',
        'header-art': 'url("./assets/header-art.svg")',
        'banner-art': 'url("./assets/banner-art.svg")',
        'banner-art-2': 'url("./assets/banner-art-2.svg")',
        'job-categories-art': 'url("./assets/job-categories-art.svg")',
        'job-categories-art-2': 'url("./assets/job-categories-art-2.svg")',
      },
      borderRadius: {
        '4xl': '60px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
