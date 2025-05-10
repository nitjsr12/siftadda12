import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#1a1a1a', // deep dark background
        foreground: '#f5f5f5', // light foreground text
        card: {
          DEFAULT: '#262626',
          foreground: '#e5e5e5',
        },
        popover: {
          DEFAULT: '#2c2c2c',
          foreground: '#e0e0e0',
        },
        primary: {
          DEFAULT: '#c0c0c0', // metallic silver
          foreground: '#1a1a1a',
        },
        secondary: {
          DEFAULT: '#b3b3b3',
          foreground: '#000000',
        },
        muted: {
          DEFAULT: '#333333',
          foreground: '#cccccc',
        },
        accent: {
          DEFAULT: '#8c8c8c',
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ff4d4f',
          foreground: '#ffffff',
        },
        border: '#3d3d3d',
        input: '#2a2a2a',
        ring: '#c0c0c0',
        chart: {
          '1': '#b3b3b3',
          '2': '#c0c0c0',
          '3': '#999999',
          '4': '#737373',
          '5': '#4d4d4d',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
