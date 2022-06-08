import { NavigationProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import { StatusBar, StyleSheet, View, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FlatButton from "../../../components/atoms/Button/FlatButton";
import TextButton from "../../../components/atoms/Button/TextButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";

import {
  APP_SCREEN_LIST,
  DEVICE_FULL_HEIGHT,
  DEVICE_FULL_WIDTH,
} from "../../../constant";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

const logo = require("../../../../assets/images/fixam.png");

const pay = require("../../../../assets/images/pay.png");
const group2 = require("../../../../assets/images/Group2.png");

interface IProps {
  navigation: NavigationProp<any, any>;
}

const AccountSelector: FC<IProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.contiainer}>
        <CustomStatusBar
          backgroundColor={`#357EDF${addOpacity(60)}`}
          barStyle="light-content"
        />
        <LinearGradient
          colors={[
            `#357EDF${addOpacity(16)}`,
            `#357EDF${addOpacity(3.04)}`,
            `#357EDF${addOpacity(0)}`,
          ]}
          style={{ flex: 1, paddingTop: 20, paddingHorizontal: 16 }}
        >
          <View style={styles.logoBannerWrapper}>
            <Image
              source={logo}
              style={styles.logo}
              resizeMethod="auto"
              resizeMode="contain"
            />
            <TextButton content={"Skip"} />
          </View>
          <View style={{ marginVertical: 20 }}>
            <Text style={styles.title}>Find and hire</Text>
            <Text style={[styles.title, { color: colors.textTertiary }]}>
              artisans around
            </Text>
            <Text style={[styles.title, { color: colors.textTertiary }]}>
              you
            </Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: font.size.font14, color: colors.black }}>
                Choose your category below
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <FlatButton
                containerStyle={{
                  backgroundColor: colors.primary + addOpacity(20),
                  marginRight: 10,
                  flex: 1,
                  paddingVertical: 20,
                  borderBottomColor: colors.primary,
                  borderBottomWidth: 6,
                  paddingRight: 0,
                  shadowOffset: { width: 0, height: 0 },
                  elevation: 0,
                }}
                onPressHanlder={() => {
                  navigation.navigate(APP_SCREEN_LIST.USER_SIGNUP_SCREEN);
                }}
              >
                <View>
                  <View style={{ alignItems: "flex-end" }}>
                    <Image
                      source={pay}
                      resizeMethod="auto"
                      resizeMode="cover"
                      style={{ width: 130 }}
                    />
                  </View>
                  <View style={{ marginTop: 20 }}>
                    <Text
                      style={{
                        color: colors.black,
                        fontSize: font.size.font14,
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      I want to hire
                    </Text>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: font.size.font14,
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      artisans
                    </Text>
                  </View>
                </View>
              </FlatButton>
              <FlatButton
                containerStyle={{
                  backgroundColor: colors.primary + addOpacity(20),
                  flex: 1,
                  paddingVertical: 20,
                  borderBottomColor: colors.primary,
                  borderBottomWidth: 6,
                  paddingRight: 0,
                  shadowOffset: { width: 0, height: 0 },
                  elevation: 0,
                }}
              >
                <View>
                  <View
                    style={{ flexDirection: "row", justifyContent: "flex-end" }}
                  >
                    <Image
                      source={group2}
                      resizeMethod="auto"
                      resizeMode="contain"
                      style={{ width: 130 }}
                    />
                  </View>
                  <View>
                    <Text
                      style={{
                        color: colors.black,
                        fontSize: font.size.font14,
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      I am an artisan
                    </Text>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: font.size.font14,
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      <Text style={{ color: colors.black }}> e.g </Text>Plumber
                    </Text>
                  </View>
                </View>
              </FlatButton>
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: font.size.font34,
    fontWeight: "900",
    textAlign: "left",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: font.size.font12,
    textAlign: "center",
    fontWeight: "400",
    marginBottom: 10,
    color: colors.textGrey,
  },
  contiainer: {
    backgroundColor: colors.white,
    flex: 1,
  },
  logoBannerWrapper: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 40,
  },
  imageStyle: {
    width: DEVICE_FULL_WIDTH / 2 > 350 ? DEVICE_FULL_WIDTH / 2 : 350,
    height: DEVICE_FULL_HEIGHT / 3 < 300 ? 300 : DEVICE_FULL_WIDTH / 3,
  },
  bannerImageWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },
});

export default AccountSelector;
