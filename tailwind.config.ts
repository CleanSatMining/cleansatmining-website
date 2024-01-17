import type { Config } from 'tailwindcss'
const { nextui: nextuiReact } = require('@nextui-org/react')
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
    './node_modules/@nextui-org/theme/dist/components/select.js',
    './node_modules/@nextui-org/theme/dist/components/scroll-shadow.js',
    './node_modules/@nextui-org/theme/dist/components/checkbox.js',
    './node_modules/@nextui-org/theme/dist/components/tabs.js',
    './node_modules/@nextui-org/theme/dist/components/progress.js',
    './node_modules/@nextui-org/theme/dist/components/listbox.js',
    './node_modules/@nextui-org/theme/dist/components/popover.js',
  ],
  theme: {
    colors: {
      light: {
        primary: '#333333',
        secondary: '#BDBDBD',
        // Ajoutez plus de couleurs si nécessaire
      },
      dark: {
        primary: '#1D1D1B',
        secondary: '#262626',
        // Ajoutez plus de couleurs si nécessaire
      },
      transparent: 'transparent',
      current: 'currentColor',
      grey: {
        800: '#1D1D1B',
        700: '#262626',
        600: '#333333',
        400: '#666666',
        300: '#BDBDBD',
        200: '#E0E1E4',
        100: '#EFEFEF',
      },
      green: '#B5CD30',
      'light-green': '#E9F2B9',
      blue: '#A1D3FF',
      yellow: '#FFD542',
      white: colors.white,
      black: colors.black,
      red: {
        500: '#FC4F4F',
      },
    },
    palette: {
      primary: '#333333',
    },
    fontFamily: {
      sans: ['var(--font-poppins)', ...defaultTheme.fontFamily.sans],
      title: ['var(--font-cairo)', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      dropShadow: {
        green: '0 0 35px rgba(181, 205, 48, 0.60)',
      },
      spacing: {
        '-300': '-300px',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#FFFFFF', // or DEFAULT
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#FFFFFF',
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: '#000000', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#FFFFFF',
            },
          },
          // ... rest of the colors
        },
        mytheme: {
          // custom theme
          extend: 'dark',
          colors: {
            primary: {
              DEFAULT: '#BEF264',
              foreground: '#000000',
            },
            focus: '#BEF264',
          },
        },
      },
    }),
    nextuiReact({
      themes: {
        light: {
          colors: {
            background: '#FFFFFF', // or DEFAULT
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#333333',
            },
            secondary: '#b5cd30',
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: '#000000', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              //... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#333333',
            },
            secondary: '#b5cd30',
          },
          // ... rest of the colors
        },
        mytheme: {
          // custom theme
          extend: 'dark',
          colors: {
            primary: {
              DEFAULT: '#BEF264',
              foreground: '#000000',
            },
            focus: '#BEF264',
          },
        },
      },
    }),
  ],
}
export default config
