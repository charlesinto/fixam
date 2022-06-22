import { NavigationProp } from "@react-navigation/native";
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
  View,
} from "react-native";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import Input from "../../../components/Input";
import TabHeaderServiceCategory from "../../../components/molecules/TabHeader/TabHeaderServiceCategory";
import {
  DEVICE_FULL_HEIGHT,
  DEVICE_FULL_WIDTH,
  APP_SCREEN_LIST,
} from "../../../constant";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

const logo = require("../../../../assets/images/fixam.png");
const groupPerson = require("../../../../assets/images/groupperson.png");

interface IProps {
  navigation: NavigationProp<any, any>;
}

const ArtisanProfileSetup: FC<IProps> = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <CustomStatusBar
          backgroundColor={`#357EDF${addOpacity(60)}`}
          barStyle="light-content"
        />

        <View style={{ flex: 1 }}>
          <LinearGradient
            colors={[
              `#357EDF${addOpacity(16)}`,
              `#357EDF${addOpacity(3.04)}`,
              `#357EDF${addOpacity(0)}`,
            ]}
            style={[
              styles.contiainer,
              {
                flex: 1,

                paddingBottom: 20,
              },
            ]}
          >
            <TabHeaderServiceCategory
              header="Setup your profile"
              subHeader="Choose your category below"
              pageTitle="Sign up as an artisan"
            />
            <KeyboardAvoidingView
              style={{ flex: 1, paddingHorizontal: 16, paddingTop: 40 }}
              contentContainerStyle={{ flexGrow: 1 }}
              behavior="padding"
            >
              <View style={{ marginBottom: 20 }}>
                <CircleAvatar />
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
                  label="Phone number"
                  keyboardType={"name-phone-pad"}
                  placeholder="091010101019"
                  autoCorrect={false}
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
              <View style={{ marginVertical: 60 }}>
                <RaisedButton
                  text="Next"
                  onPressHanlder={() =>
                    navigation.navigate(APP_SCREEN_LIST.ARTISAN_UPLOAD_ID)
                  }
                />
              </View>
            </KeyboardAvoidingView>
          </LinearGradient>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const CircleAvatar = () => {
  return (
    <View style={{ alignItems: "center", marginBottom: 20 }}>
      <View
        style={{
          backgroundColor: colors.primary + addOpacity(10),
          width: 80,
          height: 80,
          borderRadius: 40,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: font.size.font12,
            color: colors.black,
            textAlign: "center",
          }}
        >
          add profile picture
        </Text>
      </View>
    </View>
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

export default ArtisanProfileSetup;
