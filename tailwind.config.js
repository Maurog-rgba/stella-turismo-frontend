// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "#006633",
        secondary: "#07ad3e",
        accent: "#ffc302",
        neutral: "#17264f",
        "base-100": "#ffffff",
        "base-content": "#404040",
      },
      borderRadius: {
        lg: "0.75rem",
      },
    },
  },
  plugins: [],
};
