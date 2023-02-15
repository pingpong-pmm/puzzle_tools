const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      yellow: colors.yellow,
      teal: colors.teal,
      red: colors.red,
      green: colors.green,
      slate: colors.slate,
      orange: colors.orange,
      gold: colors.gold,
      sidebar: {
        bg: "#EEEAFF",
        dark: "#626d75b5",
        text: "#2c2f33",
        light: "#23272a",
      },
      sidebar2: {
        bg: "#23272a",
        dark: "#2c2f33",
        text: "#626d75b5",
        light: "#99aab5",
      },
      primary: {
        DEFAULT: "#00008B",
        50: "#CDCDFF",
        100: "#AAAAFF",
        200: "#6262FF",
        300: "#1B1BFF",
        400: "#0000D2",
        500: "#00008B",
        600: "#000067",
        700: "#000044",
        800: "#000020",
        900: "#000000",
      },
      secondary: {
        DEFAULT: "#FF6F68",
        50: "#FFF2F2",
        100: "#FFE4E2",
        200: "#FFC7C4",
        300: "#FFA9A5",
        400: "#FF8C87",
        500: "#FF6F68",
        600: "#FF3A30",
        700: "#F70B00",
        800: "#BF0900",
        900: "#870600",
      },
      primCol1: {
        DEFAULT: "#6B49FC",
        50: "#FEFEFF",
        100: "#EEEAFF",
        200: "#CDC1FE",
        300: "#AC99FD",
        400: "#8C71FD",
        500: "#6B49FC",
        600: "#3E12FB",
        700: "#2B03D1",
        800: "#1F039A",
        900: "#140263",
      },
      secCol1: {
        DEFAULT: "#9633A3",
        50: "#fcf8fe",
        100: "#eadcf0",
        200: "#d1b8da",
        300: "#BF73D3",
        400: "#B149C5",
        500: "#9633A3",
        600: "#722678",
        700: "#4C184E",
        800: "#230B22",
        900: "#000000",
      },
      //secCol1: {
      //  DEFAULT: '#DA4DED',
      //  50: '#FDF4FE',
      //  100: '#F9E1FC',
      //  200: '#F1BCF8',
      //  300: '#EA97F4',
      //  400: '#E272F1',
      //  500: '#DA4DED',
      //  600: '#CD17E6',
      //  700: '#9B12AE',
      //  800: '#690C76',
      //  900: '#38063F'
      //}
    },
    extend: {},

    variants: {
      aspectRatio: ["responsive", "hover"],
    },
  },
  plugins: [
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
    // require("tailwind-scrollbar"),
    require('flowbite/plugin')
  ],
}
