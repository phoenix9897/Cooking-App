import React, { useEffect } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "./WelcomeScreen.Style.tsx";

//@ts-ignore
const WelcomeScreen= ({navigation}) => {


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('LoginPage');
    }, 5000); // 5 seconds delay
    return () => clearTimeout(timeoutId); // Cleanup on unmount
  }, []);

  const myImage = require('../../assets/recipe-book.png');

  return(
    <SafeAreaView style={styles.OuterContainer}>
      <Image source={myImage} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>
          React-Native
        </Text>
        <Text style={styles.subtitle}>
          Recipe App
        </Text>

      </View>
    </SafeAreaView>
  )
};

export default WelcomeScreen;
