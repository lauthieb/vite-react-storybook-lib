import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      none: "var(--radius-none)",
      xs: "var(--radius-xs)",
      sm: "var(--radius-sm)",
      md: "var(--radius-md)",
      lg: "var(--radius-lg)",
      xl: "var(--radius-xl)",
      "2xl": "var(--radius-2xl)",
      "3xl": "var(--radius-3xl)",
      full: "var(--radius-full)",
    },
    spacing: {
      1: "var(--spacing-1)",
      2: "var(--spacing-2)",
      3: "var(--spacing-3)",
      4: "var(--spacing-4)",
      5: "var(--spacing-5)",
      6: "var(--spacing-6)",
      7: "var(--spacing-7)",
      8: "var(--spacing-8)",
      9: "var(--spacing-9)",
      10: "var(--spacing-10)",
      11: "var(--spacing-11)",
      12: "var(--spacing-12)",
    },
    extend: {
      colors: {
        surface: {
          primary: {
            default: colors.blue[500],
            hover: colors.blue[400],
            disabled: colors.blue[100],
          },
          secondary: {
            default: colors.zinc[200],
            hover: colors.zinc[900],
            disabled: colors.zinc[200],
          },
        },
        content: {
          primary: {
            default: colors.white,
            hover: colors.blue[50],
            disabled: colors.blue[300],
          },
          secondary: {
            default: colors.zinc[900],
            hover: colors.zinc[50],
            disabled: colors.zinc[400],
          },
        },
      },
    },
  },
  plugins: [],
};
