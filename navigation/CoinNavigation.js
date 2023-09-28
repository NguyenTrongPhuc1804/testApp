import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import DScreen from "../screens/DScreen/DScreen";
import { Feather } from "@expo/vector-icons";
import { COLOR } from "../constants/color";
import IconDrawer from "../component/IconDrawer";
import GoldScreen from "../screens/Gold/GoldScreen";
import CoinScreen from "../screens/Coin/CoinScreen";
import IconSetting from "../component/IconSetting";

const CoinNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLOR.primary,
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="CoinScreen"
        component={CoinScreen}
        options={{
          title: "Giá coin",
          headerLeft: () => {
            return <IconDrawer />;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CoinNavigation;
