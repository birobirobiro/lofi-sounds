/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        text1: 'text1 5s linear 0s infinite',
        text2: 'text2 6s linear 1s infinite',
        text3: 'text3 7s linear 2s infinite',
      },
      keyframes: {
        text1: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'color': 'white',
          },
        },
        text2: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'color': 'white',
          },
        },
        text3: {
          '0%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
          '100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
            'color': 'white',
          },
        },
      },
      colors: {
        'title-1': {
          'start-color': {
            100: '#007CF0',
          },
          'middle-color': {
            100: '#7159c1',
          },
          'end-color': {
            100: '#00DFD8',
          },
        },
        'title-2': {
          'start-color': {
            200: '#7928CA',
          },
          'end-color': {
            200: '#FF0080',
          },
        },
        'title-3': {
          'start-color': {
            300: '#FF4D4D',
          },
          'end-color': {
            300: '#F9CB28',
          },
        }
      }

    },
  },
  plugins: [],
}
