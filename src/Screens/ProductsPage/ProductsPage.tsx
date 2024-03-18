import React from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import useFetch from "../../Hooks/useFetch.tsx";
import Config from "react-native-config";
import LoadingAnimation from "../../Components/Loading/Loading.tsx";
import ErrorAnimation from "../../Components/Error/Error.tsx";
import styles from "./ProductsPage.Style.tsx";
// @ts-ignore
const Product = ({ route }) => {
  const { name } = route.params;
  console.log(route.params);
  const { loading, data, error } = useFetch(`${Config.API_URL_MEL}${name}`);

  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorAnimation />;
  }

  return (
    <View style={styles.container}>

    </View>
  );
};

export default Product;
