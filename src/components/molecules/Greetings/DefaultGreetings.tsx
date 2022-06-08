import { Text, View } from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";

const DefaultGreetings = () => {
  return (
    <View style={{ marginBottom: 10 }}>
      <Text
        style={{
          fontSize: font.size.font16,
          fontWeight: "500",
          color: colors.grey2,
        }}
      >
        Good afternoon, Ben
      </Text>
    </View>
  );
};

export default DefaultGreetings;
