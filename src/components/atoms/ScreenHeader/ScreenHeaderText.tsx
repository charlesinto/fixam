import { FC } from "react";
import { View, Text } from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";

interface IProps {
  title: string;
}

const ScreenHeaderText: FC<IProps> = ({ title }) => {
  return (
    <View style={{ paddingTop: 20, paddingBottom: 30 }}>
      <Text
        style={{
          textAlign: "center",
          color: colors.black,
          fontSize: font.size.font18,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default ScreenHeaderText;
