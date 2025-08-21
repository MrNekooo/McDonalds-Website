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
      'white':'#fff',
      'black':'#323232',
      'banana': '#FFF6A3',
      'gray-light':'#7D7C7C',
      'gray-high':'#504F4F',
      'twitter':'#1DA1F2',
      'facebook':'#1877F2',
      'messager':'#0099FF',
      // Nekooo
    },
    fontFamily:{
      poppins : ["poppins", "sans-serif"]
    }
    
  },
  plugins: [],
}