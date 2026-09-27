/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Moirai brand - refined palette (available as bg-navy, text-gold-alt, etc.)
        navy: '#333595',
        'navy-dark': '#282A7A',
        'navy-light': '#4A4CB8',
        periwinkle: '#5A5CC9',
        'periwinkle-light': '#7A7CD6',
        'periwinkle-lighter': '#9A9DE3',
        lavender: '#CDCDE5',
        'lavender-light': '#E7E8F2',
        
        // Gold/yellow accents
        gold: '#FBB040',
        'gold-bright': '#FBC067',
        'gold-alt': '#FBB143',    // Alternative gold from logo
        'gold-medium': '#FCD396',
        'gold-light': '#FDE4BE',
        cream: '#FEF3E3',
        
        // Semantic aliases
        primary: '#333595',
        'primary-hover': '#282A7A',
        accent: '#FBB143',
        'accent-hover': '#E6A03E',
        background: '#FFFFFF',
        surface: '#F8FAFC',
        text: '#1E293B',
        'text-muted': '#64748B',
        border: '#E2E8F0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      lineHeight: {
        tight: '1.1',
        snug: '1.25',
        normal: '1.5',
        relaxed: '1.7',
      },
      maxWidth: {
        prose: '680px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'count-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in-up': 'fade-in-up 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'count-up': 'count-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}