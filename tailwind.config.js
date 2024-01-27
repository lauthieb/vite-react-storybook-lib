/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "var(--color-black)",
      white: "var(--color-white)",
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
    },
    borderRadius: {
      none: "var(--radius-none)",
      s: "var(--radius-s)",
      m: "var(--radius-m)",
      l: "var(--radius-l)",
      xl: "var(--radius-xl)",
    },
    spacing: {
      s: "var(--spacing-s)",
      m: "var(--spacing-m)",
      l: "var(--spacing-l)",
      xl: "var(--spacing-xl)",
    },
  },
  plugins: [],
};
