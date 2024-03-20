import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, BackHandler, ScrollView } from "react-native";
import styles from "./SettingsScreen.Style.tsx";
import { Divider, RadioButton, SegmentedButtons, Switch } from "react-native-paper";
import { Avatar, ListItem, Tile } from "@rneui/themed";
const SettingsScreen = () => {

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });

    return () => backHandler.remove();
  }, []);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [value, setValue] = React.useState('');

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
      <View style={{flexDirection:"row",alignItems:"center",padding:10}}>
        <Text style={styles.optionText}>
          Change Theme
        </Text>
        <Divider style={{width:25}}></Divider>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      </View>
      <Divider style={{height:2}}></Divider>
      <SegmentedButtons
        style={{marginTop:15}}
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'English',
            label: 'English',
          },
          {
            value: 'Türkçe',
            label: 'Türkçe',
          },
          { value: 'Deustch',
            label: 'Deustch' },
        ]}
      />
      <TouchableOpacity style={styles.logoutButton} onPress={() => BackHandler.exitApp()}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
};



export default SettingsScreen;
