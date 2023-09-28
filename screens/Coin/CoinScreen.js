import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { COLOR } from "../../constants/color";
import GridPrice from "../../component/GridPrice";
import { getPriceGCoin } from "../../redux/reducer/PriceSlice";
import { useDispatch, useSelector } from "react-redux";

const CoinScreen = () => {
  const dispatch = useDispatch();
  const { priceCoin } = useSelector((state) => state.PriceSlice);
  useEffect(() => {
    dispatch(getPriceGCoin());
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
            Name
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, color: COLOR.second }}
          >
            Price(USD)
          </Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 18, color: COLOR.second }}
          >
            Change24(%)
          </Text>
        </View>
        <FlatList
          data={priceCoin}
          renderItem={({ item }) => (
            <GridPrice
              data={item}
              coin
              numberDown={item?.percent_change_24h < 0 ? true : false}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default CoinScreen;
