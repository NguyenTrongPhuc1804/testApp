import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const IconDrawer = () => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.openDrawer();
      }}
      style={{ paddingLeft: 20 }}
    >
      <Feather name="menu" size={24} color="white" />
    </TouchableOpacity>
  );
};

export default IconDrawer;
