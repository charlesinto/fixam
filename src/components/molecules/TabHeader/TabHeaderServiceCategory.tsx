import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";
import BackButton from "../../atoms/NavigationButton/BackButton";
import Input from "../../Input";

const logo = require("../../../../assets/images/fixam.png");

const TabHeaderServiceCategory = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBannerWrapper}>
        <BackButton />
      </View>
      <View>
        <Text
          style={{
            fontSize: font.size.font24,
            fontWeight: "700",
            color: colors.black,
          }}
        >
          What do you need the
        </Text>
        <Text
          style={{
            fontSize: font.size.font24,
            fontWeight: "700",
            color: colors.black,
          }}
        >
          plumber to do?
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingVertical: 20,
    backgroundColor: colors.white,
  },
  logoBannerWrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 120,
  },
});

export default TabHeaderServiceCategory;
