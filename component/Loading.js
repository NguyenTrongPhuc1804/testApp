import { View, Text, Image, ActivityIndicator } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Loading = () => {
  const { loading } = useSelector((state) => state.LoadingSlice);
  useEffect(() => {}, [loading]);
  if (loading) {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#ffff",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/Loading.gif")}
          style={{ width: 100, height: 100 }}
        />
        {/* <ActivityIndicator size="large" /> */}
      </View>
    );
  } else {
    <View />;
  }
};

export default Loading;
