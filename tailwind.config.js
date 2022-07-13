module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        leftToRight: {
          "0%": { left: "100%" },
          "100%": { left: "0%" },
        },
      },
      animation: {
        leftToRight: "leftToRight 6s ease forwards",
      },
    },
  },
  plugins: [],
};
