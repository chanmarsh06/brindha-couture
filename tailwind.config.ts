import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1A130E',
        'brand-bronze': '#7B5A2D',
        'brand-gold': '#D4AF37',
        'brand-lightgold': '#E8C88A',
        'brand-cream': '#F5EAD6',
        'accent-green': '#0FA678',
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(15,10,8,0.35)',
        'soft-lg': '0 12px 40px rgba(15,10,8,0.4)',
        'glow': '0 0 20px rgba(212,175,55,0.3)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        serif: ['Georgia', 'Garamond', 'serif'],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, var(--gradient-start) 10%, rgba(123,90,45,0.25) 40%, var(--gradient-end) 100%)',
        'gradient-accent': 'linear-gradient(135deg, var(--brand-gold) 0%, var(--accent-green) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
