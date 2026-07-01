/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a0a0a',
        secondary: '#140608',
        surface: '#1a0a0e',
        'surface-light': '#2a1018',
        'dark-red': '#6b1220',
        'dark-red-deep': '#4a0a12',
        accent: '#ffc107',
        'accent-light': '#ffd54f',
        'accent-dark': '#e6a800',
        emerald: {
          glow: '#10b981',
        },
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(139, 0, 0, 0.35), transparent), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(255, 193, 7, 0.08), transparent)',
        'card-gradient': 'linear-gradient(135deg, rgba(26, 10, 14, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
        'accent-gradient': 'linear-gradient(135deg, #ffc107 0%, #ffd54f 50%, #e6a800 100%)',
        'red-gradient': 'linear-gradient(180deg, #1a0a0e 0%, #0a0a0a 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 193, 7, 0.2)',
        'glow-lg': '0 0 60px rgba(255, 193, 7, 0.3)',
        'red-glow': '0 0 40px rgba(107, 18, 32, 0.5)',
        card: '0 4px 24px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.7), 0 0 24px rgba(255, 193, 7, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
