import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { COLOR } from "../constants/color";
import ProductGrid from "./ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { getArticleCategory } from "../redux/reducer/CategorySlice";
import { useNavigation } from "@react-navigation/native";
const { height, width } = Dimensions.get("window");
const CategoryGrid = ({ title, id }) => {
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const { listArticle } = useSelector((state) => state.CategorySlice);

  const articleInCate = listArticle.filter((item) => item.category_id == id);
  useEffect(() => {
    dispatch(getArticleCategory({ id, limit: 4 }));
  }, []);
  return (
    <View style={{ height: 500, width: "100%" }}>
      <TouchableOpacity
        onPress={() => {
          navigate.push("CategoryScreen", {
            name: title,
            categoryId: id,
          });
        }}
        style={{
          width: "100%",
          height: 30,
          borderBottomWidth: 3,
          borderColor: COLOR.primary,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: COLOR.second,
            backgroundColor: COLOR.primary,
            maxWidth: 130,
            textAlign: "center",
            lineHeight: 30,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            height: "50%",
            width: "100%",
            gap: 10,
          }}
        >
          <ProductGrid data={articleInCate[0]} />
          <ProductGrid data={articleInCate[1]} />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            height: "50%",
            width: "100%",
            gap: 10,
          }}
        >
          <ProductGrid data={articleInCate[2]} />
          <ProductGrid data={articleInCate[3]} />
        </View>
      </View>
    </View>
  );
};

export default CategoryGrid;
