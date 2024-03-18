import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import useFetch from "../../Hooks/useFetchDetail.tsx";
import Config from "react-native-config";
import LoadingAnimation from "../../Components/Loading/Loading.tsx";
import ErrorAnimation from "../../Components/Error/Error.tsx";
import ProductCard from "../../Components/ProductCard/ProductCard.tsx";
import DetailCard from "../../Components/ProductDetailCard/ProductDetailCard.tsx";
import MealDetailCard from "../../Components/ProductDetailCard/ProductDetailCard.tsx";

// @ts-ignore
const ProductDetailScreen= ({route}) => {
  const { id } = route.params;
  const { error, loading, data: details } = useFetch(Config.API_URL_ING + id);

  // @ts-ignore
  const renderDetail = ({ item }) => (
    <MealDetailCard meal={item} />
  );

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorAnimation />;
  }

  return (
    <SafeAreaView>
      <FlatList data={details} renderItem={renderDetail} />
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
