import { Image, StyleSheet, View } from "react-native";
import colors from "../../../theme/colors";
import Input from "../../Input";

const logo = require("../../../../assets/images/fixam.png");

const TabHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBannerWrapper}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMethod="auto"
          resizeMode="contain"
        />
      </View>
      <View>
        <Input placeholder="Current location" label="Your current location" />
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

export default TabHeader;
