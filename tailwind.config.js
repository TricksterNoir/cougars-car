/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blackBg: "#0B0807",
        brownBg: "#5B5555",
        ctt_btn_Bg: "#3F3431",
        cttBg: "#5F6862",
        prodBg: "#f7f7f2 ",
      },
      fontSize:{
        'h1': '42px',
        'h2': "24px"
      },
    },
  },
  plugins: [],
};
