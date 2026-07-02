import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fursa: {
          navy: "#0F2A43",
          ink: "#0B1F33",
          blue: "#2E6DA4",
          "blue-light": "#5AAAE0",
          teal: "#1C9C8E",
          green: "#4CAF6D",
          mist: "#F6F9FC",
          line: "#E3EBF2",
          muted: "#5B7085",
        },
      },
      fontFamily: {
        arabic: ["var(--font-plex-arabic)", "sans-serif"],
        latin: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(15, 42, 67, 0.06)",
        card: "0 8px 30px rgba(15, 42, 67, 0.08)",
        "card-hover": "0 16px 40px rgba(15, 42, 67, 0.14)",
        glow: "0 0 0 1px rgba(46, 109, 164, 0.08), 0 20px 60px rgba(46, 109, 164, 0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
        xl3: "1.75rem",
      },
      backgroundImage: {
        "fursa-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(46,109,164,0.10) 0%, rgba(246,249,252,0) 70%)",
        "fursa-gradient": "linear-gradient(135deg, #2E6DA4 0%, #1C9C8E 100%)",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "counter-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "counter-rotate-reverse": {
          "0%": { transform: "rotate(-360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.55" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        orbit: "orbit 26s linear infinite",
        "orbit-reverse": "orbit-reverse 32s linear infinite",
        "counter-rotate": "counter-rotate 26s linear infinite",
        "counter-rotate-reverse": "counter-rotate-reverse 32s linear infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out forwards",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
