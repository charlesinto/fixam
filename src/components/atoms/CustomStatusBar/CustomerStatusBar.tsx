import { FC } from "react";
import {
  Platform,
  StatusBar,
  StatusBarProps,
  StatusBarPropsAndroid,
} from "react-native";

interface IProps extends StatusBarProps {}

const CustomStatusBar: FC<IProps> = ({ backgroundColor, barStyle }) => {
  return Platform.OS === "android" ? (
    <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
  ) : null;
};

export default CustomStatusBar;
