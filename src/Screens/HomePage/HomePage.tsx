import React from "react";
import { Button, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./HomePage.Style.tsx";

const myImage = require("../../assets/recipe-book.png");


const HomePage = () => {
  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <Image source={myImage} style={styles.image} />
        <View>
          <View>
            <TouchableOpacity style={styles.button} children={<Text style={styles.button_text}>Giriş Yap</Text>} />
            <TouchableOpacity style={styles.button} children={<Text style={styles.button_text}>Kayıt Ol</Text>} />
          </View>
          <Text style={styles.password}>
            Sifremi Unuttum
          </Text>
        </View>


      </View>
    </SafeAreaView>
  );
};

export default HomePage;
