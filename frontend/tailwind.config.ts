import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          light: '#1A5490',
          DEFAULT: '#003366',
          main: '#003366',
          dark: '#001F3F',
        },
        secondary: {
          light: '#66BB6A',
          DEFAULT: '#2E7D32',
          main: '#2E7D32',
          dark: '#1B5E20',
        },
        accent: {
          DEFAULT: '#FFA726',
          main: '#FFA726',
        },
        // Semantic Colors
        success: {
          DEFAULT: '#4CAF50',
          light: '#81C784',
          dark: '#388E3C',
        },
        error: {
          DEFAULT: '#EF5350',
          light: '#E57373',
          dark: '#D32F2F',
        },
        warning: {
          DEFAULT: '#FFA726',
          light: '#FFB74D',
          dark: '#F57C00',
        },
        info: {
          DEFAULT: '#42A5F5',
          light: '#64B5F6',
          dark: '#1976D2',
        },
        // Text Colors
        text: {
          primary: '#212121',
          secondary: '#757575',
          disabled: '#BDBDBD',
          inverse: '#FFFFFF',
        },
        // Background Colors
        background: {
          paper: '#FFFFFF',
          default: '#F5F5F5',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
        DEFAULT: '12px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'full': '9999px',
      },
      spacing: {
        // 8px grid system
        '0.5': '4px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '2.5': '20px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 8px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'lg': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'xl': '0 12px 32px rgba(0, 0, 0, 0.18)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        glass: '10px',
      },
    },
  },
  plugins: [],
} satisfies Config
