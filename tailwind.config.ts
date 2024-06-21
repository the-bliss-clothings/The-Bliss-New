import type { Config } from "tailwindcss"

const config = {
  mode:"jit",
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      md: "900px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1680px",
      "4xl": "2200px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        poppins: "poppins",
        questrial: "Questrial",
      },
      colors: {
        primary: "#710280",
        // "primary-light": "#07ae7133",
        "primary-light": "#5C038C",
        // secondaryLightGreen: "#C7F4C2",
        secondaryLightGreen: "#967BB6",
        secondaryLightPurple: "#D7D0FF",
        secondaryLightYellow: "#FDDD8C",
        secondaryLightRed: "#FFBBD7",
        // secondaryGreen: "#0BAB7C",
        secondaryGreen: "#896FBC",
        secondaryRed: "#FC615C",
        "hover-btn-color": "#420264",
        "hover-btn-color2": "#C55FFC",
        "hover-color": "#2d2d39",
        "dark-light": "#393948",
        "purple-haze":"#EFDCF9",
        "main-white": "#ccc",
        "text-color": "#152F37",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundColor: {
        main: "#f5f5f9",
        "dark-main": "#13131A",
        "dark-card": "#1C1C24",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config