/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily: {
      barlow: ["Barlow Semi Condensed", "Arial", "sans-serif"],
    },
    colors: {
      grey: "rgba(255, 255, 255, 0.29)",
      blue: "#2a45c2",
      "dark-blue": "#565468",
      white: "#fff",
    },
    extend: {
      boxShadow: {
        drop: "0px 3px 3px 0px rgba(0, 0, 0, 0.20)",
        "hover-shadow": "0px 0px 0px 24px rgba(255, 255, 255, 0.05)",
      },
      backgroundImage: {
        path: "url('/img/path.svg')",
        "path-small": "url('/img/path-small.svg')",
        gradient:
          "radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)",
        box: "linear-gradient(0deg, #F3F3F3 0%, #FFF 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
