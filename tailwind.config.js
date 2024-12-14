/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif'],
      },
      colors: {
        customOrange: 'hsl(26, 100%, 55%)',
        customPaleOrange: 'hsl(25, 100%, 94%)',
        customVeryDarkBlue: 'hsl(220, 13%, 13%)',
        customDarkGrayishBlue: 'hsl(219, 9%, 45%)',
        customLightGrayishBlue: 'hsl(223, 64%, 98%)',
      },

    },
  },
  plugins: [],
}

