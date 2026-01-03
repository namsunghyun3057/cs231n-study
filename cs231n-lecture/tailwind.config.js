/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // src 폴더 내의 모든 JS, TS, JSX, TSX, MDX 파일을 감시합니다.
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
  require('@tailwindcss/typography'),
],
};