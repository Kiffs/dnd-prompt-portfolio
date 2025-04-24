module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

@keyframes neonPulse {
  0%, 100% {
    text-shadow:
      0 0 4px #0ff,
      0 0 8px #0ff,
      0 0 12px #0ff,
      0 0 16px #0ff;
  }
  50% {
    text-shadow:
      0 0 2px #0ff,
      0 0 4px #0ff,
      0 0 6px #0ff,
      0 0 8px #0ff;
  }
}
