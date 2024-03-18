import React from "react";
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import styles from "./ProductCard.Style.tsx";
import { Image } from "react-native";

//@ts-ignore
const ProductCard = ({ products ,onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{ uri: products.strMealThumb }} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{products.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};
export default ProductCard;


