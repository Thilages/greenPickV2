/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-lg': '1300px', // Custom breakpoint at 1300px
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"], // Set your default sans font family
        // Set your default serif font family
      },
      colors: {
        xprimary: "#4b6542",
        xsecondary: "#7d9872",
        xpale: "#dff8d5",
        xdarkPrim: "#a3af9e",
        xdarkSec: "#6f7a6b",
        xmainLight: "#87a37c",
        xmainVlight: "#a7c39c",
        xmainVVlight: "#c8e5bc"
      }
    },
  },
  plugins: [],
}