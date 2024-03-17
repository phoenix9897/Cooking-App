import React from "react";
import { Button, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./LoginPage.Style.tsx";

const myImage = require("../../assets/recipe-book.png");




//@ts-ignore
const LoginPage = ({navigation}) => {

  function goToCategoryPage() {
    navigation.navigate('HomePage');
  }


  return (
    <SafeAreaView style={styles.outerContainer}>
      <View>
        <Image source={myImage} style={styles.image} />
        <View>
          <View>
            <TouchableOpacity style={styles.button} onPress={goToCategoryPage} children={<Text style={styles.button_text}>Giriş Yap</Text>} />
            <TouchableOpacity style={styles.button} onPress={goToCategoryPage} children={<Text style={styles.button_text}>Kayıt Ol</Text>} />
          </View>
          <TouchableOpacity children={<Text style={styles.password}>
            Sifremi Unuttum
          </Text>} />


        </View>


      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
