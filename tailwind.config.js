/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("@plaiceholder/tailwindcss")],
};
