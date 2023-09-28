import { View, Text, Switch } from "react-native";
import React, { useEffect, useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import { COLOR } from "../constants/color";
import { useDispatch, useSelector } from "react-redux";
import { settingHome } from "../redux/reducer/SettingSlice";

const CategoryToggle = ({ data }) => {
  const dispatch = useDispatch();
  const { home } = useSelector((state) => state.SettingSlice);
  const [valueCheck, setValueCheck] = useState("");
  const [isToggle, setIsToggle] = useState(false);
  const item = home?.find((item) => item.id === data.id);
  const handleChange = (value) => {
    setValueCheck(value);
    dispatch(
      settingHome({
        id: data.id,
        type: value,
        status: isToggle,
      })
    );
  };
  const handleSwitch = (item) => {
    setIsToggle(!isToggle);
    dispatch(
      settingHome({
        id: data.id,
        type: valueCheck,
        status: !isToggle,
      })
    );
  };
  useEffect(() => {
    item?.status && setIsToggle(true);
    item?.type && setValueCheck(item?.type);
  }, []);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderTopWidth: 1,
      }}
    >
      <Text style={{ fontSize: 16 }}>{data.name}</Text>
      <RNPickerSelect
        onValueChange={(value) => {
          handleChange(value);
        }}
        useNativeAndroidPickerStyle={false}
        fixAndroidTouchableBug={true}
        placeholder={{ label: "Kieu hien thi", value: null }}
        items={[
          { label: "Kiểu lưới", value: "colum" },
          { label: "Kiểu 2 cột", value: "grid" },
        ]}
        value={valueCheck}
      />
      <Switch
        value={isToggle}
        onValueChange={(value) => handleSwitch(value)}
        trackColor={{ false: "#767577", true: COLOR.primary }}
      />
    </View>
  );
};

export default CategoryToggle;
