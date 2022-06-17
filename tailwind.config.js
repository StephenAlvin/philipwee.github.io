/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter"],
    },
    extend: {
      colors: {
        Tangerine: "#eea25c",
        Orange: "#f08057",
        LightBlue: "#374151",
        Midnight: "#1f2937",
        Onyx: "#111111",
        Grey: "#9ca3af",
        Pearl: "#f2f2f2",
        Abyss: "#011627",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
