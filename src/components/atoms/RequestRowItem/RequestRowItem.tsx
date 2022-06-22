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

const serviceDefaultImage = require("../../../../assets/images/plumber.png");

interface IProps extends TouchableOpacityProps {
  title: string;
  description: string;
  numberOfBidReceived: number;
  onRequestEnd?: (id: string) => void;
  imageServiceUrl?: string;
  id: string;
}

const RequestRowItem: FC<IProps> = ({
  title,
  description,
  numberOfBidReceived,
  onRequestEnd,
  imageServiceUrl,
  id,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => (onRequestEnd ? onRequestEnd(id) : () => {})}
    >
      <Image
        source={
          imageServiceUrl ? { uri: imageServiceUrl } : serviceDefaultImage
        }
        style={{ maxWidth: 100 }}
        resizeMethod="auto"
        resizeMode="cover"
      />
      <View style={styles.contentWrapper}>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  color: "#494949",
                  fontSize: font.size.font14,
                  fontWeight: "500",
                }}
              >
                {title}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: colors.red + addOpacity(10),
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 24,
                maxWidth: 120,
              }}
            >
              <Text
                style={{
                  fontSize: font.size.font10,
                  color: colors.red,
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                End Request
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
              {description}
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

export default RequestRowItem;
