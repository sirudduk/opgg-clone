/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
    fontSize: {
      11: '11px',
      12: '12px',
      13: '13px',
      14: '14px',
      15: '15px',
      20: '20px',
    },
    colors: {
      gray: {
        1: '#f2f2f2',
        2: '#EAEAEA',
        3: '#cdd2d2',
        4: '#5e5e5e',
        5: '#666666',
        10: '#e0e3e3',
        20: '#d0d3d4',
        30: '#999999',
        40: '#879292',
        50: '#657070',
        60: '#353a3a',
        70: '#333333',
        80: '#242929',
        90: '#555e5e',
      },
      blue: {
        10: '#1f8ecd',
      },
    },
  },
  plugins: [],
};
