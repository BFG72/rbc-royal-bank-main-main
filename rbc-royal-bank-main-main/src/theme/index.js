import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#FFFFFF",
    200: "#000000",
  },
  accent: {
    100: "#FAFAFA",
    200: "#B9B9B9",
  },
  neutral: {
    50: "#DADADA",
    100: "#E4E4E4",
    200: "#5A5A5A",
  },
};

const breakpoints = {
  xs: "200px",
  sm: "300px",
  m: "500px",
  md: "700px",
  l: "850px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1920px",
  xxxl: "2560px",
};

const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  main: 600,
  bold: 700,
  black: 800,
  extrabold: 900,
};

const theme = extendTheme({
  colors,
  breakpoints,
  fontWeights,
});

export default theme;
