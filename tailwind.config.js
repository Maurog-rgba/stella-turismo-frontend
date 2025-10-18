// tailwind.config.js
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        neutral: "var(--neutral)",
        "base-100": "var(--base-100)",
        "base-content": "var(--base-content)",
      },
      borderRadius: {
        lg: "0.75rem",
      },
    },
  },
  plugins: [],
};
