/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        clash: ['"Clash Display"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'corporate': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
        '600': '600ms',
        '700': '700ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      colors: {
        corporate: {
          primary: '#0B3D2E',
          secondary: '#22C55E',
          accent: '#F59E0B',
          charcoal: '#1F2937',
          muted: '#64748B',
          bg: '#F8FAF7',
        },
        forest: {
          50: '#f2f8f5',
          100: '#e1efe8',
          200: '#c5ded3',
          300: '#9ec4b5',
          400: '#72a392',
          500: '#518573',
          600: '#3d6b5b',
          700: '#315549',
          800: '#28453c',
          900: '#0b3d2e',
          950: '#06261c',
        },
        sage: {
          50: '#f8faf7',
          100: '#edf5ef',
          200: '#dbe8de',
          300: '#c5d9ca',
        },
        brand: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        navy: {
          800: '#0f172a',
          900: '#0a0f1d',
          950: '#050811',
        },
        cyan: {
          450: '#00d2ff',
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'slow-zoom': 'slowZoom 16s cubic-bezier(0.22, 1, 0.36, 1) infinite alternate',
        'slide-down': 'slideDown 600ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-up': 'fadeUp 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      }
    },
  },
  plugins: [],
}
