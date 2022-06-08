import { NavigationProp } from "@react-navigation/native";
import { FC, useState } from "react";
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
} from "react-native";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import ServiceCard from "../../../components/atoms/ServiceCard";
import HomePageGreetings from "../../../components/molecules/Greetings/HomepageGreetings";
import TabFindArtesan from "../../../components/molecules/TabHeader/TabFindArtesan";
import TabHeader from "../../../components/molecules/TabHeader/TabHeader";
import TabHeaderServiceCategory from "../../../components/molecules/TabHeader/TabHeaderServiceCategory";
import { APP_SCREEN_LIST } from "../../../constant";
import colors from "../../../theme/colors";
import font from "../../../theme/font";

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

export interface IService {
  id: number;
  serviceName: string;
  url: any;
}

interface IProps {
  navigation: NavigationProp<any>;
}

const ServiceCategoryPage: FC<IProps> = ({ navigation }) => {
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
      <TabHeaderServiceCategory />
      <View style={styles.contentArea}>{renderServices()}</View>
      <View style={{ paddingHorizontal: 16, marginBottom: 30 }}>
        <RaisedButton
          text="Post request"
          onPressHanlder={() =>
            navigation.navigate(APP_SCREEN_LIST.ARTESAN_SEARCH_SCREEN)
          }
        />
      </View>
    </SafeAreaView>
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
});

export default ServiceCategoryPage;
