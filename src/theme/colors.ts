const colors = {
  primary: "#357EDF",
  secondary: "#65C374",
  tertiaryColor: "#141453",
  textPrimary: "",
  textTertiary: "#91a6c8",
  textGrey: "#707070",
  grey2: "#53688A",
  borderColor: "",
  backgroundColor: "",
  ratingColor: "",
  progressGrey: "",
  white: "#fff",
  black: "#000",
};

export const addOpacity = (p: number) => {
  const percent = Math.max(0, Math.min(100, p)); // bound percent from 0 to 100
  const intValue = Math.round((p / 100) * 255); // map percent to nearest integer (0 - 255)
  const hexValue = intValue.toString(16); // get hexadecimal representation
  return hexValue.padStart(2, "0").toUpperCase(); // format with leading 0 and upper case characters
};

export default colors;
