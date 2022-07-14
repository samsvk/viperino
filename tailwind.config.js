module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        leftToRight: {
          "0%": { left: "0%" },
          "100%": { left: "-100%" },
        },
      },
      animation: {
        leftToRight: "leftToRight 6s ease forwards",
      },
    },
  },
  plugins: [],
};
