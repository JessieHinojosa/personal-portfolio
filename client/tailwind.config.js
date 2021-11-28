module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    colors: {
   "black": "#363636",
   "grey": "#434343",
   "white": "#f9f9f9"
  },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
