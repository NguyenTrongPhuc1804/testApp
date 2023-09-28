import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { COLOR } from "../constants/color";
import HomeScreen from "../screens/Home/HomeScreen";
import DScreen from "../screens/DScreen/DScreen";
import { Feather } from "@expo/vector-icons";
import IconDrawer from "../component/IconDrawer";
import GoldScreen from "../screens/Gold/GoldScreen";
import IconSetting from "../component/IconSetting";

const PriceGoldNavigation = () => {
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
        name="GoldScreen"
        component={GoldScreen}
        options={{
          title: "Giá vàng",
          headerLeft: () => {
            return <IconDrawer />;
          },
        }}
      />
      <Stack.Screen name="dScreen" component={DScreen} />
    </Stack.Navigator>
  );
};

export default PriceGoldNavigation;
