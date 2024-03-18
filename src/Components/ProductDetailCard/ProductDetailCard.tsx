import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './ProductDetailCard.Style.tsx';

// @ts-ignore
const MealDetailCard = ({ meal }) => {

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.strMealThumb}} style={styles.image} />
      <View style={styles.headers} >
        <Text style={styles.title} >{meal.strMeal}</Text>
        <Text style={styles.country} >{meal.strArea}</Text>
      </View>
      <Text style={styles.description} >{meal.strInstructions} </Text>
    </View>
  )
}

export default MealDetailCard
