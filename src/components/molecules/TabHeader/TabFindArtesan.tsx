import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";
import BackButton from "../../atoms/NavigationButton/BackButton";
import Input from "../../Input";

const logo = require("../../../../assets/images/fixam.png");

const TabFindArtesan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBannerWrapper}>
        <BackButton hasText={false} />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: font.size.font14,
              fontWeight: "400",
            }}
          >
            Finding artisan...
          </Text>
        </View>
      </View>
      <View>
        <Input
          value={`Plumber to 
fix pipes and taps`}
        />
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

export default TabFindArtesan;
