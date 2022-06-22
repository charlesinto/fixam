import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { color } from "native-base/lib/typescript/theme/styled-system";
import { FC } from "react";
import {
  FlatList,
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
import ServiceCard from "../../../components/atoms/ServiceCard";
import Input from "../../../components/Input";
import {
  APP_SCREEN_LIST,
  DEVICE_FULL_HEIGHT,
  DEVICE_FULL_WIDTH,
} from "../../../constant";
import { IService } from "../../../models/IService";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

const logo = require("../../../../assets/images/fixam.png");
const groupPerson = require("../../../../assets/images/groupperson.png");

interface IProps {
  navigation: NavigationProp<any, any>;
}

const services = [
  {
    id: 1,
    serviceName: "Cleaner",
    url: require("../../../../assets/images/cleaner.png"),
  },
  {
    id: 2,
    serviceName: "Plumber",
    url: require("../../../../assets/images/plumber.png"),
  },
  {
    id: 3,
    serviceName: "Welder",
    url: require("../../../../assets/images/welder.png"),
  },
  {
    id: 4,
    serviceName: "Carpenter",
    url: require("../../../../assets/images/cleaner.png"),
  },
  {
    id: 5,
    serviceName: "Electrician",
    url: require("../../../../assets/images/plumber.png"),
  },
  {
    id: 6,
    serviceName: "Mechanic",
    url: require("../../../../assets/images/welder.png"),
  },
  {
    id: 7,
    serviceName: "Painter",
    url: require("../../../../assets/images/cleaner.png"),
  },
  {
    id: 8,
    serviceName: "Tiler",
    url: require("../../../../assets/images/plumber.png"),
  },
];

const ArtisanSignup: FC<IProps> = ({ navigation }) => {
  const renderServices = () => {
    return (
      <FlatList
        data={services}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        numColumns={3}
        style={{ flex: 1, marginTop: 20 }}
      />
    );
  };
  const renderItem = ({ item }: { item: IService }) => {
    return (
      <ServiceCard
        item={item}
        onPress={() => navigation.navigate(APP_SCREEN_LIST.ARISAN_SKILL_PICKER)}
      />
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: `#357EDF${addOpacity(16)}` }}>
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
              <TextButton content={"Sign in?"} />
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.title}>
                Sign up <Text style={{ color: colors.textTertiary }}>as</Text>{" "}
              </Text>
              <Text style={[styles.title, { color: colors.textTertiary }]}>
                an artisan
              </Text>
            </View>
            <Text
              style={{
                fontSize: font.size.font16,
                paddingVertical: 10,
                color: colors.black,
              }}
            >
              Choose your category below
            </Text>
            <View style={{ flex: 1 }}>{renderServices()}</View>

            <View style={{ marginVertical: 20 }}>
              <RaisedButton
                text="Proceed"
                onPressHanlder={() =>
                  navigation.navigate(APP_SCREEN_LIST.ARISAN_SKILL_PICKER)
                }
              />
            </View>
            <View style={{ flexDirection: "row", alignItems: "baseline" }}>
              <Text style={{ color: colors.black, fontSize: font.size.font14 }}>
                Want to hire an artisan?
              </Text>
              <TextButton
                content=" Click here to sign up"
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
                  navigation.navigate(APP_SCREEN_LIST.USER_SIGNUP_SCREEN)
                }
              />
            </View>
          </LinearGradient>
        </View>
      </SafeAreaView>
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

export default ArtisanSignup;
