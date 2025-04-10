/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors:{
        navy: "#191f36"
      },
      fontFamily:{
        ff: ["Nunito, sans-serif"]
      },
      boxShadow: {
        share: "0 0 1rem #59b2f4"
      },
      animation: {
        slow: 'bounce 15s infinite'
      }
      
    },
  },
  plugins: [],
}

