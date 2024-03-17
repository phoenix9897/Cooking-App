import React from "react";
import { FlatList, SafeAreaView, Text,} from "react-native";
import Config from "react-native-config";
import LoadingAnimation from "../../Components/Loading/Loading.tsx";
import ErrorAnimation from "../../Components/Error/Error.tsx";
import ProductCard from "../../Components/ProductCard/ProductCard.tsx";
import useFetch from "../../Hooks/useFetch.tsx";


// @ts-ignore
const Product = ({navigation}) => {

  const {loading, data, error} = useFetch(Config.API_URL_CAT);

  //@ts-ignore
  const handleProductSelect = id => {
    navigation.navigate("Details",{id});
  };

  // @ts-ignore
  const renderProduct = ({item}) => (
    <ProductCard products={item}/>
  );


  if (loading) {
    return <LoadingAnimation/>
  }

  if (error) {
    return <ErrorAnimation/>
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct}/>
    </SafeAreaView>
  )


}

export default Product;
