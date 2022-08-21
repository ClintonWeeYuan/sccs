/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        sccs: {
          primary: "#ebb848",
          secondary: "#f6d860",
          accent: "#e32a33",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
};
