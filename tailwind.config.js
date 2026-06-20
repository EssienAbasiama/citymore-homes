/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — built from #EBE6D4 + #000000
        bone: {
          DEFAULT: "#EBE6D4",
          light: "#F4F1E6",
          dark: "#DBD4BD",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          soft: "#161512",
          warm: "#211F18",
        },
        taupe: {
          DEFAULT: "#A8A290",
          dark: "#6F6A5A",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.32em",
      },
      maxWidth: {
        site: "1320px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "draw-roof": {
          to: { strokeDashoffset: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
