import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import colors, { addOpacity } from "../../../theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import TextButton from "../../../components/atoms/Button/TextButton";
import RaisedButton from "../../../components/atoms/Button/RaisedButton";
import font from "../../../theme/font";
import Swiper from "react-native-swiper";
import useDimension from "../../../hooks/useDimension";
import AppIntroSlider from "react-native-app-intro-slider";
import { APP_SCREEN_LIST, DEVICE_FULL_WIDTH } from "../../../constant";
import { FC, useEffect, useRef, useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import CustomStatusBar from "../../../components/atoms/CustomStatusBar/CustomerStatusBar";

const brush = require("../../../../assets/images/brush.png");
const logo = require("../../../../assets/images/fixam.png");
const nailMachine = require("../../../../assets/images/nailmachine.png");
const wrench = require("../../../../assets/images/wrench.png");

const slides = [
  {
    imageUrl: brush,
    title: "New vicinity?",
    subTitle: "you’d still get things fixed",
  },
  {
    imageUrl: nailMachine,
    title: "Want artisans?",
    subTitle: "we can get you one close by",
  },
  {
    imageUrl: wrench,
    title: "Credible work?",
    subTitle: "view ratings and choose the best",
  },
];

interface IProps {
  navigation: NavigationProp<any, any>;
}

const Onboarding: FC<IProps> = ({ navigation }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  let sliderRef = useRef() as unknown as AppIntroSlider<{
    imageUrl: any;
    title: string;
    subTitle: string;
  }> | null;
  const _renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.slide1}>
        <View style={{ flex: 1 }}>
          <View style={styles.bannerImageWrapper}>
            <Image
              source={item.imageUrl}
              resizeMethod="auto"
              resizeMode="cover"
              style={styles.imageStyle}
            />
          </View>

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subTitle}>{item.subTitle}</Text>
        </View>
      </View>
    );
  };
  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
  };
  const onSlideChange = (currIndex: number, lastIndex: number) => {
    setSlideIndex(currIndex);
  };
  const isLastSlide = slideIndex === slides.length - 1;

  const hanldeOnPress = () => {
    if (!isLastSlide) return setSlideIndex((state) => state + 1);
    const accountPage = APP_SCREEN_LIST.ACCOUNT_SELECTOR_SCREEN as string;
    navigation.navigate(accountPage);
  };

  useEffect(() => {
    sliderRef?.goToSlide(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    sliderRef?.goToSlide(slideIndex);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.contiainer}>
        <CustomStatusBar
          backgroundColor={`#357EDF${addOpacity(60)}`}
          barStyle="light-content"
        />
        <LinearGradient
          colors={[
            `#357EDF${addOpacity(16)}`,
            `#357EDF${addOpacity(3.04)}`,
            `#357EDF${addOpacity(0)}`,
          ]}
          style={{ flex: 1, paddingTop: 10 }}
        >
          <View style={styles.logoBannerWrapper}>
            <Image
              source={logo}
              style={styles.logo}
              resizeMethod="auto"
              resizeMode="contain"
            />
            <TextButton content={"Skip"} />
          </View>
          <View style={{ flex: 1 }}>
            <AppIntroSlider
              renderItem={_renderItem}
              data={slides}
              onDone={_onDone}
              style={{ flex: 1 }}
              onSlideChange={onSlideChange}
              renderPagination={({}) => <></>}
              ref={(ref) => (sliderRef = ref)}
            ></AppIntroSlider>
          </View>

          <View style={{ paddingHorizontal: 30 }}>
            <RaisedButton
              text={isLastSlide ? "Get Started" : "Next"}
              onPressHanlder={hanldeOnPress}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 30,
              flexDirection: "row",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            <StepperProgress isActive={slideIndex >= 0} />
            <StepperProgress isActive={slideIndex >= 1} />
            <StepperProgress isActive={slideIndex >= 2} />
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

interface IStepperProps {
  isActive?: boolean;
}

export const StepperProgress: FC<IStepperProps> = ({ isActive }) => {
  return (
    <View
      style={{
        backgroundColor: isActive ? colors.primary : "#84b2ec",
        height: 6,
        flex: 1,
        marginRight: 8,
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: font.size.font40,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: font.size.font12,
    textAlign: "center",
    fontWeight: "400",
    marginBottom: 10,
    color: colors.textGrey,
  },
  contiainer: {
    backgroundColor: colors.white,
    flex: 1,

    paddingBottom: 20,
  },
  logoBannerWrapper: {
    paddingHorizontal: 30,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  slide3: {
    flex: 1,
  },
  logo: {
    width: 120,
    height: 40,
  },
  imageStyle: {
    width: DEVICE_FULL_WIDTH / 2 > 350 ? DEVICE_FULL_WIDTH / 2 : 350,
    height: DEVICE_FULL_WIDTH / 2 < 300 ? 300 : DEVICE_FULL_WIDTH / 2,
  },
  bannerImageWrapper: {
    alignItems: "flex-end",
    justifyContent: "center",
    flex: 1,
  },
});

export default Onboarding;
