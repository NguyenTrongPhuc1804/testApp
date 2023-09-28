import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import ProductColum from "../../component/ProductColum";
import CategoryService from "../../service/category";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllArticleCategory,
  getArticleCategory,
  getCategoryApi,
  getCategoryApi2,
} from "../../redux/reducer/CategorySlice";
import { useRoute } from "@react-navigation/native";

const CategoryScreen = () => {
  const route = useRoute();
  const { categoryId, title } = route.params;
  const dispatch = useDispatch();
  const { dataArticle } = useSelector((state) => state.CategorySlice);
  useEffect(() => {
    dispatch(getAllArticleCategory({ id: categoryId, limit: 40 }));
  }, []);
  return (
    <View style={{ padding: 15 }}>
      <FlatList
        data={dataArticle}
        renderItem={({ item }) => <ProductColum data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoryScreen;
