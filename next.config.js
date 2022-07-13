const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  theme: {
    extend: {
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
