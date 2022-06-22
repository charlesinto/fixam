import { FC } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors, { addOpacity } from "../../../theme/colors";

interface IProps {
  isVisible?: boolean;
  onClose: () => void;
  headerComponent: JSX.Element;
  bodyComponent: JSX.Element;
}

const CustomModal: FC<IProps> = ({
  isVisible = false,
  onClose,
  headerComponent,
  bodyComponent,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onClose()}
    >
      <TouchableOpacity
        onPress={() => onClose()}
        style={{ flex: 1 }}
        activeOpacity={1}
      >
        <View style={styles.centeredModalView}>
          <View style={styles.modalView}>
            <View
              style={{
                backgroundColor: colors.primary + addOpacity(15),
                paddingVertical: 20,
              }}
            >
              {headerComponent}
            </View>
            <View
              style={{
                paddingVertical: 30,
                paddingHorizontal: 16,
                backgroundColor: colors.white,
              }}
            >
              {bodyComponent}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: colors.white,
    shadowColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: 400,
    width: "90%",
  },
});

export default CustomModal;
