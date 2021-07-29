module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#2F80ED",
        blue: {
          100: "#DAE4FD",
          200: "#56CCF2",
          300: "#2F80ED"
        },
        grey: {
          100: "#F2F2F2",
          200: "#E0E0E0",
          300: "#BDBDBD",
          600: "#828282",
          700: "#4F4F4F"
        },
        purple: {
          100: "#EBDCF9",
          200: "#9B51E0"
        },
        green: {
          100: "#D3EADD",
          200: "#6FCF97",
          300: "#219653"
        },
        orange: {
          100: "rgba(242, 153, 74, 0.2)",
          200: "#F2994A"
        },
        yellow: {
          100: "#FCF4DB",
          200: "#F2C94C"
        },
        red: {
          500: "#EB5757"
        },

        dark: "#333333",
        mask: "rgba(0,0,0,0.1)"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
