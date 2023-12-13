import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-gray': {
          400: '#8795AF',
          500: '#596F78',
        },
        blue: {
          400: '#7BB8F1',
          900: '#17344F',
        },
        pink: {
          300: '#F5B4BB',
          200: '#F7BDCC',
        },
      },
      shadows: {
        sm: '0px 0px 8px 0px rgba(0, 0, 0, 0.10)',
        md: ' 0px 0px 16px 0px rgba(19, 92, 84, 0.15)',
      },
      spacing: {
        4.5: '18px',
        23: '92px',
        27: '108px',
        65: '260px',
      },
      backgroundImage: {
        page: 'url("/images/background.png")',
      },
      borderRadius: {
        lg: '20px',
        large: '32px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
