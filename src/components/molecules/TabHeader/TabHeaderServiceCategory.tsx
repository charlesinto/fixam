import { FC } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";
import BackButton from "../../atoms/NavigationButton/BackButton";

interface IProps {
  header?: string;
  subHeader?: string;
  pageTitle?: string;
}

const TabHeaderServiceCategory: FC<IProps> = ({
  header = "What do you need the",
  subHeader = "plumber to do?",
  pageTitle,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBannerWrapper}>
        <BackButton
          hasText={pageTitle && pageTitle.trim() !== "" ? true : false}
          title={pageTitle}
        />
      </View>
      <View>
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
            paddingTop: 10,
          }}
        >
          {subHeader}
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
