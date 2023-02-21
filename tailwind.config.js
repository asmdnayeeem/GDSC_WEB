/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    screens:{
      'md': '610px',
      'sm': {'max': '480px'},
    },
  },
  plugins: [],
}