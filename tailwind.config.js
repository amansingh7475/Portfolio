/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { ink: '#080b12', panel: '#10141e', lime: '#d7ff64', fog: '#98a0b3' },
      fontFamily: { sans: ['Manrope', 'sans-serif'], mono: ['DM Mono', 'monospace'] },
      boxShadow: { glow: '0 0 60px rgba(215,255,100,.15)' }
    }
  },
  plugins: []
}
