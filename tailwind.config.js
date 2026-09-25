/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0E1013",
          card: "#16191E",
          cream: "#FAF8F5",
          soft: "#EFECE6",
          green: "#3E4D40",
          "green-light": "#586B5A",
          terracotta: "#C26D53",
          "terracotta-light": "#D8836A",
          text: "#14171A",
          muted: "#71717A",
          border: "#E2DDD5",
          "border-dark": "#2A2E35",
        }
      },
      fontFamily: {
        sans: ['"Outfit"', '"Inter"', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Syne"', 'sans-serif'],
        editorial: ['"Syne"', 'sans-serif']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
