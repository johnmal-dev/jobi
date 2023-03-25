/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        // sm: '2rem',
        // md: '2rem',
        // lg: '3rem',
        // xl: '6rem',
        // '2xl': '3rem',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#e9f2ef',
          200: '#f2f9d8',
          300: '#d2f34c',
          400: '#9fb448',
          450: '#81B197',
          500: '#31795a',
          700: '#254135',
        },
        secondary: {
          100: '#f5f5f5',
          400: '#e4e4e4',
          500: '#c4c4c4',
          900: '#0f1620',
        },
      },
      fontFamily: {
        heading: ['EB Garamond', 'serif'],
        body: ['Gordita Regular', 'sans-serif'],
      },
      content: {
        'category-icon': 'url("./assets/category-icon.svg")',
        'jobi-icon': 'url("./assets/jobi-icon.svg")',
        'header-art': 'url("./assets/header-art.svg")',
        'banner-art': 'url("./assets/banner-art.svg")',
        'banner-art-2': 'url("./assets/banner-art-2.svg")',
        'job-categories-art': 'url("./assets/job-categories-art.svg")',
        'job-categories-art-2': 'url("./assets/job-categories-art-2.svg")',
        checkmark: 'url("./assets/checkmark.svg")',
        'account-icon': 'url("./assets/account-icon.svg")',
        'profile-icon': 'url("./assets/profile-icon.svg")',
        'apply-icon': 'url("./assets/apply-icon.svg")',
        arrow: 'url("./assets/arrow.svg")',
        'check-icon': 'url("./assets/check-icon.svg")',
      },
      borderRadius: {
        '4xl': '60px',
      },
      backgroundImage: {
        'cv-section': "url('./assets/cv-bg.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
