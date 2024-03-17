import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import styles from "./ProductCard.Style.tsx";

//@ts-ignore
const ProductCard = ({ products }) => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <Image style={styles.image} source={{ uri: products.strCategoryThumb }} />
        <View style={styles.Body}>
          <Text style={styles.Title}>
            {products.strCategory}
          </Text>
        </View>
      </View>
    </SafeAreaView>

  );
};
export default ProductCard;
