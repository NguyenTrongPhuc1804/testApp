import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CategoryColum from "../../component/CategoryColum";
import CategoryGrid from "../../component/CategoryGrid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleCategory,
  getCategoryApi,
} from "../../redux/reducer/CategorySlice";

const HomeScreen = ({ navigattion }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { listCategory } = useSelector((state) => state.CategorySlice);
  const { home } = useSelector((state) => state.SettingSlice);
  const renderCategory = ({ item }) => {
    const categoryItem = listCategory?.find((cate) => cate.id === item.id);
    return (
      item.status &&
      categoryItem &&
      (item.type == "grid" ? (
        <CategoryGrid title={categoryItem?.name} id={categoryItem?.id} />
      ) : (
        <CategoryColum title={categoryItem?.name} id={categoryItem?.id} />
      ))
    );
  };
  useEffect(() => {
    dispatch(getCategoryApi({}));
  }, [home]);
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: "#96B6C5", padding: 15 }}>
        <FlatList
          data={home}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
