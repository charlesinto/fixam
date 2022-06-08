import { FC } from "react";
import {
  ButtonProps,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { IService } from "../../../screens/user/home/home";
import colors from "../../../theme/colors";
import font from "../../../theme/font";
import { AntDesign } from "@expo/vector-icons";

interface IProps extends TouchableOpacityProps {
  item: IService;
  selectMode?: boolean;
  selected?: boolean;
  onSelect?: (id: number) => void;
}

const ServiceCard: FC<IProps> = ({
  item,
  onSelect,
  selectMode,
  selected,
  onLongPress,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={selected && selectMode ? styles.cardSelected : styles.card}
      onPress={(e) =>
        selectMode && onSelect
          ? onSelect(item.id)
          : onPress
          ? onPress(e)
          : () => {}
      }
      onLongPress={onLongPress}
    >
      <ImageBackground
        style={[
          {
            flex: 1,
            justifyContent: "flex-end",
            padding: 4,
            position: "relative",
          },
        ]}
        source={item.url}
        resizeMethod="auto"
        resizeMode="cover"
      >
        {selectMode && <SelectModeIndicator isSelected={selected} />}
        <Text
          style={{
            color: colors.white,
            fontSize: font.size.font10,
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: "900",
          }}
        >
          {item.serviceName}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

interface ISelectModeProps {
  isSelected?: boolean;
}

const SelectModeIndicator: FC<ISelectModeProps> = ({ isSelected }) => {
  return (
    <View
      style={
        isSelected
          ? styles.selectModeIndicatorStyles
          : styles.unSelectedModeIndicatorStyles
      }
    >
      {isSelected && (
        <AntDesign name="check" size={18} color={colors.secondary} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  unSelectedModeIndicatorStyles: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
  },
  selectModeIndicatorStyles: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  card: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // minWidth: "33%",
    padding: 4,
    minHeight: 100,
    backgroundColor: "#fff",
    marginRight: 8,
    marginBottom: 8,
    flex: 1 / 3,
  },
  cardSelected: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    // minWidth: "33%",
    borderWidth: 4,
    borderColor: colors.secondary,
    minHeight: 100,
    backgroundColor: "#fff",
    marginRight: 8,
    marginBottom: 8,
    flex: 1 / 3,
  },
});

export default ServiceCard;
