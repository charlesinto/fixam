import { FC } from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

interface IProps {
  content?: string;
  onPressHandler?: () => void;
  textStyle?: TextStyle | ViewStyle;
  containerStyle?: ViewStyle;
}

const TextButton: FC<IProps> = ({
  content,
  onPressHandler,
  textStyle,
  containerStyle,
}) => {
  const [fontLoaded] = useFonts({ Lato_400Regular });

  if (!fontLoaded) return null;
  return (
    <TouchableOpacity onPress={onPressHandler} style={containerStyle}>
      <Text style={[{ ...styles.buttonTextStyle }, textStyle]}>{content}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonTextStyle: {
    color: colors.primary,
    fontSize: font.size.font16,
    fontWeight: "600",
  },
});

export default TextButton;
