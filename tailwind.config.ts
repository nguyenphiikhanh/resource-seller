/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        dark: {
          900: '#0b0c15', 800: '#151621', 700: '#1f2133',
        },
        brand: {
          cyan: '#00f2ea', purple: '#7f5af0', green: '#2cb67d',
          fb: '#1877F2', yt: '#FF0000', tiktok: '#000000',
        }
      }
    },
  },
  plugins: [],
}

