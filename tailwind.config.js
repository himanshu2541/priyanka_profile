/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily:{
        "sans" : ["Junge", "cursive"]
      },
      colors: {
        "white-primary": "#FBFFFE",
        "black-primary": "#001514",
        "accent-primary": "#034165"
      },
    },
  },
  plugins: [],
}
