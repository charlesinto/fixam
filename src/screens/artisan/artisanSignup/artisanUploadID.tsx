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

const gallery = require("../../../../assets/images/gallery.png");

const ArtisanUploadID: FC<IProps> = ({ navigation }) => {
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
          </LinearGradient>
          <View
            style={{ marginBottom: 20, paddingHorizontal: 16, marginTop: 40 }}
          >
            <UploadIDWidgth />
          </View>
          <View style={{ marginVertical: 60, paddingHorizontal: 16 }}>
            <RaisedButton
              text="Next"
              onPressHanlder={() =>
                navigation.navigate(APP_SCREEN_LIST.ARTISAN_HOME)
              }
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const UploadIDWidgth = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View
        style={{
          backgroundColor: colors.primary + addOpacity(10),
          paddingVertical: 30,
          borderColor: colors.primary,
          justifyContent: "center",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={gallery}
            style={{ width: 80 }}
            resizeMethod="auto"
            resizeMode="cover"
          />
        </View>
        <View style={{ paddingHorizontal: 45, paddingTop: 10 }}>
          <Text
            style={{
              fontSize: font.size.font14,
              color: colors.black,
              textAlign: "center",
            }}
          >
            <Text style={{ color: colors.primary + addOpacity(85) }}>
              Please upload
            </Text>{" "}
            a picture of a Valid ID e.g drivers license, voters card, etc.
          </Text>
        </View>
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

export default ArtisanUploadID;
