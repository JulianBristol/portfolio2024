import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '320px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'transparent': 'transparent',
      'white':'#FFFFFF',
      'ghost':'#fefefc',
      'ash': '#141414',
      'poppy': '#AA0606',
      'marigold':'#ED9212',
      'morocco': '#DCA75E',
      'creme': '#FBF7ED',
      'smoke': '#C8C8C6',
      'untouched': '#1C201D',
      'hope': {
        100: '#D0D9C9',
        300: '#90AF99',
        500: '#246036',
      },
      'shadow': {
        25: '#00000040',
        50: '#00000080',
        75: '#000000bf',
        100: '#000000',
      },
    },
    extend: {
    }
  },
  plugins: [],
};
export default config;
