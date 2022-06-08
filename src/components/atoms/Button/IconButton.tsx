import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

interface IProps extends TouchableOpacityProps {
  hasText?: boolean;
  children: JSX.Element;
}

const IconButton: FC<IProps> = ({ hasText = true, children, onPress }) => {
  return (
    <TouchableOpacity
      style={{ alignItems: "center", flexDirection: "row" }}
      onPress={onPress}
    >
      <View style={styles.container}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary + addOpacity(10),
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
});

export default IconButton;
