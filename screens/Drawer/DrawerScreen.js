import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { COLOR } from "../../constants/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const DrawerScreen = (props) => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: COLOR.primary }}>
      <View
        style={{ height: 220, justifyContent: "center", alignItems: "center" }}
      >
        <Image
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={{
            uri: "https://images.unsplash.com/photo-1511268594014-0e9d3ea5c33e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
          }}
        />
        <Text style={{ fontSize: 28, fontWeight: "bold", color: COLOR.second }}>
          Bao moi
        </Text>
      </View>
      <DrawerContentScrollView
        {...props}
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      >
        <DrawerItem
          focused={active == "Home" ? true : false}
          activeTintColor={COLOR.primary}
          icon={({ focused, color, size }) => (
            <Ionicons
              color={color}
              size={size}
              name={focused ? "home" : "home-outline"}
            />
          )}
          label="Trang chủ"
          onPress={() => {
            setActive("Home");
            navigate.navigate("Home");
          }}
        />
        <DrawerItem
          focused={active == "Gold" ? true : false}
          activeTintColor={COLOR.primary}
          icon={({ focused, color, size }) => (
            <Ionicons
              color={color}
              size={size}
              name={focused ? "stats-chart" : "stats-chart-outline"}
            />
          )}
          label="Giá vàng"
          onPress={() => {
            setActive("Gold");
            navigate.navigate("Gold");
          }}
        />
        <DrawerItem
          focused={active == "Coin" ? true : false}
          activeTintColor={COLOR.primary}
          icon={({ focused, color, size }) => (
            <Ionicons
              color={color}
              size={size}
              name={focused ? "card" : "card-outline"}
            />
          )}
          label="Giá coin"
          onPress={() => {
            setActive("Coin");
            navigate.navigate("Coin");
          }}
        />
        <DrawerItem
          focused={active == "Setting" ? true : false}
          activeTintColor={COLOR.primary}
          icon={({ focused, color, size }) => (
            <Ionicons
              color={color}
              size={size}
              name={focused ? "settings" : "settings-outline"}
            />
          )}
          label="Cài đặt"
          onPress={() => {
            setActive("Setting");
            navigate.navigate("Setting");
          }}
        />
        {/* <DrawerItemList {...props} /> */}
      </DrawerContentScrollView>
      <View
        style={{
          height: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 16, color: "white" }}>Copy right name</Text>
      </View>
    </View>
  );
};

export default DrawerScreen;
