module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      transitionDuration: {
        0: "0ms",
      },
    },
    fontFamily: { mono: "Courier New, Courier, monospace" },
  },
  plugins: [],
};
