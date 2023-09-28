import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import DScreen from "../screens/DScreen/DScreen";
import { Feather } from "@expo/vector-icons";
import { COLOR } from "../constants/color";
import IconDrawer from "../component/IconDrawer";
import SettingScreen from "../screens/Setting/SettingScreen";
import IconSetting from "../component/IconSetting";

const SettingNavigation = () => {
  const SettingStack = createStackNavigator();

  return (
    <SettingStack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLOR.primary,
        },
        headerTintColor: "white",
      }}
    >
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          title: "Cài đặt",
          headerLeft: () => {
            return <IconDrawer />;
          },
          headerRight: () => {
            return <IconSetting />;
          },
        }}
      />
    </SettingStack.Navigator>
  );
};

export default SettingNavigation;
