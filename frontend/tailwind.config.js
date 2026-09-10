/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet Resmi Baru PneumoVision: Deep Blue (#123B78), Medical Blue (#1677D2), Ice Blue (#EAF4FF)
        navy: {
          DEFAULT: '#123B78', // Deep Blue
          dark: '#0C2750',
          light: '#1B52A6',
          surface: '#15448C',
          border: '#E2E8F0',
          subtle: '#2E6BA9',
        },
        deepblue: {
          DEFAULT: '#123B78',
          dark: '#0C2750',
          light: '#1B52A6',
        },
        teal: {
          DEFAULT: '#1677D2', // Medical Blue (Mapped for compatibility)
          dark: '#1162B0',
          hover: '#136CC0',
          active: '#0E5296',
          light: '#EAF4FF',
          soft: '#EAF4FF', // Ice Blue
        },
        medblue: {
          DEFAULT: '#1677D2', // Medical Blue
          dark: '#1162B0',
          hover: '#136CC0',
          active: '#0E5296',
          soft: '#EAF4FF',
        },
        iceblue: {
          DEFAULT: '#EAF4FF', // Ice Blue
          light: '#F3F8FF',
          dark: '#D0E4FA',
        },
        mint: {
          DEFAULT: '#EAF4FF', // Ice Blue alias
          light: '#F3F8FF',
          soft: '#EAF4FF',
        },
        softwhite: {
          DEFAULT: '#F8FBFF', // Background Utama Bersih
        },
        neutral: {
          border: '#E2E8F0',
          clay: '#D8E2F0',
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
        'clay-sm': '0 4px 0 #D8E2F0, 0 6px 12px -2px rgba(18,59,120,0.05), inset 0 2px 0 rgba(255,255,255,0.95)',
        'clay-card': '0 6px 0 #D8E2F0, 0 14px 24px -4px rgba(18,59,120,0.06), inset 0 2px 0 rgba(255,255,255,0.95)',
        'clay-lg': '0 8px 0 #CAD8EA, 0 18px 28px -6px rgba(18,59,120,0.08), inset 0 3px 0 rgba(255,255,255,0.95)',
        'clay-btn-teal': '0 4px 0 #1162B0, 0 8px 16px -3px rgba(22,119,210,0.35), inset 0 2px 0 rgba(255,255,255,0.35)',
        'clay-btn-blue': '0 4px 0 #1162B0, 0 8px 16px -3px rgba(22,119,210,0.35), inset 0 2px 0 rgba(255,255,255,0.35)',
        'clay-btn-navy': '0 4px 0 #0C2750, 0 8px 16px -3px rgba(18,59,120,0.25), inset 0 2px 0 rgba(255,255,255,0.2)',
        'clay-btn-white': '0 4px 0 #D8E2F0, 0 8px 14px -3px rgba(18,59,120,0.05), inset 0 2px 0 rgba(255,255,255,0.95)',
      }
    },
  },
  plugins: [],
}
