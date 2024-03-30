/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#e9e7e9',
        'background': '#210526',
        'primary': '#ca97d2',
        'secondary': '#71227f',
        'accent': '#edae26',
       },
    },
  },
  plugins: [],
}

