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
   fontSize: {
    'nav-heading': '18px',
    'nav-menu-heading': '22px',
    'nav-menu-subheading': '12px',
   },
    extend: {
      spacing:{
        'mobile-nav-icon': '1.875rem',
        'mobile-x-pg-padding': '0.875rem',
        'mobile-y-pg-padding': '0.75rem'
      }
   },
   fontFamily: {
    primary: ['Abril Fatface', 'cursive'],
    secondary: ['Playfair Display', 'serif'],

  },

  },
  variants: {
    transitionProperty: ['translate'],
    extend: {
    },
  },
  plugins: [],
}
