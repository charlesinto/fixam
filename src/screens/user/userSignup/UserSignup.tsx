import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FC } from "react";
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FlatButton from "../../../components/atoms/Button/FlatButton";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import TextButton from "../../../components/atoms/Button/TextButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import Input from "../../../components/Input";
import {
  APP_SCREEN_LIST,
  DEVICE_FULL_HEIGHT,
  DEVICE_FULL_WIDTH,
} from "../../../constant";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

const logo = require("../../../../assets/images/fixam.png");
const groupPerson = require("../../../../assets/images/groupperson.png");

interface IProps {
  navigation: NavigationProp<any, any>;
}

const UserSignUp: FC<IProps> = ({ navigation }) => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: `#357EDF${addOpacity(16)}` }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <CustomStatusBar
        backgroundColor={`#357EDF${addOpacity(60)}`}
        barStyle="light-content"
      />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.contiainer}>
          <LinearGradient
            colors={[
              `#357EDF${addOpacity(16)}`,
              `#357EDF${addOpacity(3.04)}`,
              `#357EDF${addOpacity(0)}`,
            ]}
            style={{
              flex: 1,
              paddingTop: 20,
              paddingHorizontal: 16,
              paddingBottom: 20,
            }}
          >
            <View style={styles.logoBannerWrapper}>
              <Image
                source={logo}
                style={styles.logo}
                resizeMethod="auto"
                resizeMode="contain"
              />
              <TextButton content={"Artisan?"} />
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.title}>
                Sign up <Text style={{ color: colors.textTertiary }}>to</Text>{" "}
              </Text>
              <Text style={[styles.title, { color: colors.textTertiary }]}>
                find artisans
              </Text>
            </View>

            <KeyboardAvoidingView
              style={{ flex: 1 }}
              contentContainerStyle={{ flexGrow: 1 }}
              behavior="padding"
            >
              <View style={{ marginBottom: 20 }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1 }}>
                    <Input
                      autoCorrect={false}
                      label="First name"
                      placeholder="John"
                    />
                  </View>
                  <View style={{ width: 10 }}></View>
                  <View style={{ flex: 1 }}>
                    <Input
                      label="Last name"
                      autoCorrect={false}
                      placeholder="Doe"
                    />
                  </View>
                </View>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Input
                  label="Email address"
                  keyboardType={"email-address"}
                  placeholder="john.doe@example.com"
                  autoCorrect={false}
                  autoCapitalize={"none"}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <Input
                  label="Phone Number"
                  keyboardType={"number-pad"}
                  placeholder="090xxxxxx"
                  autoCorrect={false}
                  autoCapitalize={"none"}
                />
              </View>
              <View style={{ marginBottom: 10 }}>
                <Input
                  label="Password"
                  placeholder="password"
                  secureTextEntry={true}
                  autoCorrect={false}
                  autoCapitalize={"none"}
                />
              </View>
            </KeyboardAvoidingView>

            <View style={{ marginVertical: 20 }}>
              <RaisedButton
                text="Create Account"
                onPressHanlder={() =>
                  navigation.navigate(APP_SCREEN_LIST.MAIN_SCREEN)
                }
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={{ color: colors.black, fontSize: font.size.font14 }}>
                I have an account?
              </Text>
              <TextButton
                content=" Sign in"
                textStyle={{
                  fontSize: font.size.font14,
                  color: colors.primary,
                  fontWeight: "bold",
                  marginBottom: 0,
                  alignItems: "center",
                }}
                containerStyle={{
                  justifyContent: "flex-end",
                  marginBottom: 0,
                  paddingBottom: 0,
                }}
                onPressHandler={() =>
                  navigation.navigate(APP_SCREEN_LIST.USER_SIGNIN_SCREEN)
                }
              />
            </View>
            <FlatButton
              containerStyle={{
                backgroundColor: "transparent",
                paddingVertical: 0,
                marginTop: 20,
                width: "100%",
                justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  backgroundColor: colors.secondary + addOpacity(15),
                  width: "100%",
                  paddingHorizontal: 16,
                  flexDirection: "row",
                }}
              >
                <View>
                  <Image
                    source={groupPerson}
                    resizeMethod="auto"
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{ flex: 1, justifyContent: "center", paddingLeft: 16 }}
                >
                  <Text
                    style={{
                      color: colors.secondary,
                      fontSize: font.size.font14,
                    }}
                  >
                    use fixam as a guest?
                  </Text>
                </View>
              </View>
            </FlatButton>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </ScrollView>
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
    // marginTop: StatusBar.currentHeight,
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

export default UserSignUp;
