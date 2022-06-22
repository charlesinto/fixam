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
import TabHeaderServiceCategory from "../../../components/molecules/TabHeader/TabHeaderServiceCategory";
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

const ArtisanSkillPicker: FC<IProps> = ({ navigation }) => {
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
    return <ServiceCard item={item} />;
  };
  return (
    <View style={{ flex: 1, backgroundColor: `#357EDF${addOpacity(16)}` }}>
      <CustomStatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <TabHeaderServiceCategory
          header="Choose your expertise"
          subHeader="Choose your category below"
          pageTitle="Sign up as an artisan"
        />
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
            <View style={{ flex: 1 }}>{renderServices()}</View>

            <View style={{ marginVertical: 20 }}>
              <RaisedButton
                text="Next"
                onPressHanlder={() =>
                  navigation.navigate(APP_SCREEN_LIST.ARTISAN_PROFILE_SETUP)
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

export default ArtisanSkillPicker;
