import { View, Text, Dimensions, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import { COLOR } from "../constants/color";
import ProductColum from "./ProductColum";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { getArticleCategory } from "../redux/reducer/CategorySlice";
const { height, width } = Dimensions.get("window");
const CategoryColum = ({ title, id }) => {
  const dispatch = useDispatch();
  const { listArticle } = useSelector((state) => state.CategorySlice);
  const articleInCate = listArticle.filter((item) => item.category_id == id);
  useEffect(() => {
    dispatch(getArticleCategory({ id, limit: 2 }));
  }, []);
  return (
    <View style={{ height: height / 2, width: "100%" }}>
      <View
        style={{
          height: 30,
          borderBlockColor: COLOR.primary,
          borderBottomWidth: 3,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: COLOR.second,
            maxWidth: 130,
            backgroundColor: COLOR.primary,
            lineHeight: 30,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        {/* <FlatList
          data={listArticle}
          renderItem={({ item }) => <ProductColum item={item} />}
          keyExtractor={(item) => item.id}
        /> */}
        <ProductColum data={articleInCate[0]} />
        <ProductColum data={articleInCate[1]} />
      </View>
    </View>
  );
};

export default CategoryColum;
