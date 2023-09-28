import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { COLOR } from "../constants/color";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
const ProductGrid = ({ data }) => {
  const navigate = useNavigation();
  useEffect(() => {}, [data]);
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.push("ProductDetailScreen", {
          name: data.title,
          data: data,
        });
      }}
      style={{
        flex: 1,
        backgroundColor: COLOR.second,
        borderRadius: 20,
        height: 200,
      }}
    >
      <View style={{ flex: 3 }}>
        <Image
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
          source={{
            uri: data?.thumb,
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          paddingHorizontal: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: COLOR.primary,
            fontWeight: "bold",
            marginBottom: 12,
          }}
          numberOfLines={2}
        >
          {data?.title}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="clockcircleo" size={18} color="black" />
          <Text style={{ marginLeft: 5 }}>
            {moment(data?.created_at).format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductGrid;
