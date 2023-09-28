import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { showLoading } from "../redux/reducer/LoadingSlice";
const IconSetting = () => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.push("SettingScreen");
        // dispatch(showLoading());
      }}
      style={{ paddingRight: 20 }}
    >
      <AntDesign name="setting" size={26} color="white" />
    </TouchableOpacity>
  );
};

export default IconSetting;
