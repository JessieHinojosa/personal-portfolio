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
   boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
   '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
   fontSize: {
    'nav-heading': '18px',
    'nav-menu-heading': '22px',
    'nav-menu-subheading': '12px',
    'hero-heading': '29px',
    'pg-heading': '20px',
    'mobile-lg-button': '14px',
    'mobile-sm': '7px',
    'mobile-paragraph': '8px',
    'mobile-exploring-text': '10px',
    'mobile-button': '9px',
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
        'mobile-triangle-position': '6rem',
        'mobile-lg-button-padding': '.143em',
        'mobile-lg-button-w': '7.563rem',
        'mobile-md-button-w': '4.688rem',
        'mobile-benefit-banner-h': '5.5rem',
        'mobile-benefit-y-padding': '0.4375rem',
        'mobile-infinity-w': '5.375rem',
        'mobile-paragraph-w': '15.125rem',
        'mobile-margin-from-pg-heading': '1.25rem',
        'mobile-bg-square-h': '12.688rem',
        'mobile-bg-square-w': '8rem',
        'mobile-bg-square-top-position': '42.75rem',
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
