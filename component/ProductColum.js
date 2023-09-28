import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLOR } from "../constants/color";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
const ProductColum = ({ data }) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigate.push("ProductDetailScreen", {
          name: data.title,
          data: data,
        });
      }}
      style={{
        flexDirection: "row",
        borderRadius: 20,
        flex: 1,
        backgroundColor: "white",
        marginBottom: 15,
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}
          source={{
            uri: data?.thumb,
          }}
        ></Image>
      </View>
      <View style={{ flex: 1.5, padding: 15 }}>
        <Text
          style={{
            fontSize: 16,
            color: COLOR.primary,
            fontWeight: "bold",
            marginBottom: 12,
          }}
          numberOfLines={2}
        >
          {data?.title}
        </Text>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign name="calendar" size={18} color="black" />
            <Text style={{ marginLeft: 10 }}>
              {moment(data?.created_at).format("DD/MM/YYYY")}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <AntDesign name="clockcircleo" size={18} color="black" />
            <Text style={{ marginLeft: 10 }}>
              {moment(data?.created_at).format(" h:mm:ss a")}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductColum;
