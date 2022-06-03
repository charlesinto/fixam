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
import FlatButton from "../../components/atoms/Button/FlatButton";
import RaisedButton from "../../components/atoms/Button/RaisedButton";
import TextButton from "../../components/atoms/Button/TextButton";
import Input from "../../components/Input";
import {
  DEVICE_FULL_HEIGHT,
  DEVICE_FULL_WIDTH,
  APP_SCREEN_LIST,
} from "../../constant";
import colors, { addOpacity } from "../../theme/colors";
import font from "../../theme/font";

const logo = require("../../../assets/images/fixam.png");
const groupPerson = require("../../../assets/images/groupperson.png");

interface IProps {
  navigation: any;
}

const UserLogin: FC<IProps> = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
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
                text="Sign In"
                onPressHanlder={() =>
                  navigation.navigate(APP_SCREEN_LIST.MAIN_SCREEN)
                }
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={{ color: colors.black, fontSize: font.size.font14 }}>
                New here?
              </Text>
              <TextButton
                content=" Sign up"
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
    marginTop: StatusBar.currentHeight,
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

export default UserLogin;
