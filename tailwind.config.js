
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        latitude: {
          black: '#000000',
          white: '#FFFFFF',
          dark: '#0a0000',
          red: '#ff1a1a',
          blue: '#0080C6',
          teal: '#4ADEDE',
          solana: '#14F195',
          purple: '#9945FF',
          menuDark: '#0F172A',
          vst: '#1a1a1a',
          dim: '#222222'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cursive: ['"Mr Dafoe"', 'cursive'],
        mono: ['"JetBrains Mono"', 'monospace'],
        syncopate: ['Syncopate', 'sans-serif']
      }
    }
  },
  plugins: [],
}
