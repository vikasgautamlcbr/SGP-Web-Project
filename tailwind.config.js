module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#00FFFF"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0, 255, 255, 0.35), 0 0 30px rgba(0, 255, 255, 0.12)"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "80rem"
      }
    }
  },
  plugins: []
};
