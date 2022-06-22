import { useNavigation } from "@react-navigation/native";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors, { addOpacity } from "../../../theme/colors";
import font from "../../../theme/font";

interface IProps extends TouchableOpacityProps {
  hasText?: boolean;
  containerStyle?: ViewStyle;
  title?: string;
}

const BackButton: FC<IProps> = ({
  hasText = true,
  containerStyle,
  title = "Go Back",
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ alignItems: "center", flexDirection: "row" }}
      onPress={() => navigation.goBack()}
    >
      <View style={[styles.container, containerStyle]}>
        <Ionicons name="arrow-back" size={24} color={colors.primary} />
      </View>
      {hasText && (
        <View style={{ paddingLeft: 8 }}>
          <Text style={{ fontSize: font.size.font14, color: colors.black }}>
            {title}
          </Text>
        </View>
      )}
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

export default BackButton;
