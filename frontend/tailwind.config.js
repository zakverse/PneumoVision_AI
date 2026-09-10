/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet Resmi Bersih: Deep Navy, Medical Teal, Soft White
        navy: {
          DEFAULT: '#12344D', // Deep Navy
          dark: '#0B2233',
          light: '#1B4769',
          surface: '#183F5D',
          border: '#E2E8F0',
          subtle: '#2E6389',
        },
        teal: {
          DEFAULT: '#16B8A6', // Medical Teal
          dark: '#0F9485',
          hover: '#13A090',
          active: '#0D7B6E',
          light: '#CCFBF1',
          soft: '#E8F7F5', // Ice Mint sebagai aksen sekunder
        },
        softwhite: {
          DEFAULT: '#F8FAF9', // Soft White Background
        },
        mint: {
          DEFAULT: '#E8F7F5', // Aksen sekunder terbatas
          light: '#F4FBFA',
          soft: '#D5F2EE',
        },
        neutral: {
          border: '#E2E8F0',
          clay: '#DDE4EC',
        }
      },
      fontFamily: {
        heading: ['Fredoka', 'Quicksand', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'clay-sm': '0 4px 0 #DDE4EC, 0 6px 12px -2px rgba(18,52,77,0.05), inset 0 2px 0 rgba(255,255,255,0.95)',
        'clay-card': '0 6px 0 #DDE4EC, 0 14px 24px -4px rgba(18,52,77,0.06), inset 0 2px 0 rgba(255,255,255,0.95)',
        'clay-lg': '0 8px 0 #D2DCE6, 0 18px 28px -6px rgba(18,52,77,0.08), inset 0 3px 0 rgba(255,255,255,0.95)',
        'clay-btn-teal': '0 4px 0 #0F9485, 0 8px 16px -3px rgba(22,184,166,0.35), inset 0 2px 0 rgba(255,255,255,0.35)',
        'clay-btn-navy': '0 4px 0 #0B2233, 0 8px 16px -3px rgba(18,52,77,0.25), inset 0 2px 0 rgba(255,255,255,0.2)',
        'clay-btn-white': '0 4px 0 #DDE4EC, 0 8px 14px -3px rgba(18,52,77,0.05), inset 0 2px 0 rgba(255,255,255,0.95)',
      }
    },
  },
  plugins: [],
}
