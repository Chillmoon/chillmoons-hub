/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "fade-in-delay": "fadeIn 1.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-in-out",
        "bounce-in": "bounceIn 0.8s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceIn: {
          "0%, 100%": { transform: "scale(0.9)", opacity: "0.8" },
          "50%": { transform: "scale(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};
