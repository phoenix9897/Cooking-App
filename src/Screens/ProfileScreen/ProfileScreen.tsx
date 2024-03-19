import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from "./ProfileScreen.Style.tsx";


const ProfileScreen = () => {

  const myImage = require('../../assets/recipe-book.png');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={myImage} style={styles.image} />
        <Text style={styles.nameText}>Name</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Email:</Text>
        <Text style={styles.infoText}>Bio:</Text>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};



export default ProfileScreen;
