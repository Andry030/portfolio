import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50:  '#faf8f5',
          100: '#f2ede6',
          200: '#e4d9cc',
          300: '#cebba8',
          400: '#b49680',
          500: '#9e7a62',
          600: '#8a6450',
          700: '#725243',
          800: '#5e453a',
          900: '#4f3b32',
          950: '#2a1e1a',
        },
        rust: {
          DEFAULT: '#c2622d',
          light:   '#e07a45',
          dark:    '#9a4a20',
          subtle:  'rgba(194,98,45,0.10)',
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s ease forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'pulse-dot': 'pulseDot 2s infinite',
        'blink':     'blink 1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
        blink: {
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
