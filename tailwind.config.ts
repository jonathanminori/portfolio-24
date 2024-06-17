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
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
