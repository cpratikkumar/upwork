/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundClip: {
        text: 'text',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'], // Define the custom font
      },
      keyframes: {
        moveHorizontal: {
          '0%': { transform: 'skewX(-2deg)' },  // Starts skewed
          '25%': { transform: 'skewX(0deg)' },   // Smooth transition to normal
          '50%': { transform: 'skewX(2deg)' },   // Skew to the other side
          '75%': { transform: 'skewX(0deg)' },   // Return to normal
          '100%': { transform: 'skewX(-2deg)' }, // Return to starting state for loop
        },
      },
      animation: {
        moveHorizontal: 'moveHorizontal 3s ease-in-out infinite',
      },
      screens: {
        'sm': '275px',
        // => @media (min-width: 375px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1073px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
}
