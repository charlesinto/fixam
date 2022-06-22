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
  Image,
} from "react-native";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import JobRowItem from "../../../components/atoms/Job/JobRowItem";
import ServiceCard from "../../../components/atoms/ServiceCard";
import HomePageGreetings from "../../../components/molecules/Greetings/HomepageGreetings";
import CustomModal from "../../../components/molecules/Modal/CustomModal";
import ArtisanTabHeader from "../../../components/molecules/TabHeader/ArtisanTabHeader";
import TabHeader from "../../../components/molecules/TabHeader/TabHeader";
import { APP_SCREEN_LIST } from "../../../constant";
import { IService } from "../../../models/IService";
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

const toolbox = require("../../../../assets/images/toolbox.png");
const briefcase = require("../../../../assets/images/briefcase_small.png");

interface IProps {
  navigation: NavigationProp<any, any>;
}

const ArtisanHomeScreen: FC<IProps> = ({ navigation }) => {
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
        onPress={() =>
          navigation.navigate(APP_SCREEN_LIST.SERVICE_CATGORIES_PAGE)
        }
      />
    );
  };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeModal = () => {
    setIsModalVisible(false);
  };
  const ModalHeader = () => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          source={briefcase}
          style={{ width: 40 }}
          resizeMethod="auto"
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: font.size.font16,
            color: colors.black,
            fontWeight: "600",
          }}
        >
          View Job
        </Text>
      </View>
    );
  };
  const ModalBody = () => {
    return (
      <View>
        <Text
          style={{
            fontSize: font.size.font16,
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          You are about to spend{" "}
          <Text style={{ color: colors.primary, fontWeight: "600" }}>
            1.5 credit
          </Text>{" "}
          to view details about a job
        </Text>
        <View style={{ marginVertical: 20 }}>
          <RaisedButton
            text="Yes, View"
            onPressHanlder={() => {
              setIsModalVisible(false);
              navigation.navigate(
                APP_SCREEN_LIST.ARTISAN_JOB_REQUEST_DETAIL_SCREEN
              );
            }}
          />
        </View>
      </View>
    );
  };
  const hanldeItemOnClick = () => {
    setIsModalVisible(true);
  };
  return (
    <SafeAreaView style={styles.contianer}>
      <CustomStatusBar
        barStyle={"dark-content"}
        backgroundColor={colors.white}
      />
      <ArtisanTabHeader />
      <View style={styles.contentArea}>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>
            Job request around you{" "}
            <Text style={{ fontWeight: "400" }}>(2 new)</Text>
          </Text>
        </View>
        <View style={{ paddingVertical: 20 }}>
          <JobRowItem
            numberOfBidReceived={2}
            title="Fix pipes and taps"
            distance="10 mins ago at Magodo"
            id="1"
            onPress={hanldeItemOnClick}
          />
          <JobRowItem
            numberOfBidReceived={2}
            title="Fix pipes and taps"
            distance="10 mins ago at Magodo"
            id="2"
            onPress={hanldeItemOnClick}
          />
          <JobRowItem
            numberOfBidReceived={2}
            title="Fix pipes and taps"
            distance="10 mins ago at Magodo"
            id="3"
            onPress={hanldeItemOnClick}
          />
        </View>
      </View>
      <CustomModal
        onClose={closeModal}
        headerComponent={<ModalHeader />}
        bodyComponent={<ModalBody />}
        isVisible={isModalVisible}
      />
    </SafeAreaView>
  );
};

const NoJob = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={toolbox}
        style={{ width: 100 }}
        resizeMethod="auto"
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: font.size.font14,
          color: colors.black,
        }}
      >
        No job request found yet
      </Text>
    </View>
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
  title: {
    fontSize: font.size.font20,
    color: colors.black,
    fontWeight: "700",
  },
});

export default ArtisanHomeScreen;
