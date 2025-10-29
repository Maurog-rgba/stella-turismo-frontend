// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // --primary: #006633;
        // --secondary: #07ad3e;
        // --accent: #ffc302;
        // --neutral: #17264f;
        // --base-100: #ffffff;
        // --base-content: #404040;
        primary: "#006633",
        secondary: "#07ad3e",
        accent: "#ffc302",
        neutral: "#17264f",
        base: {
          100: "#ffffff",
          content: "#404040",
        },
      },
    },
  },
  plugins: [],
};
