/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
