import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1E202D',
        desc: '#979ea5',
        heading: '#cdcdd9',
        blue: '#5b7fec',
        "light-blue": 'rgb(13 189 242)',
        yellow: '#FDD700'
      }
    },
  },
  plugins: [],
}
export default config
