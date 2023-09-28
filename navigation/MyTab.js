import { View, Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./HomeNavigation";
import PriceGoldNavigation from "./PriceGoldNavigation";
import { COLOR } from "../constants/color";
import CoinNavigation from "./CoinNavigation";
import SettingNavigation from "./SettingNavigation";
import CategorySetting from "../screens/CategorySetting/CategorySetting";
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Coin":
              iconName = focused ? "card" : "card-outline";
              break;
            case "Gold":
              iconName = focused ? "stats-chart" : "stats-chart-outline";
              break;
            // case "Setting1":
            //   iconName = focused ? "stats-chart" : "stats-chart-outline";
            //   break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLOR.second,
        tabBarInactiveTintColor: COLOR.second,
        tabBarStyle: {
          backgroundColor: COLOR.primary,
          height: 65,
          padding: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Gold" component={PriceGoldNavigation} />
      <Tab.Screen name="Coin" component={CoinNavigation} />
      {/* <Tab.Screen name="Setting1" component={SettingNavigation} /> */}
    </Tab.Navigator>
  );
};

export default MyTab;
