import { FC } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";
import BackButton from "../../atoms/NavigationButton/BackButton";

interface IProps {
  header?: string;
  subHeader?: string;
  pageTitle?: string;
  serviceImageUrl?: string;
}

const plumber = require("../../../../assets/images/plumber.png");

const TabHeaderJobDetail: FC<IProps> = ({
  header = "What do you need the",
  subHeader = "plumber to do?",
  pageTitle,
  serviceImageUrl,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBannerWrapper}>
        <BackButton
          hasText={pageTitle && pageTitle.trim() !== "" ? true : false}
          title={pageTitle}
        />
      </View>
      <View style={{ height: 98, flexDirection: "row", paddingBottom: 20 }}>
        <View
          style={{
            padding: 10,
            borderRadius: 4,
          }}
        >
          <Image
            source={serviceImageUrl ? { uri: serviceImageUrl } : plumber}
            style={{ height: 128, marginRight: 16 }}
            resizeMode="contain"
            resizeMethod="auto"
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: font.size.font24,
              fontWeight: "700",
              color: colors.black,
            }}
          >
            {header}
          </Text>
          <Text
            style={{
              fontSize: font.size.font14,
              fontWeight: "400",
              color: colors.black,
              paddingTop: 8,
            }}
          >
            {subHeader}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
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

export default TabHeaderJobDetail;
