/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"PPNeueMontreal"', ...defaultTheme.fontFamily.sans]
        // serif: ['"GT-Alpina-Standard"', ...defaultTheme.fontFamily.serif]
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4'
      },
      width: {
        '168': '42rem'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        md: '0rem'
      },
      screens: {
        lg: '42rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
