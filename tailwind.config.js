/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "playfair-display": ["Playfair Display", "serif"],
        "libre-franklin": ["Libre Franklin", "sans-serif"],
        "plus-jakarta": ["Plus Jakarta Sans", "sans-serif"],
        "sf-pro": ["-apple-system", "BlinkMacSystemFont", "SF Pro", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    require('lightswind/plugin'),],
};
