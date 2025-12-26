/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // ReZ Brand Colors (from brand design ideology)
        'rez-green': {
          50: '#E6F9F0',
          100: '#B3ECCE',
          200: '#80DFAD',
          300: '#4DD38B',
          400: '#26C86E',
          500: '#00C06A', // Primary ReZ Green
          600: '#00A85D',
          700: '#008F4F',
          800: '#007642',
          900: '#005C34',
        },
        'rez-teal': {
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#00796B', // Deep Teal
          600: '#00695C',
          700: '#00574B',
          800: '#00453A',
          900: '#003329',
        },
        'rez-gold': {
          DEFAULT: '#FFC857', // Sun Gold
          light: '#FFD67B',
          dark: '#E6B34F',
        },
        'rez-navy': {
          DEFAULT: '#0B2240', // Midnight Navy
          light: '#1A3A5F',
          dark: '#051121',
        },
        'rez-gray': {
          DEFAULT: '#9AA7B2', // Cool Gray
          50: '#F7FAFC',
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
          900: '#171923',
        },
        // Semantic Colors
        'rez-success': '#2ECC71',
        'rez-warning': '#FF9F1C',
        'rez-error': '#E74C3C',
        'rez-info': '#00796B',

        // Dark mode backgrounds (for backward compatibility)
        'bg-primary': '#000000',
        'bg-secondary': '#1C1C1E',
        'bg-card': '#2C2C2E',
        'bg-elevated': '#3A3A3C',

        // Dark mode color scale
        'dark': {
          DEFAULT: '#000000',
          50: '#F7F7F7',
          100: '#E3E3E3',
          200: '#C8C8C8',
          300: '#A4A4A4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#1A1A1A',
          900: '#0A0A0A',
        },
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display': ['32px', { lineHeight: '40px', letterSpacing: '-0.5px', fontWeight: '800' }],
        'h1': ['28px', { lineHeight: '36px', letterSpacing: '-0.4px', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '32px', letterSpacing: '-0.3px', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '28px', letterSpacing: '-0.2px', fontWeight: '600' }],
        'h4': ['18px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '24px', letterSpacing: '0', fontWeight: '400' }],
        'body': ['14px', { lineHeight: '20px', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['12px', { lineHeight: '16px', letterSpacing: '0', fontWeight: '400' }],
        'caption': ['11px', { lineHeight: '14px', letterSpacing: '0.2px', fontWeight: '500' }],
        'button': ['14px', { lineHeight: '20px', letterSpacing: '0.5px', fontWeight: '600' }],
        'price': ['24px', { lineHeight: '32px', letterSpacing: '0', fontWeight: '800' }],
        'price-lg': ['32px', { lineHeight: '40px', letterSpacing: '0', fontWeight: '800' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '12px',
        'base': '16px',
        'lg': '20px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '40px',
        '4xl': '48px',
        '5xl': '64px',
      },
      borderRadius: {
        'rez-sm': '8px',
        'rez-md': '12px',
        'rez-lg': '16px',
        'rez-xl': '20px',
        'rez-2xl': '24px',
      },
      boxShadow: {
        'rez-subtle': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'rez-card': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'rez-modal': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'rez-green': '0 4px 12px rgba(0, 192, 106, 0.15)',
        'rez-card-light': '0 4px 12px rgba(0, 192, 106, 0.1)',
      },
      animation: {
        'shimmer': 'shimmer 1.5s infinite',
        'fade-in': 'fadeIn 0.25s ease-in',
        'slide-up': 'slideUp 0.35s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
}
