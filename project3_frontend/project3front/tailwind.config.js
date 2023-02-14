/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'w95-bg': "url('https://user-images.githubusercontent.com/53712896/218520734-d44f9a89-9e2d-4db2-8afd-15f783cc258f.png')"
      },
      fontFamily: {
        win95: ['WIN95'],
        win95bold: ['WIN95-BOLD']
      }
    },
  },
  plugins: [],
}
