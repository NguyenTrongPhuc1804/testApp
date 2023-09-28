import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { COLOR } from "../../constants/color";
import GridPrice from "../../component/GridPrice";
import { useDispatch, useSelector } from "react-redux";
import { getPriceGold } from "../../redux/reducer/PriceSlice";

const GoldScreen = () => {
  const dispatch = useDispatch();
  const { priceGold } = useSelector((state) => state.PriceSlice);

  useEffect(() => {
    dispatch(getPriceGold());
  }, []);
  return (
    <View style={{ padding: 10 }}>
      <View
        style={{
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: COLOR.primary,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: 40,
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 18, color: COLOR.second }}
          >
            Loại vàng
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, color: COLOR.second }}
          >
            Mua vào
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, color: COLOR.second }}
          >
            Bán ra
          </Text>
        </View>

        <FlatList
          data={priceGold}
          renderItem={({ item }) => <GridPrice data={item} />}
          keyExtractor={(item) => item.type}
        />
      </View>
    </View>
  );
};

export default GoldScreen;
