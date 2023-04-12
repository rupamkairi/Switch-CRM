/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}",
    "./node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite"),
    require("flowbite-typography"),
    // require("@tailwindcss/typography"),
    require("@formkit/themes/tailwindcss"),
  ],
};
