/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        5: "-5deg",
      },
      fontFamily: {
        rubik: ["Rubik, serif"],
      },
      boxShadow: {
        "card-hover": ["0px 0px 20px 8px #6022EA"],
        "box-shadow": ["0px 0px 20px 4px #FFFFFF40"],
        "btn-shadow": ["0px 4px 64px 0px #6022EA"],
      },
    },
  },
  plugins: [],
};
