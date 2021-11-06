module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Yandex Sans", "sans-serif"],
        serif: ["Yandex Serif", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontFamily: ["'Yandex Serif', serif"],
            },
            p: {
              marginTop: 0,
              marginBottom: 0,
              paddingTop: "1.25em",
              paddingBottom: "1.25em",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
