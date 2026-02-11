/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#0d9488',
          muted: '#5eead4',
          subtle: '#f0fdfa',
        },
        ink: {
          DEFAULT: '#1e293b',
          muted: '#64748b',
          subtle: '#94a3b8',
        },
        sidebar: {
          bg: '#1a1a2e',
          text: '#d6d3d1',
          muted: '#78716c',
          active: '#2dd4bf',
          hover: '#292944',
        },
        warm: {
          bg: '#fafaf8',
          card: '#ffffff',
        },
        callout: {
          bg: '#fffbeb',
          border: '#f59e0b',
          text: '#92400e',
          heading: '#b45309',
        },
        code: {
          bg: '#0f172a',
          text: '#e2e8f0',
        },
        web3: {
          DEFAULT: '#8b5cf6',
          bg: '#f5f3ff',
        },
        web2: {
          DEFAULT: '#0ea5e9',
          bg: '#f0f9ff',
        },
        section: {
          1: '#8b5cf6',
          2: '#0d9488',
          3: '#059669',
          4: '#2563eb',
          5: '#d97706',
          6: '#e11d48',
          7: '#ea580c',
          8: '#0891b2',
          9: '#4f46e5',
        },
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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.2s ease-out",
        "slide-in-left": "slide-in-left 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
