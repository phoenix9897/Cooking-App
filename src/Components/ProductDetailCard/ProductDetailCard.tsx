import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import styles from './ProductDetailCard.Style.tsx';

// @ts-ignore
const MealDetailCard = ({ meal }) => {
  const openVideo = () => {
    const videoUrl = meal.strYoutube;
    Linking.openURL(videoUrl);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: meal.strMealThumb}} style={styles.image} />
      <View style={styles.headers} >
        <Text style={styles.title} >{meal.strMeal}</Text>
        <Text style={styles.country} >{meal.strArea}</Text>
      </View>
      <Text style={styles.description} >{meal.strInstructions} </Text>
      <TouchableOpacity style={styles.button} onPress={openVideo}>
        <Text style={{ color: '#fff' }}>Videoyu İzle</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MealDetailCard
