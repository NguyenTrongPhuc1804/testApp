import { View, Text, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { WebView } from "react-native-webview";
const ProductDetailScreen = () => {
  const route = useRoute();
  const { data } = route.params;
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1.2 }}>
        <Image
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: data.thumb,
          }}
        />
      </View>
      <View style={{ flex: 3, padding: 5, width: "100%", height: "100%" }}>
        <View
          style={{
            padding: 10,
            shadowColor: "#000",
            borderRadius: 20,
            backgroundColor: "#fff",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            width: "100%",
            height: "100%",
            elevation: 5,
          }}
        >
          <WebView source={{ uri: data.link }} style={{ flex: 1 }} />
        </View>
      </View>
    </View>
  );
};

export default ProductDetailScreen;
