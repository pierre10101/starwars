/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'starwars-yellow': '#FFE81F',
      },
      backgroundImage: {
        'stars': "url('~/assets/img/stars-bg.jpg')",
        'darth': "url('~/assets/img/darth-bg.jpeg')"
      }
    },
  },
  plugins: [],
}

