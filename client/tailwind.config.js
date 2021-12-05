module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    colors: {
   "black": "#363636",
   "dark-black": "#000000",
   "grey": "#434343",
   "white": "#f9f9f9",
   "purp": '#E49EFC',
   "baby-blue": '#9DD8EB'
   },
   fontSize: {
    'nav-heading': '18px',
    'nav-menu-heading': '22px',
    'nav-menu-subheading': '12px',
    'pg-heading': '29px',
    'mobile-lg-button': '14px',
   },
   borderRadius: {
    'none': '0',
    'button': '10px',
  },
    extend: {
      spacing:{
        'mobile-nav-icon': '1.875rem',
        'mobile-x-pg-padding': '0.875rem',
        'mobile-y-pg-padding': '0.75rem',
        'mobile-y-margin-from-header': '2.75rem',
        'mobile-y-general-margin': '2.1875rem',
        'mobile-triangle-position': '7.75rem',
        'mobile-lg-button-padding': '.143em',
        'mobile-lg-button-w': '7.563rem',

      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
      }
   },
   fontFamily: {
    primary: ['Abril Fatface', 'cursive'],
    secondary: ['Playfair Display', 'serif'],
    tertiary: [ 'Raleway', 'sans-serif'],

  },

  },
  variants: {
    transitionProperty: ['translate'],
    extend: {
    },
  },
  plugins: [],
}
