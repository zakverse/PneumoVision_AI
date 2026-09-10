/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet 3 Warna Utama Wajib PneumoVision
        navy: {
          DEFAULT: '#12344D', // Deep Navy
          dark: '#0B2233',
          light: '#1B4769',
          surface: '#183F5D',
          border: '#245377',
          subtle: '#2E6389',
        },
        teal: {
          DEFAULT: '#18B8A6', // Medical Teal
          dark: '#118A7D',
          hover: '#149E8E',
          active: '#0F766E',
          light: '#CCFBF1',
          soft: '#E6FAF8',
        },
        mint: {
          DEFAULT: '#E8F7F5', // Ice Mint
          light: '#F4FBFA',
          soft: '#D5F2EE',
          dark: '#C0EBE5',
          border: '#B0E2DC',
        },
        slate: {
          850: '#152336',
          900: '#0F1A28',
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
        'clay-sm': '0 4px 0 #B0E2DC, 0 8px 16px -4px rgba(18,52,77,0.06), inset 0 2px 0 rgba(255,255,255,0.9)',
        'clay-card': '0 8px 0 #B0E2DC, 0 16px 28px -6px rgba(18,52,77,0.08), inset 0 2px 0 rgba(255,255,255,0.95)',
        'clay-lg': '0 10px 0 #99D5CE, 0 20px 30px -8px rgba(18,52,77,0.12), inset 0 3px 0 rgba(255,255,255,0.9)',
        'clay-btn-teal': '0 5px 0 #118A7D, 0 10px 18px -4px rgba(24,184,166,0.35), inset 0 2px 0 rgba(255,255,255,0.4)',
        'clay-btn-navy': '0 5px 0 #0B2233, 0 10px 18px -4px rgba(18,52,77,0.3), inset 0 2px 0 rgba(255,255,255,0.25)',
        'clay-btn-white': '0 5px 0 #B0E2DC, 0 10px 18px -4px rgba(18,52,77,0.06), inset 0 2px 0 rgba(255,255,255,0.95)',
      }
    },
  },
  plugins: [],
}
