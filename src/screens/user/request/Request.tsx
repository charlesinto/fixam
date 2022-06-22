import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import { Feather } from "@expo/vector-icons";
import colors, { addOpacity } from "../../../theme/colors";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import font from "../../../theme/font";
import ScreenHeaderText from "../../../components/atoms/ScreenHeader/ScreenHeaderText";
import { color } from "native-base/lib/typescript/theme/styled-system";
import RequestRowItem from "../../../components/atoms/RequestRowItem/RequestRowItem";
import { IRequest } from "../../../models/IRequest";
import { useState } from "react";

const requests: IRequest[] = [
  {
    id: "1",
    title: "Find plumber",
    description: "Fix pipes and taps",
    numberOfBidReceived: 10,
  },
  {
    id: "2",
    title: "Find plumber",
    description: "Fix pipes and taps",
    numberOfBidReceived: 5,
  },
  {
    id: "3",
    title: "Find plumber",
    description: "Fix pipes and taps",
    numberOfBidReceived: 1,
  },
  {
    id: "4",
    title: "Find plumber",
    description: "Fix pipes and taps",
    numberOfBidReceived: 12,
  },
];

const RequestScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const _onRequestEnd = (id: string) => {
    setModalVisible(true);
  };
  const _renderItem = ({ item }: { item: IRequest }) => {
    return (
      <RequestRowItem
        title={item.title}
        description={item.description}
        numberOfBidReceived={item.numberOfBidReceived}
        id={item.id}
        onRequestEnd={_onRequestEnd}
      />
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <CustomStatusBar />
      <ScreenHeaderText title="Request" />
      <View style={{ paddingHorizontal: 16, flex: 1 }}>
        <FlatList
          renderItem={_renderItem}
          keyExtractor={(item) => item.id}
          data={requests}
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
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
          <View style={styles.centeredModalView}>
            <View style={styles.modalView}>
              <View
                style={{
                  backgroundColor: colors.primary + addOpacity(15),
                  paddingVertical: 20,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontSize: font.size.font16,
                      textAlign: "center",
                      fontWeight: "600",
                    }}
                  >
                    End Request
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 30,
                  paddingHorizontal: 16,
                  backgroundColor: colors.white,
                }}
              >
                <View style={{ paddingBottom: 20 }}>
                  <Text
                    style={{ fontSize: font.size.font16, textAlign: "center" }}
                  >
                    Are you sure you want to
                  </Text>
                  <Text
                    style={{ fontSize: font.size.font16, textAlign: "center" }}
                  >
                    end your request?
                  </Text>
                </View>
                <View style={{ marginBottom: 20 }}>
                  <RaisedButton text="Yes, End Request" />
                </View>
                <View style={{ marginBottom: 20 }}>
                  <RaisedButton
                    containerStyle={{
                      backgroundColor: colors.white,
                      borderColor: colors.primary,
                      borderWidth: 2,
                    }}
                    textStyle={{ color: colors.primary }}
                    text="Don’t End Request"
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

const NoRequestScreen = () => {
  return (
    <View style={styles.centeredView}>
      <View style={{ alignItems: "center" }}>
        <Feather name="edit" size={50} color={colors.grey2} />
      </View>
      <View>
        <Text
          style={{
            fontSize: font.size.font16,
            fontWeight: "500",
            paddingVertical: 8,
            textAlign: "center",
          }}
        >
          No requests yet
        </Text>
        <Text
          style={{
            fontSize: font.size.font14,
            fontWeight: "300",
            paddingBottom: 8,
            textAlign: "center",
          }}
        >
          Service requests you post
        </Text>
        <Text
          style={{
            fontSize: font.size.font14,
            fontWeight: "300",
            paddingBottom: 16,
            textAlign: "center",
          }}
        >
          will show up here
        </Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <RaisedButton text="Post a job now" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  centeredModalView: {
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

export default RequestScreen;
