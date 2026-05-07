/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#060B18',
        deep: '#0F1B35',
        signal: '#00D4AA',
        neural: '#6C5CE7',
        data: '#0984E3',
        pulse: '#00CEFF',
        error: '#FF6B6B',
        warning: '#FECA57',
      },
      fontFamily: {
        geist: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
