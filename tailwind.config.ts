import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { nextui } = require('@nextui-org/theme')

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    // if you install other Next-UI Components, you can add their style import in the following line like this (input|button|etc...)
    './node_modules/@nextui-org/theme/dist/components/input.js',
    './node_modules/@nextui-org/theme/dist/components/tabs.js',
    './node_modules/@nextui-org/theme/dist/components/progress.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      grey: {
        800: '#1D1D1B',
        600: '#333333',
        400: '#666666',
        300: '#BDBDBD',
        200: '#E0E1E4',
      },
      green: '#B5CD30',
      'light-green': '#E9F2B9',
      blue: '#A1D3FF',
      yellow: '#FFD542',
      white: colors.white,
      black: colors.black,
    },
    fontFamily: {
      sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      title: ['var(--font-cairo)', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      dropShadow: {
        green: '0 0 35px rgba(181, 205, 48, 0.60)',
      },
    },
  },
  plugins: [nextui()],
}
export default config
