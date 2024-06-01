/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'lora': ['Lora'],
        'barlow': ['Barlow'],
        'public': ['Public Sans'],
        'inter': ['Inter'],
      },

      colors: {
        dark: {
          100: "#23272E"
        },

        RED: {
          _100: "#AF202D"
        },

        MODAL_BACKGROUND: "rgba(0, 0, 0, 0.23)",
      }

    },
  },
  plugins: [],
}