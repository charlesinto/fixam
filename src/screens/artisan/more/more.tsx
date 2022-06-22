import { SafeAreaView } from "react-native";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";
import ArtisanTabHeader from "../../../components/molecules/TabHeader/ArtisanTabHeader";
import colors from "../../../theme/colors";

const ArtisanMoreScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomStatusBar
        barStyle={"dark-content"}
        backgroundColor={colors.white}
      />
      <ArtisanTabHeader />
    </SafeAreaView>
  );
};

export default ArtisanMoreScreen;
