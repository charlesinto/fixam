import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { APP_SCREEN_LIST } from "../constant";
import AccountSelector from "../screens/user/onboarding/AccountSelector";
import Onboarding from "../screens/user/onboarding/OnBoarding";
import UserSignUp from "../screens/user/userSignup/UserSignup";

import UserLogin from "../screens/user/userLogin/UserLogin";
import HomeScreen from "../screens/user/home/home";
import RequestScreen from "../screens/user/request/Request";
import SettingScreen from "../screens/user/settings/SettingScreen";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  EvilIcons,
} from "@expo/vector-icons";
import colors from "../theme/colors";
import ServiceCategoryPage from "../screens/user/serviceCategoryPage/ServiceCategory";
import ArtesanSearchPage from "../screens/user/artiesanSearch/ArtisanSearch";
import ArtisanFoundList from "../screens/user/artesanList/ArtesanFoundList";
import ArtisanProfile from "../screens/user/artisanProfile/ArtisanProfile";
import ArtisanSignup from "../screens/artisan/artisanSignup/artisanSignup";
import ArtisanLogin from "../screens/artisan/artisanLogin/artisanLogin";
import ArtisanSkillPicker from "../screens/artisan/artisanSignup/artisanSkillPicker";
import ArtisanProfileSetup from "../screens/artisan/artisanSignup/artisanSetupProfile";
import ArtisanUploadID from "../screens/artisan/artisanSignup/artisanUploadID";
import ArtisanHomeScreen from "../screens/artisan/home/home";
import ArtisanMoreScreen from "../screens/artisan/more/more";
import ArtisanRequestScreen from "../screens/artisan/request/request";
import JobRequestScreen from "../screens/artisan/JobRequest/JobRequest";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppHomeNavigation: FC<{ initialRouteName?: string }> = ({
  initialRouteName,
}) => (
  <Tab.Navigator
    initialRouteName={APP_SCREEN_LIST.HOME_SCREEN}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Home") {
          return (
            <FontAwesome5 name="headphones-alt" size={size} color={color} />
          );
        } else if (route.name === "Settings") {
          return <EvilIcons name="gear" size={size} color={color} />;
        } else if (route.name === "Requests") {
          return <Feather name="edit" size={size} color={color} />;
        }

        // You can return any component that you like here!
        return null;
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    })}
  >
    <Tab.Screen name={APP_SCREEN_LIST.HOME_SCREEN} component={HomeScreen} />
    <Tab.Screen
      name={APP_SCREEN_LIST.REQUESTS_SCREEN}
      component={RequestNavigation}
    />
    <Tab.Screen
      name={APP_SCREEN_LIST.SETTINGS_SCREEN}
      component={SettingScreen}
    />
  </Tab.Navigator>
);

const ArtisanHomeNavigator: FC<{ initialRouteName?: string }> = ({
  initialRouteName,
}) => (
  <Tab.Navigator
    initialRouteName={APP_SCREEN_LIST.ARTISAN_HOME_HOME}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === APP_SCREEN_LIST.ARTISAN_HOME_HOME) {
          return (
            <MaterialCommunityIcons
              name="toolbox-outline"
              size={size}
              color={color}
            />
          );
        } else if (route.name === APP_SCREEN_LIST.ARTISAN_MORE_SCREEN) {
          return <Feather name="more-horizontal" size={24} color="black" />;
        } else if (route.name === APP_SCREEN_LIST.ARTISAN_REQUEST_SCREEN) {
          return <Feather name="edit" size={size} color={color} />;
        }

        // You can return any component that you like here!
        return null;
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: "gray",
      headerShown: false,
    })}
  >
    <Tab.Screen
      name={APP_SCREEN_LIST.ARTISAN_HOME_HOME}
      component={ArtisanHomeScreen}
      options={{ title: "Job Requests" }}
    />
    <Tab.Screen
      name={APP_SCREEN_LIST.ARTISAN_REQUEST_SCREEN}
      component={ArtisanRequestScreen}
      options={{ title: "History" }}
    />
    <Tab.Screen
      name={APP_SCREEN_LIST.ARTISAN_MORE_SCREEN}
      component={ArtisanMoreScreen}
      options={{ title: "More" }}
    />
  </Tab.Navigator>
);

const RequestNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={APP_SCREEN_LIST.REQUEST_SCREEN_LIST}
    >
      <Stack.Screen
        name={APP_SCREEN_LIST.REQUEST_SCREEN_LIST}
        component={RequestScreen}
      />
    </Stack.Navigator>
  );
};

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={APP_SCREEN_LIST.ONBOARDING_SCREEN}
      >
        <Stack.Screen
          name={APP_SCREEN_LIST.ONBOARDING_SCREEN}
          component={Onboarding}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ACCOUNT_SELECTOR_SCREEN}
          component={AccountSelector}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.USER_SIGNUP_SCREEN}
          component={UserSignUp}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.USER_SIGNIN_SCREEN}
          component={UserLogin}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.MAIN_SCREEN}
          component={AppHomeNavigation}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.SERVICE_CATGORIES_PAGE}
          component={ServiceCategoryPage}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTESAN_SEARCH_SCREEN}
          component={ArtesanSearchPage}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTESAN_FOUND_LIST}
          component={ArtisanFoundList}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTSEAN_PROFILE_SCREEN}
          component={ArtisanProfile}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTSEAN_LOGIN_SCREEN}
          component={ArtisanLogin}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTSEAN_SIGNUP_SCREEN}
          component={ArtisanSignup}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARISAN_SKILL_PICKER}
          component={ArtisanSkillPicker}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTISAN_PROFILE_SETUP}
          component={ArtisanProfileSetup}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTISAN_UPLOAD_ID}
          component={ArtisanUploadID}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTISAN_HOME}
          component={ArtisanHomeNavigator}
        />
        <Stack.Screen
          name={APP_SCREEN_LIST.ARTISAN_JOB_REQUEST_DETAIL_SCREEN}
          component={JobRequestScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
