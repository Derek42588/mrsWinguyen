import Typography from "typography";

const typography = new Typography({
  baseFontSize: "2rem",
  baseLineHeight: 1.45,
  headerFontFamily: ["Playfair Display", "serif"],
  bodyFontFamily: ["Playfair Display", "sans-serif"]
});

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;