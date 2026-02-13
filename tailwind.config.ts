import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'lavender': '#9B59B6',
        'deep-purple': '#4A0E6B',
        'warm-gold': '#F1C40F',
        'soft-pink': '#FFB6C1',
        'lily-green': '#7DCEA0',
        'dark-night': '#0D0221',
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
