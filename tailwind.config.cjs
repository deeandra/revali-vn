/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyUI config
  daisyui: {
    themes: ["pastel", "winter", "dracula", "night", "acid", "cupcake"],
  },
}
