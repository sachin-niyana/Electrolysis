/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      sm: "16px",
      xmd: "18px",
      md: "24px",
      lg: "36px",
      xl: "48px",
      "2xl": "60px",
      "3xl": "71px",
    },
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Marcellus: ["Marcellus", "sans-serif"],
      Playfair: ["Playfair Display", "serif"],
    },
    extend: {
      backgroundImage: {
        "header-bg": "url('./assets/images/background/header-bg.png')",
        "btn-bg":
          "linear-gradient(109.13deg, #F498A2 -49.43%, #3A4356 124.85%)",
        "gradient-border":
          "linear-gradient(109.13deg, #F498A2 -49.43%, #3A4356 124.85%)",
      },
      colors: {
        pink: "#f498a2",
        richBlack: "#3A4356",
        grey: "#4E4E4E",
      },

      boxShadow: {
        buttonShadow: "0px 4px 12.5px 0px #F498A28A",
        bookButtonShadow: "0px 5px 18px 0px #0000002E",
        headerShadow: "0px 11px 47px 0px #F498A27D",
        cardShadow: "0px 0px 28.2px 0px #00000026",
      },
    },
  },
  plugins: [],
};
