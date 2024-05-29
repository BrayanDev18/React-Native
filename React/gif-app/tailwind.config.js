/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "animation": {
        "pulse-slow": "pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)"
      }
    },
  },
  plugins: [],
}

