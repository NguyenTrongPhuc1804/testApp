import { View, Text } from "react-native";
import React from "react";
import {
  formatChangeCoin,
  formatNumberPrice,
  formatPriceCoin,
} from "../help/toolkit";

const GridPrice = ({ data, numberDown, coin }) => {
  let name = coin ? data?.name : data?.type;
  let buy = coin ? formatPriceCoin(data?.price) : formatNumberPrice(data?.buy);
  let sell = coin
    ? formatChangeCoin(data?.percent_change_24h)
    : formatNumberPrice(data?.sell);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomWidth: 1,
        paddingVertical: 5,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          width: "25%",
        }}
      >
        {name}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{buy}</Text>
      <Text
        style={[
          { fontWeight: "bold", fontSize: 16 },
          { color: numberDown ? "red" : "green" },
        ]}
      >
        {sell}
      </Text>
    </View>
  );
};

export default GridPrice;
