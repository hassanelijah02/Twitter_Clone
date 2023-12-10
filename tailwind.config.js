/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xs: "320px",
      sm: "499px",
      md: "988px",
      lg: "1024px",
      xl: "1265px"
    },

    extend: {
      colors: {
        grey: "#f7f9f9",
        blue: "#1d9bf0",
        white: "#ffffff",
        black: "000000",
        trans: "#eadff5"
      },
      fontFamily: {
        primary: ["Roboto","sans-serif"]
      } 
          
    },
  },
  plugins: [],
}
