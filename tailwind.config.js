/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      primary: '#C64530',
      secondary: '#F2CFBF',
      tertiary: '#000000',
      success: "#2AC827",
      transparent: 'transparent',
      white: '#FFFFFF',
      black: '#000000',
      gray: "#BFBFBF",
      'background-primary': '#EFDDD0',
      'background-secondary': '#1E1E1E',
      'background-tertiary': '#E0B9AA',
      title: '#1E1E1E',
      subtitle: '#1E1E1E',
      body: '#363636',
      label: '#1E1E1E',
      error: '#C64530',
    },

    fontFamily: {
      primary: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
      secondary: ['Righteous', 'sans-serif'],
      tertiary: ['Oooh Baby', 'sans-serif'],
    },
    fontSize: {
      xs: '.625rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.4rem',
      '2xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.375rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': [
        '6.5rem',
        {
          lineHeight: '5.5rem',
        },
      ],
    },
    extend: {
      maxWidth: {
        button: '18rem',
      },
      minWidth: {
        button: '16rem',
      },
      minHeight: {
        button: '2.75rem',
      },
      letterSpacing: {
        wide: '.0125em',
      },
      padding: {
        'screen-padding': '7.5rem',
        'screen-padding-lg': '6.5rem',
        'screen-padding-md': '3.5rem',
        'screen-padding-sm': '1.5rem',
      },
      margin: {
        'screen-margin': '5.5rem',
        'screen-margin-lg': '3.5rem',
        'screen-margin-md': '2.5rem',
        'screen-margin-sm': '1.5rem',
      },
    },
  },
  plugins: [],
};

