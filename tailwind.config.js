/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,html}',
    './entrypoints/popup/*.html',
    './entrypoints/popup/src/**/*.{js,ts,jsx,tsx,html}',
    './entrypoints/popup/*.{js,ts,jsx,tsx,html}',
    './entrypoints/popup/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

