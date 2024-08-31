import { StyleSheet, TextStyle } from "react-native";

interface Spec {
  fontSize: number;
  lineHeight: number;
  fontWeight:
    | "normal"
    | "bold"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
  letterSpacing: number;
}

type FontTextInterface = TextStyle & Spec;

// h1 styles definitions
const h1_bold: FontTextInterface = {
  fontSize: 48,
  lineHeight: 58,
  fontWeight: "700",
  letterSpacing: -2.5, // Adjusted letter spacing for bold
};

const h1_medium: FontTextInterface = {
  fontSize: 48,
  lineHeight: 52,
  fontWeight: "600",
  letterSpacing: -2.5, // Adjusted letter spacing for medium
};

const h1_regular: FontTextInterface = {
  fontSize: 48,
  lineHeight: 48,
  fontWeight: "normal",
  letterSpacing: -2.5, // Adjusted letter spacing for regular
};

const h1_light: FontTextInterface = {
  fontSize: 48,
  lineHeight: 46,
  fontWeight: "300",
  letterSpacing: -2.5, // Adjusted letter spacing for light
};

const h1Styles = StyleSheet.create({
  h1_bold,
  h1_medium,
  h1_regular,
  h1_light,
});

//h2 Styles definition
const h2_bold: FontTextInterface = {
  fontSize: 40,
  lineHeight: 48,
  fontWeight: "700", // Adjusted to '700' for bold
  letterSpacing: -1.5,
};

const h2_medium: FontTextInterface = {
  fontSize: 40,
  lineHeight: 48,
  fontWeight: "600",
  letterSpacing: -1.5,
};

const h2_regular: FontTextInterface = {
  fontSize: 40,
  lineHeight: 48,
  fontWeight: "400",
  letterSpacing: -1.5,
};

const h2_light: FontTextInterface = {
  fontSize: 40,
  lineHeight: 48,
  fontWeight: "300",
  letterSpacing: -1.5,
};

const h2Styles = StyleSheet.create({
  h2_bold,
  h2_medium,
  h2_regular,
  h2_light,
});

//h3 styles definitions
const h3_bold: FontTextInterface = {
  fontSize: 33,
  lineHeight: 40,
  fontWeight: "700", // Adjusted to '700' for bold
  letterSpacing: -1,
};

const h3_medium: FontTextInterface = {
  fontSize: 33,
  lineHeight: 40,
  fontWeight: "600",
  letterSpacing: -1,
};

const h3_regular: FontTextInterface = {
  fontSize: 33,
  lineHeight: 40,
  fontWeight: "400",
  letterSpacing: -1,
};

const h3_light: FontTextInterface = {
  fontSize: 33,
  lineHeight: 40,
  fontWeight: "300",
  letterSpacing: -1,
};

const h3Styles = StyleSheet.create({
  h3_bold,
  h3_medium,
  h3_regular,
  h3_light,
});

// style definitions for h4
const h4_bold: FontTextInterface = {
  fontSize: 27,
  lineHeight: 32,
  fontWeight: "700", // Adjusted to '700' for bold
  letterSpacing: -0.5, // Adjusted to -0.5 for letter spacing
};

const h4_medium: FontTextInterface = {
  fontSize: 27,
  lineHeight: 32,
  fontWeight: "600",
  letterSpacing: -0.5, // Adjusted to -0.5 for letter spacing
};

const h4_regular: FontTextInterface = {
  fontSize: 27,
  lineHeight: 32,
  fontWeight: "400",
  letterSpacing: -0.5, // Adjusted to -0.5 for letter spacing
};

const h4_light: FontTextInterface = {
  fontSize: 27,
  lineHeight: 32,
  fontWeight: "300",
  letterSpacing: -0.5, // Adjusted to -0.5 for letter spacing
};

const h4Styles = StyleSheet.create({
  h4_bold,
  h4_medium,
  h4_regular,
  h4_light,
});

//Style definitions for h5
const h5_bold: FontTextInterface = {
  fontSize: 23,
  lineHeight: 28,
  fontWeight: "700", // Adjusted to '700' for bold
  letterSpacing: 0, // Adjusted to 0 for letter spacing
};

const h5_medium: FontTextInterface = {
  fontSize: 23,
  lineHeight: 28,
  fontWeight: "600",
  letterSpacing: 0, // Adjusted to 0 for letter spacing
};

const h5_regular: FontTextInterface = {
  fontSize: 23,
  lineHeight: 28,
  fontWeight: "400",
  letterSpacing: 0, // Adjusted to 0 for letter spacing
};

const h5_light: FontTextInterface = {
  fontSize: 23,
  lineHeight: 28,
  fontWeight: "300",
  letterSpacing: 0, // Adjusted to 0 for letter spacing
};

const h5Styles = StyleSheet.create({
  h5_bold,
  h5_medium,
  h5_regular,
  h5_light,
});

// h6 style definitions
const h6_bold: FontTextInterface = {
  fontSize: 19,
  lineHeight: 24,
  fontWeight: "700", // Adjusted to '700' for bold
  letterSpacing: 0, // Adjusted to 0 for letter spacing
};

const h6_medium: FontTextInterface = {
  fontSize: 19,
  lineHeight: 24,
  fontWeight: "600",
  letterSpacing: 0, // Adjusted to 0 for letter spacing
};

const h6_regular: FontTextInterface = {
  fontSize: 19,
  lineHeight: 24,
  fontWeight: "400",
  letterSpacing: 0, // Adjusted to 0 for letter spacing
};

const h6_light: FontTextInterface = {
  fontSize: 19,
  lineHeight: 24,
  fontWeight: "300",
  letterSpacing: 0, // Adjusted to 0 for letter spacing
};

const h6Styles = StyleSheet.create({
  h6_bold,
  h6_medium,
  h6_regular,
  h6_light,
});

// Paragraphs style definitions
const para_bold: FontTextInterface = {
  fontSize: 16,
  lineHeight: 24, // Adjust line height as needed
  fontWeight: "700", // Adjusted to '700' for bold
  letterSpacing: 0, // Adjusted to 1 for letter spacing
};

const para_medium: FontTextInterface = {
  fontSize: 16,
  lineHeight: 24, // Adjust line height as needed
  fontWeight: "600",
  letterSpacing: 0,
};

const para_regular: FontTextInterface = {
  fontSize: 16,
  lineHeight: 24, // Adjust line height as needed
  fontWeight: "400",
  letterSpacing: 0,
};

const para_light: FontTextInterface = {
  fontSize: 16,
  lineHeight: 24, // Adjust line height as needed
  fontWeight: "300",
  letterSpacing: 0,
};

const paraStyles = StyleSheet.create({
  para_bold,
  para_medium,
  para_regular,
  para_light,
});

// small text style definitions
const small_bold: FontTextInterface = {
  fontSize: 13.5,
  lineHeight: 20.25, // You can adjust the line height as needed
  fontWeight: "700", // Adjusted to '700' for bold
  letterSpacing: 0, // Adjusted to 2 for letter spacing
};

const small_medium: FontTextInterface = {
  fontSize: 13.5,
  lineHeight: 20.25, // You can adjust the line height as needed
  fontWeight: "600",
  letterSpacing: 0,
};

const small_regular: FontTextInterface = {
  fontSize: 13.5,
  lineHeight: 20.25, // You can adjust the line height as needed
  fontWeight: "400",
  letterSpacing: 0,
};

const small_light: FontTextInterface = {
  fontSize: 13.5,
  lineHeight: 20.25, // You can adjust the line height as needed
  fontWeight: "300",
  letterSpacing: 0,
};

const smallStyles = StyleSheet.create({
  small_bold,
  small_medium,
  small_regular,
  small_light,
});

// mini text variant style definition
const mini_bold: FontTextInterface = {
  fontSize: 11.5,
  lineHeight: 17.25, // You can adjust the line height as needed
  fontWeight: "700", // Adjusted to '700' for bold
  letterSpacing: 0, // Adjusted to 2 for letter spacing
};

const mini_medium: FontTextInterface = {
  fontSize: 11.5,
  lineHeight: 17.25, // You can adjust the line height as needed
  fontWeight: "600",
  letterSpacing: 0,
};

const mini_regular: FontTextInterface = {
  fontSize: 11.5,
  lineHeight: 17.25, // You can adjust the line height as needed
  fontWeight: "400",
  letterSpacing: 0,
};

const mini_light: FontTextInterface = {
  fontSize: 11.5,
  lineHeight: 17.25, // You can adjust the line height as needed
  fontWeight: "300",
  letterSpacing: 0,
};

const miniStyles = StyleSheet.create({
  mini_bold,
  mini_medium,
  mini_regular,
  mini_light,
});

// other text styles
interface center {
  textAlign: "auto" | "left" | "right" | "center" | "justify";
}

type textCenterInterface = TextStyle & center;

const centerText = StyleSheet.create({
  center: {
    textAlign: "center",
  },
});

export {
  h1Styles,
  h2Styles,
  h3Styles,
  h4Styles,
  h5Styles,
  h6Styles,
  paraStyles,
  smallStyles,
  miniStyles,
  centerText,
};
