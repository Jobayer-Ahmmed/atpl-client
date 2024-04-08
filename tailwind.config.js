/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        btnColor: "#ff6347",
        hoverColor: "#ff4500",
        textColor: "#454444"
        
 
      },
      spacing: {
        myMargin: "80px",
        titleMargin: "30px",
      },
      fontSize: {
        largeFont: "38px",
        mediumFont: "30px",
      },


      fontFamily: {
        myCour: "Courgette",
        rochester: "Rochester"
      }




    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}


