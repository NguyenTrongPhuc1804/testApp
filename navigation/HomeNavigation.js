import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home/HomeScreen";
import DScreen from "../screens/DScreen/DScreen";
import { COLOR } from "../constants/color";
import { Feather } from "@expo/vector-icons";
import IconDrawer from "../component/IconDrawer";
import CategoryScreen from "../screens/Category/CategoryScreen";
import ProductDetailScreen from "../screens/ProductDetail/ProductDetailScreen";
import GoldScreen from "../screens/Gold/GoldScreen";
import CategorySetting from "../screens/CategorySetting/CategorySetting";
import SettingScreen from "../screens/Setting/SettingScreen";
import IconSetting from "../component/IconSetting";
const Stack = createStackNavigator();
const HomeNavigation = () => {
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
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Trang chu",
          headerTitleAlign: "center",
          headerLeft: () => {
            return <IconDrawer />;
          },
          headerRight: () => {
            return <IconSetting />;
          },
        }}
      />
      <Stack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
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
    </Stack.Navigator>
  );
};

export default HomeNavigation;
