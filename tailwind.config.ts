/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"NHaasGroteskDSPro"', ...defaultTheme.fontFamily.sans],
        serif: ['"GT-Alpina-Standard"', ...defaultTheme.fontFamily.serif]
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '0rem'
      },
      screens: {
        lg: '45rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
