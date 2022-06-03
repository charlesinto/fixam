import { Children, FC } from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Text,
} from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";
import { useFonts, Lato_700Bold } from "@expo-google-fonts/lato";

interface IProps {
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  onPressHanlder?: () => void;
  children?: JSX.Element;
}

const FlatButton: FC<IProps> = ({
  containerStyle,
  textStyle,
  onPressHanlder,
  children,
}) => {
  let [fontsLoaded] = useFonts({
    Lato_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity
      style={[styles.buttonWrapperStyle, containerStyle]}
      onPress={onPressHanlder}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapperStyle: {
    backgroundColor: colors.primary,
    elevation: 4,
    alignItems: "center",
    paddingVertical: 14,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textStyle: {
    color: colors.white,

    fontSize: font.size.font14,
    fontWeight: "600",
  },
});

export default FlatButton;
