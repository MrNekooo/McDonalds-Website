/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'red':'#C90000',
      'yellow':'#FFC300',
      'gray-light':'#7D7C7C',
      'gray-high':'#504F4F',
    },
    fontFamily:{
      poppins : ["poppins", "sans-serif"]
    }
  },
  plugins: [],
}