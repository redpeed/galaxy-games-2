import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'chakra-petch': ['var(--font-chakra-petch)', 'sans-serif'],
    },
    extend: {
      colors: {
        purple: "var(--purple)",
        "avatar-border": "#B843FF"
      },
      backgroundImage: {
        "hero-nebula": "url('/hero-nebula-bg.png')",
        "light-up": "linear-gradient(180deg, rgba(255, 255, 255, 0) 42.5%, #FFFFFF 100%)",
        "purple-gradient-down": "linear-gradient(180deg, var(--purple) 0%, rgba(171, 0, 255, 0) 100%)",
      },
      fontSize: {
        20: '20px',
        32: '32px',
        50: '50px',
      },
      spacing: {
        15: "15px",
        30: "30px",
        50: "50px",
      },
      zIndex: {
        99: "99",
      }
    },
  },
  plugins: [],
} satisfies Config;
