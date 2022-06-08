import { NavigationProp } from "@react-navigation/native";
import { FC } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ArtesanRowItem, {
  IArtisan,
} from "../../../components/atoms/ArtesanRowItem/ArtesanRowItem";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import BackButton from "../../../components/atoms/NavigationButton/BackButton";
import { APP_SCREEN_LIST } from "../../../constant";
import colors from "../../../theme/colors";
import font from "../../../theme/font";

const artisans: IArtisan[] = [
  {
    id: 1,
    name: "Onuorah Charles",
    rating: "5.0",
    distance: "100M",
    reviewCount: "1000",
  },
  {
    id: 2,
    name: "Tolu Adesina",
    rating: "4.0",
    distance: "2KM",
    reviewCount: "400",
  },
  {
    id: 3,
    name: "Tolu Adesina",
    rating: "4.0",
    distance: "2KM",
    reviewCount: "400",
  },
];

interface IProps {
  navigation: NavigationProp<any, any>;
}

const ArtisanFoundList: FC<IProps> = ({ navigation }) => {
  const renderList = () => {
    return (
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        keyExtractor={(item) => `${item.id}`}
        data={artisans}
        renderItem={renderItem}
      />
    );
  };
  const renderItem = ({ item }: { item: IArtisan }) => {
    return (
      <ArtesanRowItem
        name={item.name}
        rating={item.rating}
        reviewCount={item.reviewCount}
        distance={item.distance}
        onPress={() =>
          navigation.navigate(APP_SCREEN_LIST.ARTSEAN_PROFILE_SCREEN)
        }
      />
    );
  };
  return (
    <SafeAreaView style={styles.contianer}>
      <CustomStatusBar
        barStyle={"dark-content"}
        backgroundColor={colors.white}
      />
      <View style={{ flexDirection: "row", paddingTop: 10, paddingBottom: 30 }}>
        <BackButton hasText={false} />
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text
            style={{
              fontWeight: "400",
              color: colors.black,
              fontSize: font.size.font14,
              textAlign: "center",
            }}
          >
            Available artisans
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text
          style={{
            color: colors.primary,
            fontSize: font.size.font14,
            fontWeight: "600",
          }}
        >
          10 Plumbers{" "}
          <Text style={{ color: colors.black, fontWeight: "normal" }}>
            found
          </Text>
        </Text>
      </View>
      {renderList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contianer: {
    // marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
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

export default ArtisanFoundList;
