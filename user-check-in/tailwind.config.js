module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "450",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1920px",
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      red: "#FF0000",
      footer: "#f7f7f7",
      header: "#2e5fe8",
      teal: "#fdfbf0",
      white: "#fff",
      blue: "#1FB6FF",
      purple: "#7E5BEF",
      pink: "#FF49DB",
      orange: "#FF7849",
      green: "#13CE66",
      yellow: "#FFC82C",
      "bluish-white": "#F4F6FF",
      "gray-dark": "#273444",
      gray: {
        100: "#F7FAFC",
        500: "#737373 ",
        900: "#1A202C",
      },
      "gray-light": "#D3DCE6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      quicksand: ["Quicksand"],
    },
    borderRadius: {
      none: "0",
      sm: ".125rem",
      DEFAULT: ".25rem",
      md: "0.3rem",
      xl: "0.8rem",
      lg: ".5rem",
      full: "9999px",
      "4xl": "2rem",
    },
    opacity: {
      0: "0",
      20: "0.2",
      40: "0.4",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    extend: {
      spacing: {
        px: "1px",
        0: "0",
        0.5: "0.125rem",
        1: "0.25rem",
        1.5: "0.375rem",
        2: "0.5rem",
        2.5: "0.625rem",
        3: "0.75rem",
        3.5: "0.875rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        11: "2.75rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        28: "7rem",
        32: "8rem",
        36: "9rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        128: "32rem",
        144: "36rem",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  plugins: [],
};