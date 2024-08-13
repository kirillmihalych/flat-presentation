/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        primary: "#6366F1",
        secondary: "e0e7ff",
        gray: {
          main: "#f5f5f5",
          cards: "#FAFAFA",
        },

        // "": "f5f5f5",
        bgSecondary: "ffffff",
        textPrimary: "1f2937",
        "text-secondary": "6b7280",
      },
    },
  },
  plugins: [],
};
