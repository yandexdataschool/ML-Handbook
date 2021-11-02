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
