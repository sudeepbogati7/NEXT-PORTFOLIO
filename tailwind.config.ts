import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily: {
        'black-ops-one': ['"Black Ops One"', 'sans-serif'],
        'concert-one': ['"Concert One"', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
        'pacifico': ['Pacifico', 'cursive'],
        'petrona': ['Petrona', 'serif'],
        'playfair-display': ['"Playfair Display"', 'serif'],
        'press-start-2p': ['"Press Start 2P"', 'monospace'],
        'russo-one': ['"Russo One"', 'sans-serif'],
        'sorts-mill-goudy': ['"Sorts Mill Goudy"', 'serif'],
        'rowdies': ['"Rowdies"', 'sans-serif'],
        'merienda' : ['"Merienda"', 'cursive;']

      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 2s linear infinite',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'usm':'300px',
      'sm': '640px',
      'md': '747px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [addVariablesForColors],
};
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;
