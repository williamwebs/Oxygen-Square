/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        grotesk: ["var(--font-gotesk)"],
        satoshi: ["var(--font-satoshi)"],
      },
      colors: {
        primary: "#9F71D6",
        bgGray: "#f4f4f6",
        textGray: "343D48",
      },
    },
  },
  plugins: [],
};
