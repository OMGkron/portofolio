module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sixty: ["var(--font-sixty)"], // FONT SIXTYFOUR
        poppins: ["Sixtyfour"], // kalau memang mau, tapi ini tidak diperlukan
      },
    },
  },
  plugins: [],
};
