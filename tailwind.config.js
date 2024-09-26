import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    /* Sizes */
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
      xs: "var(--spacing-xs)",
      sm: "var(--spacing-sm)",
      md: "var(--spacing-md)",
      lg: "var(--spacing-lg)"
    },
    borderWidth: {
      xs: "var(--border-width-xs)",
      sm: "var(--border-width-sm)",
      md: "var(--border-width-md)",
      lg: "var(--border-width-lg)"
    },
    /* Typography */
    fontSize: {
      sm: "var(--font-size-sm)",
      md: "var(--font-size-md)",
      lg: "var(--font-size-lg)"
    },
    fontFamily: {
      sans: "var(--font-family-sans)"
    },
    lineHeight: {
      sm: "var(--line-height-sm)",
      md: "var(--line-height-md)",
      lg: "var(--line-height-lg)"
    },
    extend: {
      /* Colors */
      colors: {
        surface: {
          primary: {
            default: colors.blue[500],
            hover: colors.blue[400],
            disabled: colors.blue[100],
          },
          secondary: {
            default: colors.zinc[50],
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
            hover: colors.zinc[100],
            disabled: colors.zinc[400],
          },
        },
        border: {
          primary: {
            default: colors.blue[500],
            hover: colors.blue[400],
            disabled: colors.blue[300],
          },
          secondary: {
            default: colors.zinc[200],
            hover: colors.zinc[900],
            disabled: colors.zinc[300],
          },
        },
        icons: {
          "on-primary": {
            default: colors.blue[50],
            hover: colors.blue[100],
            disabled: colors.blue[300],
          },
          "on-secondary": {
            default: colors.zinc[900],
            hover: colors.zinc[50],
            disabled: colors.zinc[400],
          },
        }
      },
    },
  },
  plugins: [],
};
