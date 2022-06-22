import { FC } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

const briefcase = require("../../../../assets/images/briefcase.png");

interface IProps {
  distance: string;
  title: string;
  numberOfBidReceived: number;
  onPress?: (id: string) => void;
  id: string;
}

const JobRowItem: FC<IProps> = ({
  distance,
  title,
  numberOfBidReceived,
  onPress,
  id,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (onPress ? onPress(id) : () => {})}
    >
      <View
        style={{
          backgroundColor: colors.primary,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={briefcase}
          style={{ width: 40 }}
          resizeMethod="auto"
          resizeMode="contain"
        />
      </View>
      <View style={styles.contentWrapper}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#494949",
                  fontSize: font.size.font14,
                  fontWeight: "400",
                }}
              >
                {distance}
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: font.size.font18,
                color: colors.black,
                fontWeight: "600",
              }}
            >
              {title}
            </Text>
            <View
              style={{
                backgroundColor: colors.primary + addOpacity(10),
                borderRadius: 24,
                paddingHorizontal: 12,
                paddingVertical: 4,
                maxWidth: 124,
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontSize: font.size.font10,
                  color: colors.primary,
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                {numberOfBidReceived} {numberOfBidReceived > 1 ? "bids" : "bid"}{" "}
                received
              </Text>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center" }}>
          <View
            style={{
              backgroundColor: colors.white,
              paddingHorizontal: 12,
              paddingVertical: 5,
              borderRadius: 4,
              maxWidth: 120,
            }}
          >
            <Text
              style={{
                fontSize: font.size.font10,
                color: colors.primary,
                textAlign: "center",
                fontWeight: "400",
              }}
            >
              View
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.textGrey,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 10,
  },
});

export default JobRowItem;
