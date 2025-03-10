/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        heading: ["var(--font-heading)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
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
          light: "hsl(var(--accent-light))",
          muted: "hsl(var(--accent-muted))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Enhanced warm color palette
        warmPalette: {
          // Light mode
          bgPrimary: "hsl(var(--bg-primary))",      // #FFF8F0 (Warm White)
          bgSecondary: "hsl(var(--bg-secondary))",  // #F5EBE0 (Soft Ivory)
          bgTertiary: "hsl(var(--bg-tertiary))",    // #E8D5C4 (Muted Terracotta)
          bgQuaternary: "hsl(var(--bg-quaternary))", // #D0B49F (Soft Caramel)
          textPrimary: "hsl(var(--text-primary))",   // #433220 (Deep Oak)
          textSecondary: "hsl(var(--text-secondary))", // #6B5744 (Mocha)
          textAccent: "hsl(var(--text-accent))",    // #A06B4E (Terracotta)
          
          // Direct hex values for specific use cases
          dark: {
            bg: "#1B1814",         // Dark wood brown
            bgAlt: "#211D19",      // Slightly lighter brown
            bgHighlight: "#2A251F", // Highlight brown
            text: "#F5EBE0",       // Soft ivory
            textAlt: "#D0B49F",    // Soft caramel
            textMuted: "#9C8979",  // Mocha
          },
          light: {
            bg: "#FFF8F0",         // Warm white
            bgAlt: "#F5EBE0",      // Soft ivory
            bgHighlight: "#E8D5C4", // Muted terracotta
            text: "#433220",       // Deep oak
            textAlt: "#6B5744",    // Mocha
            textMuted: "#9C8979",  // Lighter mocha
          },
          // Shared colors between modes
          primary: "#A06B4E",      // Terracotta
          secondary: "#D0B49F",    // Soft caramel
          accent: "#E8D5C4",       // Muted terracotta
          highlight: "#BB8E78",    // Lighter terracotta
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-in-up": {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slide-in-right": {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        "scale-in": {
          from: { opacity: 0, transform: "scale(0.9)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 0.8, transform: "scale(1.05)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.7s ease-out",
        float: "float 6s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.5s ease-out",
        "gradient": "gradient-shift 8s ease infinite",
        "pulse-slow": "pulse-slow 2s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-subtle': 'linear-gradient(135deg, hsl(var(--primary)/0.8), hsl(var(--secondary)/0.8))',
        'dots-pattern': 'radial-gradient(circle, currentColor 1px, transparent 1px)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'highlighted': '0 0 15px 2px rgba(var(--primary-rgb), 0.15)',
        'glow': '0 0 20px rgba(var(--primary-rgb), 0.3)',
      },
      transitionProperty: {
        'theme': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

