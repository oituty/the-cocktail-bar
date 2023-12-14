/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      white: "var(--white)",
      black: "var(--black)",
      gray: "var(--gray)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      tertiary: "var(--tertiary)",
      "background-primary": "var(--background-primary)",
      title: "var(--title)",
      subtitle: "var(--subtitle)",
      body: "var(--body)",
      label: "var(--label)",
      placeholder: "var(--placeholder)",
      error: "var(--error)",
      success: "var(--success)",
      info: "var(--info)",
      warning: "var(--warning)",
      "scrollbar-track": "var(--scrollbar-track)",
      "scrollbar-thumb": "var(--scrollbar-thumb)",
      "button-shadow-primary": "var(--button-shadow-primary)",
    },

    fontFamily: {
      primary: "OpenSans, Helvetica, Arial, sans-serif",
      secondary: "Righteous, sans-serif",
    },
    fontSize: {
      xs: ".625rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.4rem",
      "2xl": "1.75rem",
      "3xl": "1.875rem",
      "4xl": "2.375rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": [
        "6.5rem",
        {
          lineHeight: "5.5rem",
        },
      ],
    },
    extend: {
      maxWidth: {
        button: "18rem",
      },
      minWidth: {
        button: "16rem",
      },
      minHeight: {
        button: "2.75rem",
      },
      letterSpacing: {
        wide: ".0125em",
      },
      padding: {
        "screen-padding": "7.5rem",
        "screen-padding-lg": "6.5rem",
        "screen-padding-md": "3.5rem",
        "screen-padding-sm": "1.5rem",
      },
      margin: {
        "screen-margin": "5.5rem",
        "screen-margin-lg": "3.5rem",
        "screen-margin-md": "2.5rem",
        "screen-margin-sm": "1.5rem",
      },
    },
  },
  plugins: [],
}

