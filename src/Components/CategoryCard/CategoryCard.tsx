import React from "react";
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import styles from "./CategoryCard.Style.tsx";
// @ts-ignore


const CategoryCard = ({ category, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.Container}>
        <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
        <View style={styles.Body}>
          <Text style={styles.Title}>
            {category.strCategory}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
};

export default CategoryCard;
