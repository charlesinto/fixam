import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";
import { APP_SCREEN_LIST } from "../constant";
import AccountSelector from "../screens/onboarding/AccountSelector";
import Onboarding from "../screens/onboarding/OnBoarding";
import UserSignUp from "../screens/userSignup/UserSignup";

import UserLogin from "../screens/userLogin/UserLogin";
import HomeScreen from "../screens/home/home";
import RequestScreen from "../screens/request/Request";
import SettingScreen from "../screens/settings/SettingScreen";
import { Ionicons, FontAwesome5, Feather, EvilIcons } from "@expo/vector-icons";
import colors from "../theme/colors";

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
      component={RequestScreen}
    />
    <Tab.Screen
      name={APP_SCREEN_LIST.SETTINGS_SCREEN}
      component={SettingScreen}
    />
  </Tab.Navigator>
);

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
