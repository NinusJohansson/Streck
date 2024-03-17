import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cooper: ['COOPER', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
      require("tailwindcss-animate")
],
} satisfies Config;
