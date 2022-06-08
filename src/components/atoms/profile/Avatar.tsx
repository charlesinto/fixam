import { FC } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ViewStyle,
  ImageStyle,
} from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";

const profileLogo = require("../../../../assets/images/profile.png");

interface IProps {
  rating?: string | number;
  imageUrl?: string;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  size?: number;
}

const Avatar: FC<IProps> = ({
  rating,
  imageUrl,
  containerStyle,
  imageStyle,
  size = 80,
}) => {
  const width = size;
  const height = size;
  return (
    <View
      style={[
        styles.avatarContainer,
        { width, height, borderRadius: width / 2 },
        containerStyle,
      ]}
    >
      <Image
        source={imageUrl ? { uri: imageUrl } : profileLogo}
        style={[
          {
            width: width - 2,
            height: width - 2,
            borderRadius: (width - 2) / 2,
          },
          imageStyle,
        ]}
        resizeMethod="auto"
        resizeMode="cover"
      />
      <View style={[styles.ratingWrapper, { left: width / 2 - 15 }]}>
        <Text
          style={{
            fontSize: font.size.font10,
            color: "#246F18",
            fontWeight: "600",
          }}
        >
          {rating}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.white,
    shadowColor: "#357EDF",
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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

export default Avatar;
