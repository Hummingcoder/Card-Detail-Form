/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: "Space Grotesk",
      },
      colors: {
        gradientStart: "#B17BFF",
        gradientEnd: "#3D0D77",
        inputError: "#FF3333",
        white: "#FFFFFF",
        lightGrayishViolet: "#cbc7d8",
        darkGrayishViolet: "#847593",
        veryDarkViolet: "#200639",
      },
      fontSize: {
        clamp: "1.2rem",
      },
      screens: {
        mid: "600px",
      },
      boxShadow: {
        "custom-shadow": "0px 0px 30px #1d10272a",
      },
    },
  },
  plugins: [],
};
