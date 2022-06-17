/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "712px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        veryDarkBlue: "#000033",
        darkBlue: "#172c65",
        lightBlue: "#878fad",
        accent: "#1563d8",
        glideOrange: "rgba(249, 174, 2, .5)",
        paycliqBlue: "rgba(44, 70, 206, .5)",
        wallieGray: "rgba(51, 51, 51, .5)"
      },
      fontFamily: {
        poppins: ["Poppins", "Helvetica Neue"]
      }
    },
  },
  plugins: [],
}
