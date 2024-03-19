import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, BackHandler } from "react-native";
import styles from "./SettingsScreen.Style.tsx";
const SettingsScreen = () => {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });

    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.setting}>
      </View>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Sound</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Privacy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>About Us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={() => BackHandler.exitApp()}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};



export default SettingsScreen;
