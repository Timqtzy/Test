const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        customRed: "#9f2927",
        customRedHover: "#d62926",
        customYellow: "#f8f2db",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
