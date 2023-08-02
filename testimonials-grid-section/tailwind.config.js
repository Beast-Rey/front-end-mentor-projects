/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        Moderateviolet: "hsl(263, 55%, 52%)",
        Verydarkgrayishblue: "hsl(217, 19%, 35%)",
        Verydarkblackishblue: "hsl(219, 29%, 14%)",
        White: "hsl(0, 0%, 100%)",
        Lightgray: "hsl(0, 0%, 81%)",
        Lightgrayishblue: "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        Barlow:'Barlow Semi Condensed'
      }
    },
  },
  plugins: [],
}
