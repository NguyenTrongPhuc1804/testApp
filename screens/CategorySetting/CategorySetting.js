import { View, Text } from "react-native";
import React from "react";
import CategoryToggle from "../../component/CategoryToggle";

const CategorySetting = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View
        style={{
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          height: "100%",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Danh muc
        </Text>
        <View style={{ flex: 1, marginTop: 20, padding: 20 }}>
          <CategoryToggle />
          <CategoryToggle />
          <CategoryToggle />
        </View>
      </View>
    </View>
  );
};

export default CategorySetting;
