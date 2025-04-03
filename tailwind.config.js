module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Biru untuk header
        secondary: '#F3F4F6', // Abu-abu muda untuk background
      },
    },
  },
  plugins: [],
}