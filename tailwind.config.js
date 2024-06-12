/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        lightCyan: "hsl( 193, 38%, 86% )",
        neonGreen: "hsl( 150, 100%, 66% )",

        // Neutral
        grayishBlue: "hsl( 217, 19%, 38% )",
        darkGrayishBlue: "hsl( 217, 19%, 24% )",
        darkBlue: "hsl( 218, 23%, 16% )"
      },
      fontFamily: {
        manrope: [ "Manrope", "sans-serif" ]
      },
      fontWeight: {
        manropeExtraBold: "800"
      },
    },
    screens: {
      xs: "344px",
      ss: "375px",
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px"
    }
  },
  plugins: [],
};