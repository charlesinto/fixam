import { FC, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Platform,
  Modal,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import FlatButton from "../../../components/atoms/Button/FlatButton";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import BackButton from "../../../components/atoms/NavigationButton/BackButton";
import Avatar from "../../../components/atoms/profile/Avatar";
import SvgUri from "react-native-svg-uri";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

const call = require("../../../../assets/svg/call.svg");
const chat = require("../../../../assets/svg/chat.svg");

export interface IReview {
  id: string;
  review: string;
  by: string;
}
const services = [
  "Pipe fixing",
  "Water Pump Machine Installation",
  "Bath Thub Installation",
  "Sink Fixing",
  "Water Pump Machine Installation",
  "Bath Thub Installation",
  "Sink Fixing",
  "Pipe fixing",
  "Water Pump Machine Installation",
  "Bath Thub Installation",
];
const reviews: IReview[] = [
  {
    id: "1",
    review: "Abeg. Tolu sabi work well well. Confirm pumping machine guy.",
    by: "Charles",
  },
  {
    id: "2",
    review: "Abeg. Tolu sabi work well well. Confirm pumping machine guy.",
    by: "Charles",
  },
  {
    id: "3",
    review: "Abeg. Tolu sabi work well well. Confirm pumping machine guy.",
    by: "Charles",
  },
  {
    id: "4",
    review: "Abeg. Tolu sabi work well well. Confirm pumping machine guy.",
    by: "Charles",
  },
  {
    id: "5",
    review: "Abeg. Tolu sabi work well well. Confirm pumping machine guy.",
    by: "Charles",
  },
  {
    id: "6",
    review: "Abeg. Tolu sabi work well well. Confirm pumping machine guy.",
    by: "Charles",
  },
];

const ArtisanProfile = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderReview = ({ item }: { item: IReview }) => {
    return (
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            backgroundColor: colors.white,
            paddingHorizontal: 14,
            paddingTop: 12,
            width: 170,
            height: 150,
            justifyContent: "space-between",
            marginRight: 10,
          }}
        >
          <Text
            style={{
              color: colors.primary,
              fontSize:
                Platform.OS === "ios" ? font.size.font12 : font.size.font16,
            }}
          >
            {item.review}
          </Text>

          <Text
            style={{
              fontSize: font.size.font14,
              color: colors.black,
              paddingBottom: 10,
            }}
          >
            - {item.by}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar
        barStyle={"light-content"}
        backgroundColor={colors.primary + addOpacity(45)}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View
          style={{
            flexDirection: "row",
            paddingTop: 28,
            paddingBottom: 78,
            paddingHorizontal: 16,
          }}
        >
          <BackButton
            hasText={false}
            containerStyle={{ backgroundColor: colors.white }}
          />
          <View style={{ justifyContent: "center", paddingLeft: 24 }}>
            <Text
              style={{
                textTransform: "capitalize",
                textAlign: "center",
                fontSize: font.size.font14,
              }}
            >
              Artisan profile
            </Text>
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <View
            style={{ alignItems: "center", marginTop: -60, marginBottom: 10 }}
          >
            <Avatar rating={"4.0"} size={120} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: font.size.font24,
                color: colors.black,
                textAlign: "center",
              }}
            >
              Tolu Adesina
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: font.size.font14,
                color: colors.grey2,
                textAlign: "center",
              }}
            >
              Plumber
            </Text>
          </View>
          <View>
            <InFoContainer>
              <>
                <Text style={{ color: "#888888", fontSize: font.size.font14 }}>
                  Work Address
                </Text>
                <Text
                  style={{ color: colors.black, fontSize: font.size.font18 }}
                >
                  No. 32, Egbeda Street, Agungi, Lagos.
                </Text>
              </>
            </InFoContainer>
            <InFoContainer>
              <>
                <Text style={{ color: "#888888", fontSize: font.size.font14 }}>
                  Services
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    marginTop: 10,
                  }}
                >
                  {services.map((item) => (
                    <View
                      style={{
                        backgroundColor: colors.white,
                        paddingVertical: 4,
                        paddingHorizontal: 6,
                        marginRight: 10,
                        marginBottom: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: font.size.font12,
                          color: colors.black,
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  ))}
                </View>
              </>
            </InFoContainer>

            <View style={{ marginBottom: 20 }}>
              <InFoContainer>
                <>
                  <Text
                    style={{ color: "#888888", fontSize: font.size.font14 }}
                  >
                    Reviews
                  </Text>
                  <FlatList
                    horizontal={true}
                    data={reviews}
                    renderItem={renderReview}
                    keyExtractor={(item) => item.id}
                  />
                </>
              </InFoContainer>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 16, marginBottom: 20, marginTop: 20 }}>
        <RaisedButton
          text="Contact Tolu"
          onPressHanlder={() => setModalVisible((state) => !state)}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={{ flex: 1 }}
          activeOpacity={1}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View
                style={{
                  backgroundColor: colors.primary + addOpacity(15),
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Avatar rating={"4.0"} size={100} />
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      marginLeft: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: font.size.font18,
                        color: colors.black,
                        fontWeight: "600",
                      }}
                    >
                      Tolu Adesina
                    </Text>
                    <Text
                      style={{
                        fontSize: font.size.font14,
                        color: colors.grey2,
                        paddingTop: 10,
                      }}
                    >
                      Plumber
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{ paddingHorizontal: 16, paddingVertical: 30 }}>
                <View>
                  <Text
                    style={{ color: colors.grey2, fontSize: font.size.font14 }}
                  >
                    Work Address
                  </Text>
                  <Text
                    style={{
                      color: colors.black,
                      fontSize: font.size.font16,
                      paddingTop: 10,
                      fontWeight: "600",
                    }}
                  >
                    No. 32, Egbeda Street, Agungi, Lagos.
                  </Text>
                </View>
                <View style={{ marginVertical: 30, flexDirection: "row" }}>
                  <FlatButton
                    containerStyle={{
                      backgroundColor: colors.primary + addOpacity(15),
                      flex: 1,
                      marginRight: 10,
                      paddingVertical: 24,
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <SvgUri source={call} width={"40"} height={"40"} />
                      <Text
                        style={{
                          color: colors.black,
                          fontSize: font.size.font14,
                          paddingTop: 10,
                        }}
                      >
                        Call artisan
                      </Text>
                    </View>
                  </FlatButton>
                  <FlatButton
                    containerStyle={{
                      backgroundColor: colors.primary + addOpacity(15),
                      flex: 1,
                      paddingVertical: 24,
                    }}
                  >
                    <View style={{ alignItems: "center" }}>
                      <SvgUri source={chat} width={"40"} height={"40"} />
                      <Text
                        style={{
                          color: colors.black,
                          fontSize: font.size.font14,
                          paddingTop: 10,
                        }}
                      >
                        Chat artisan
                      </Text>
                    </View>
                  </FlatButton>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

interface IPropsInFo {
  children: JSX.Element;
}

export const InFoContainer: FC<IPropsInFo> = ({ children }) => {
  return (
    <View
      style={{
        paddingHorizontal: 14,
        paddingVertical: 12,
        backgroundColor: colors.primary + addOpacity(10),
        marginBottom: 10,
        borderRadius: 4,
      }}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary + addOpacity(10),
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: colors.white,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: 400,
    width: "90%",
  },
});

export default ArtisanProfile;
