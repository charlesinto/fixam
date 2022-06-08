import { FC, useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import IconButton from "../../../components/atoms/Button/IconButton";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import ServiceCard from "../../../components/atoms/ServiceCard";
import HomePageGreetings from "../../../components/molecules/Greetings/HomepageGreetings";
import TabFindArtesan from "../../../components/molecules/TabHeader/TabFindArtesan";
import TabHeader from "../../../components/molecules/TabHeader/TabHeader";
import TabHeaderServiceCategory from "../../../components/molecules/TabHeader/TabHeaderServiceCategory";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";
import * as Progress from "react-native-progress";
import { NavigationProp } from "@react-navigation/native";
import { APP_SCREEN_LIST } from "../../../constant";

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

const vector = require("../../../../assets/images/Vector.png");
const profile = require("../../../../assets/images/profile.png");
const setting = require("../../../../assets/images/setting.png");

export interface IService {
  id: number;
  serviceName: string;
  url: any;
}

interface IProps {
  navigation: NavigationProp<any, any>;
}

const ArtesanSearchPage: FC<IProps> = ({ navigation }) => {
  const [isLoaded, setLoaded] = useState(false);
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
  const [isSelectModeActive, setSelectModeActive] = useState(false);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 5000);
  });

  const isServiceSelected = (id: number) => selectedServices.includes(id);

  const selectService = (id: number) => {
    const services = [...selectedServices];
    const index = services.findIndex((itemId) => itemId === id);
    if (index === -1) {
      services.push(id);
    } else {
      services.splice(index, 1);
    }

    setSelectedServices(services);
  };

  const hanldeOnServiceItemLongPress = () => {
    setSelectModeActive((state) => !state);
  };

  const renderItem = ({ item }: { item: IService }) => {
    return (
      <ServiceCard
        item={item}
        onLongPress={hanldeOnServiceItemLongPress}
        selectMode={isSelectModeActive}
        onSelect={selectService}
        selected={isServiceSelected(item.id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.contianer}>
      <CustomStatusBar
        barStyle={"dark-content"}
        backgroundColor={colors.white}
      />
      <TabFindArtesan />
      <View style={styles.contentArea}>
        {isLoaded ? <PlumberFoundInfo /> : <PlumberSearching />}
      </View>
      <View style={{ paddingHorizontal: 16, marginBottom: 30 }}>
        <RaisedButton
          text="Check them"
          onPressHanlder={() =>
            navigation.navigate(APP_SCREEN_LIST.ARTESAN_FOUND_LIST)
          }
        />
      </View>
    </SafeAreaView>
  );
};

const PlumberFoundInfo = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <ImageBackground
          source={vector}
          style={styles.vectorWrapper}
          resizeMethod="auto"
          resizeMode="contain"
        >
          <Image
            source={profile}
            style={styles.imageThumbnail}
            resizeMode="cover"
            resizeMethod="auto"
          />
        </ImageBackground>
        <ImageBackground
          source={vector}
          style={[styles.vectorWrapper, { marginLeft: -30 }]}
          resizeMethod="auto"
          resizeMode="contain"
        >
          <Image
            source={profile}
            style={styles.imageThumbnail}
            resizeMode="cover"
            resizeMethod="auto"
          />
        </ImageBackground>
        <ImageBackground
          source={vector}
          style={[styles.vectorWrapper, { marginLeft: -30 }]}
          resizeMethod="auto"
          resizeMode="contain"
        >
          <Image
            source={profile}
            style={styles.imageThumbnail}
            resizeMode="cover"
            resizeMethod="auto"
          />
        </ImageBackground>
      </View>
      <View>
        <Text
          style={{
            fontSize: font.size.font16,
            color: colors.black,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          We found <Text style={{ color: colors.primary }}>10 plumbers</Text>
        </Text>
        <Text
          style={{
            fontSize: font.size.font16,
            color: colors.black,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          close to you
        </Text>
      </View>
    </>
  );
};

const PlumberSearching = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <IconButton>
          <Image
            source={setting}
            style={{ width: 40 }}
            resizeMethod="auto"
            resizeMode="contain"
          />
        </IconButton>
      </View>
      <View>
        <Text
          style={{
            fontSize: font.size.font16,
            color: colors.black,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          No artisan has picked your
        </Text>
        <Text
          style={{
            fontSize: font.size.font16,
            color: colors.black,
            fontWeight: "400",
            textAlign: "center",
          }}
        >
          request. Hold on a bit
        </Text>
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Progress.Bar
          width={200}
          indeterminate
          color={colors.secondary}
          unfilledColor={colors.secondary + addOpacity(30)}
          borderWidth={0}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contianer: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
  },
  contentArea: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "center",
  },
  card: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // minWidth: "33%",
    padding: 4,
    minHeight: 100,
    backgroundColor: "#fff",
    marginRight: 8,
    marginBottom: 8,
    flex: 1 / 3,
  },
  vectorWrapper: {
    width: 80,
    height: 100,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  imageThumbnail: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 15,
  },
});

export default ArtesanSearchPage;
