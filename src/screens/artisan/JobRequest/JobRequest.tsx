import { NavigationProp } from "@react-navigation/native";
import { View } from "native-base";
import { FC, useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text } from "react-native";
import SvgUri from "react-native-svg-uri";
import FlatButton from "../../../components/atoms/Button/FlatButton";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import CustomModal from "../../../components/molecules/Modal/CustomModal";
import TabHeaderJobDetail from "../../../components/molecules/TabHeader/TabHeaderJobDetail";
import { APP_SCREEN_LIST } from "../../../constant";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

const call = require("../../../../assets/images/call.png");
const chat = require("../../../../assets/images/chat.png");

interface IProps {
  navigation: NavigationProp<any, any>;
}

const sendIcon = require("../../../../assets/images/send.png");

const JobRequestScreen: FC<IProps> = ({ navigation }) => {
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
          source={sendIcon}
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
          Bid Sent
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
          You can contact your client
        </Text>
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
              <Image
                source={call}
                style={{ width: 60 }}
                resizeMethod="auto"
                resizeMode="contain"
              />
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
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={chat}
                style={{ width: 60, marginTop: 20 }}
                resizeMethod="auto"
                resizeMode="contain"
              />
              <Text
                style={{
                  color: colors.black,
                  fontSize: font.size.font14,
                  paddingTop: 20,
                }}
              >
                Chat artisan
              </Text>
            </View>
          </FlatButton>
        </View>
        <View style={{ marginVertical: 20 }}>
          <RaisedButton
            text="Okay, cool"
            onPressHanlder={() => {
              setIsModalVisible(false);
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar />
      <TabHeaderJobDetail
        pageTitle="Job Request"
        header="Fix pipes and taps"
        subHeader="posted 10mins ago"
      />
      <View style={{ flex: 1, paddingHorizontal: 16, paddingTop: 80 }}>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: colors.primary, fontSize: font.size.font14 }}>
            Client
          </Text>
          <Text
            style={{
              color: colors.black,
              fontSize: font.size.font18,
              fontWeight: "600",
              paddingTop: 10,
            }}
          >
            Gift Peters
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: colors.primary, fontSize: font.size.font14 }}>
            Address
          </Text>
          <Text
            style={{
              color: colors.black,
              fontSize: font.size.font18,
              fontWeight: "600",
              paddingTop: 10,
            }}
          >
            No. 32, Egbeda Street, Agungi, Lagos.
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: colors.primary, fontSize: font.size.font14 }}>
            Time Posted
          </Text>
          <Text
            style={{
              color: colors.black,
              fontSize: font.size.font18,
              fontWeight: "600",
              paddingTop: 10,
            }}
          >
            Feb 1, 2022 · 10:00am
          </Text>
        </View>
        <View style={{ marginBottom: 30 }}>
          <Text style={{ color: colors.primary, fontSize: font.size.font14 }}>
            No. of bids left
          </Text>
          <Text
            style={{
              color: colors.black,
              fontSize: font.size.font18,
              fontWeight: "600",
              paddingTop: 10,
            }}
          >
            (2) more to go
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 16, paddingBottom: 20 }}>
        <RaisedButton
          text="Bid for job"
          onPressHanlder={() => setIsModalVisible(true)}
        />
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

const styles = StyleSheet.create({});

export default JobRequestScreen;
