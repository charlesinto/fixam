import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";
import Input from "../../Input";

const logo = require("../../../../assets/images/fixam.png");
const coin = require("../../../../assets/images/coin.png");
const profile = require("../../../../assets/images/profile.png");

const ArtisanTabHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBannerWrapper}>
        <Image
          source={logo}
          style={styles.logo}
          resizeMethod="auto"
          resizeMode="contain"
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={styles.balanceWrapper}>
            <ImageBackground
              source={coin}
              style={{ width: 20, height: 30 }}
              resizeMethod="auto"
              resizeMode="cover"
            >
              <View
                style={{
                  backgroundColor: colors.red,
                  position: "absolute",
                  right: -8,
                  top: -1,
                  paddingVertical: 2,
                  paddingHorizontal: 3,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color: colors.white,
                    textAlign: "center",
                    fontSize: font.size.font10,
                    fontWeight: "bold",
                  }}
                >
                  15
                </Text>
              </View>
            </ImageBackground>
            <View style={{ paddingLeft: 16 }}>
              <Text
                style={{
                  fontSize: font.size.font14,
                  fontWeight: "600",
                  color: colors.primary + addOpacity(80),
                }}
              >
                Credits
              </Text>
            </View>
          </View>
          <ProfileAvatar />
        </View>
      </View>
      <View>
        <Input placeholder="Current location" label="Your current location" />
      </View>
    </View>
  );
};

const ProfileAvatar = () => {
  return (
    <View
      style={{
        marginLeft: 8,
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 10,
        borderColor: colors.primary + addOpacity(10),
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: 42,
          height: 42,
          borderRadius: 21,
          borderWidth: 10,
          borderColor: colors.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={profile}
          style={{ width: 40, height: 40, borderRadius: 20 }}
          resizeMethod="auto"
          resizeMode="cover"
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
  balanceWrapper: {
    backgroundColor: colors.primary + addOpacity(10),
    paddingVertical: 8,
    paddingHorizontal: 10,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default ArtisanTabHeader;
