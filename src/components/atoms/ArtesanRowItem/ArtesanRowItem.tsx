import { Box } from "native-base";
import { FC } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";
import FlatButton from "../Button/FlatButton";
import Avatar from "../profile/Avatar";

const profile = require("../../../../assets/images/profile.png");

interface IProps extends TouchableOpacityProps, IArtisan {}

export interface IArtisan {
  id?: string | number;
  name?: string;
  rating?: string;
  distance?: string;
  reviewCount?: string;
  imageUrl?: string;
}

const ArtesanRowItem: FC<IProps> = ({
  name = "Tolu Adesina",
  rating = "4.2",
  distance = "500M",
  reviewCount = 4,
  imageUrl,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }} onPress={onPress}>
      <Box
        borderColor="coolGray.200"
        style={[styles.contianer, { elevation: 4, paddingHorizontal: 8 }]}
        borderWidth="1"
        rounded={"md"}
      >
        <Avatar rating={rating} imageUrl={imageUrl} size={60} />
        <View
          style={{ flex: 1, marginHorizontal: 16, justifyContent: "center" }}
        >
          <Text
            style={{
              fontSize: font.size.font16,
              fontWeight: "500",
              color: colors.black,
            }}
          >
            {name}
          </Text>
          <View style={{ marginTop: 10, flexDirection: "row" }}>
            <Text
              style={{
                color: colors.textGrey,
                fontSize: font.size.font12,
                fontWeight: "400",
              }}
            >
              {distance} away
            </Text>
            <Text
              style={{
                color: colors.textGrey,
                fontSize: font.size.font20,
                fontWeight: "400",
                marginHorizontal: 4,
              }}
            ></Text>
            <Text
              style={{
                color: colors.textGrey,
                fontSize: font.size.font12,
                fontWeight: "400",
              }}
            >
              {reviewCount} reviews
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center" }}>
          <FlatButton
            containerStyle={{
              backgroundColor: colors.primary,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 2,
              elevation: 0,
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0,
              shadowRadius: 0,
            }}
            onPressHanlder={onPress}
          >
            <Text style={{ color: colors.white, fontSize: font.size.font12 }}>
              View
            </Text>
          </FlatButton>
        </View>
      </Box>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contianer: {
    width: "100%",
    paddingVertical: 14,
    marginBottom: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 3, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 4,
    backgroundColor: colors.white,
    flexDirection: "row",
  },
  ratingWrapper: {
    position: "absolute",
    bottom: -5,
    left: 25,
    width: 30,
    height: 20,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ArtesanRowItem;
