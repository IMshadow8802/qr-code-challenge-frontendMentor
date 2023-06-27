/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "pale-blue":"hsl(221,100%,96%)",
        "slate-blue":{
          "dark":"hsl(241,81%,54%)",
          "light":"hsl(252,100%,67%)"
        },
        "violet-blue":"hsl(256,72%,46%,1)",
        "dark-gray-blue":"hsl(224,30%,27%)",
        "light-gray":"hsl(212, 45%, 89%)",
        "grayish-blue":"hsl(220, 15%, 55%)",
        "dark-blue":"hsl(218, 44%, 22%)"

      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontWeight: {
        outfitRegular: 400,
        outfitBold: 700,
      },
    },
  },
  plugins: [],
}

