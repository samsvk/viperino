const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            left: "100%",
          },
          "100%": {
            left: "0",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 4s ease-out forwards",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
        fancy: ["IBM Plex Sans"],
      },
    },
  },
  images: {
    domains: ["i.imgur.com"],
  },
};

module.exports = nextConfig;
