import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F5F1E8',
          line: '#E5E0D8',
          ink: '#111111',
          muted: '#555555',
          accent: '#8B0000',
        },
        editorial: {
          dark: '#0F0F0F',
          line: '#2A2A2A',
          ink: '#EDEDED',
          muted: '#A1A1A1',
          accent: '#E63946',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Merriweather', 'Georgia', 'serif'],
        sans: ['Inter', 'Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        editorial: '0 18px 45px rgba(17, 17, 17, 0.12)',
        'editorial-dark': '0 18px 45px rgba(0, 0, 0, 0.35)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
