/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate: {
        5: "-5deg",
      },
      fontFamily: {
        poppins: ["Poppins, serif"],
        rubik: ["Rubik, serif"],
        inter: ["Inter, serif"],
      },
   
     
    },
  },
  plugins: [],
};
