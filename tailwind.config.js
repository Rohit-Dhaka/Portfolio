/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
     
      fontFamily: {
        poppins: ["Poppins, serif"],  
        Preahvihear :["Preahvihear, sans-serif" ]                        
      },
      container:{
        center:true,
        padding:'12px',        
      },
      maxWidth:{
        custom:'1140px'
      },
      boxShadow: {
        'custom-light': '0px 5px 15px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0px 10px 30px rgba(0, 0, 0, 0.3)',
        // 'glow': '0px 0px 10px rgba(0, 255, 255, 0.8)', // Glowing effect
        'glow': '0px 0px 15px 1px #763CAC', // Glowing effect
        'neon': '0px 0px 20px 3px #763CAC', // Neon pink effect
      },
     
   
     
    },
  },
  plugins: [],
};
