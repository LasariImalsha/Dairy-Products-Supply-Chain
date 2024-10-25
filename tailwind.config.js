/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue_green:"#205b75",
        light_blue:"#a4bce4",
        dark_orange:"#bf8b56",
        light_gray:'#8b97a6',
        cream: "#dad8d5"
      },
      screens:{
        'mob2': '320px',
        'mob': '412px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

// #23799f