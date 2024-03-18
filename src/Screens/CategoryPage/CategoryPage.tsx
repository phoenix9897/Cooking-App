import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import Config from "react-native-config";
import LoadingAnimation from "../../Components/Loading/Loading.tsx";
import ErrorAnimation from "../../Components/Error/Error.tsx";
import useFetch from "../../Hooks/useFetch.tsx";
import CategoryCard from "../../Components/CategoryCard/CategoryCard.tsx";


// @ts-ignore
const Category = ({ navigation }) => {

  const { loading, data, error } = useFetch(Config.API_URL_CAT);

  //@ts-ignore
  const handleCategorySelect = id => {
    navigation.navigate("Products", { id });
  };

  // @ts-ignore
  const renderProduct = ({ item }) => (
    <CategoryCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />
  );


  if (loading) {
    return <LoadingAnimation />;
  }

  if (error) {
    return <ErrorAnimation />;
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  );


};

export default Category;
