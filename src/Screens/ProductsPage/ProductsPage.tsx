import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import useFetch from "../../Hooks/useFetchMeal.tsx";
import Config from "react-native-config";
import LoadingAnimation from "../../Components/Loading/Loading.tsx";
import ErrorAnimation from "../../Components/Error/Error.tsx";
import styles from "./ProductsPage.Style.tsx";
import ProductCard from "../../Components/ProductCard/ProductCard.tsx";

// @ts-ignore
const Product = ({ navigation,route }) => {
  const { name } = route.params;
  const { error, loading, data: meals } = useFetch(Config.API_URL_MEL + name);

  // @ts-ignore
  const handleProductSelect = id => {
    navigation.navigate("ProductDetailScreen", { id });
  };

  // @ts-ignore
  const renderMeal = ({ item }) => (
    <ProductCard products={item} onSelect={() => handleProductSelect(item.idMeal)} />
  );

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorAnimation />;
  }

  return (
    <View style={styles.container}>
      <FlatList data={meals} renderItem={renderMeal} />
    </View>
  );
};

export default Product;
