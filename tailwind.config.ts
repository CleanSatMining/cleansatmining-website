/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs: "390px",
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      // Ajoutez vos breakpoints personnalisés ici
      "3xl": "1920px",
    },
    extend: {
      colors: {
        brand: {
          700: "#152E0A",
          600: "#459420",
          500: "#B5CD30",
          400: "#B5CD30",
          200: "#FFF500",
        },
        grey: {
          900: "#111111",
          800: "#1D1D1B",
          700: "#262626",
          600: "#333333",
          500: "#444444",
          400: "#666666",
          300: "#BDBDBD",
          200: "#E0E1E4",
          100: "#EFEFEF",
          50: "#F5F5F5",
        },
        light: {
          primary: "#333333",
          secondary: "#BDBDBD",
        },
        dark: {
          primary: "#1D1D1B",
          secondary: "#262626",
        },
        transparent: "transparent",
        current: "currentColor",
        green: "#B5CD30",
        "light-green": "#E9F2B9",
        yellow: "#FFD542",
        white: colors.white,
        black: colors.black,
        red: {
          500: "#FC4F4F",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        title: ["var(--font-cairo)", ...defaultTheme.fontFamily.sans],
        inter: ["var(--font-poppins)", "sans-serif"],
        "uncut-sans": ["var(--font-cairo)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.01em" }],
        "3xl": ["1.875rem", { lineHeight: "1.333", letterSpacing: "-0.01em" }],
        "4xl": ["2.25rem", { lineHeight: "1.277", letterSpacing: "-0.01em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "6xl": ["3.75rem", { lineHeight: "1.166", letterSpacing: "-0.01em" }],
        "7xl": ["5rem", { lineHeight: "1", letterSpacing: "-0.01em" }],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
