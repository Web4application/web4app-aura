module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          deep: "#0a0a1a",
          accent: "#4e2fdd",
          glow: "#7d4aff"
        }
      },
      backgroundImage: {
        "aura-gradient":
          "linear-gradient(135deg, #0a0a1a 0%, #1b103d 50%, #4e2fdd 100%)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.8 },
          "50%": { opacity: 1 }
        }
      }
    }
  },
  plugins: []
};
