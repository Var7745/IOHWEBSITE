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
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['"IBM Plex Sans"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'corporate': 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
        '300': '300ms',
        '500': '500ms',
        '600': '600ms',
      },
      colors: {
        primary: {
          DEFAULT: '#174C35', // Primary Deep Green
          hover: '#123C2A',
          light: '#EBF2EE',
        },
        secondary: {
          DEFAULT: '#397A4B', // Secondary Green
          hover: '#2E633C',
          light: '#F0F6F2',
        },
        accent: {
          DEFAULT: '#C49A50', // Accent Gold
          hover: '#B08842',
          light: '#FAF6ED',
        },
        surface: {
          main: '#F7F8F4',    // Main Background
          card: '#FFFFFF',    // Card Background
          subtle: '#F0F3EE',  // Subtle Off-White / Gray-Green
        },
        content: {
          main: '#202820',    // Main Text
          secondary: '#68736B', // Secondary Text
          muted: '#8C978F',   // Muted Text
        },
        line: {
          DEFAULT: '#E1E7DF', // Standard Border
          subtle: '#EAEFE9',
          strong: '#C8D3C5',
        },
        // Backwards compatibility mappings for smooth migration
        corporate: {
          primary: '#174C35',
          secondary: '#397A4B',
          accent: '#C49A50',
          charcoal: '#202820',
          muted: '#68736B',
          bg: '#F7F8F4',
        },
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(32, 40, 32, 0.04)',
        'sm': '0 2px 4px 0 rgba(32, 40, 32, 0.05)',
        'md': '0 4px 12px -2px rgba(32, 40, 32, 0.06), 0 2px 6px -2px rgba(32, 40, 32, 0.04)',
        'lg': '0 12px 24px -4px rgba(32, 40, 32, 0.08), 0 4px 8px -2px rgba(32, 40, 32, 0.03)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 400ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'fade-up': 'fadeUp 600ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'slide-down': 'slideDown 400ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
    },
  },
  plugins: [],
}
