import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '2500px',
      },
      height:{
        15: "3.75rem"
      },
      colors: {
        "orange": "#ff6b4f",
        "orange-light": "#f5917e",
      },
      backgroundImage: {
        hero: "url('https://cdn.hauntedspace.io/galaxy-games/generic%20clips_BG_Static.webp')",
        web3: "url('https://cdn.hauntedspace.io/galaxy-games/space1.webp')",
        'game-one': "url('https://cdn.hauntedspace.io/galaxy-games/space4.1_PNG.webp')",
        'game-two': "url('https://cdn.hauntedspace.io/galaxy-games/multiplayer_BG_PNG.webp')",
        'game-three': "url('https://cdn.hauntedspace.io/galaxy-games/arcade_PNG.webp')",
        'galaxy-games': "url('https://cdn.hauntedspace.io/galaxy-games/space3_website_PNG.webp')",
        roadmap: "url('https://cdn.hauntedspace.io/galaxy-games/striscia_Roadmap.webp')",
      },
      backgroundColor: {
        primary: '#01001e',
      },
      backgroundPosition: {
        'bottom-custom': 'center 90%', // Adjust '80%' to your desired value
      },
      fontFamily: {
        exo: ['var(--font-exo)', 'sans-serif'],
        'exo-bold': ['var(--font-exo)', 'sans-serif'],
        'exo-extraBold': ['var(--exo)', 'sans-serif'],
        'exo-semiBold': ['var(--exo)', 'sans-serif'],
        'exo-medium': ['var(--exo)', 'sans-serif'],
        'chakra-medium': ['ChakraPetch', 'sans-serif'],
        'exo-regular': ['var(--exo)', 'sans-serif'],
        'myriad-pro': ['var(--font-myriad-pro)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
