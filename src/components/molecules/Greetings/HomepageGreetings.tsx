import { View, Text, StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import font from "../../../theme/font";
import DefaultGreetings from "./DefaultGreetings";

const HomePageGreetings = () => {
  return (
    <View>
      <DefaultGreetings />
      <Text style={styles.title}>Which artisan do</Text>
      <Text style={styles.title}> you need today?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: font.size.font34,
    color: colors.black,
    fontWeight: "700",
  },
});

export default HomePageGreetings;
