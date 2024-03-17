import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import icons
import ProfileScreen from "../ProfileScreen/ProfileScreen.tsx";
import SettingsScreen from "../SettingsScreen/SettingsScreen.tsx";
import CategoryScreen from "../CategoryPage/CategoryPage.tsx";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={
        {
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#D7E4C0",
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15
          },
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "#D7E4C0",
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
          },
          tabBarLabelStyle: {
            fontSize: 14 // Set font size
          }
        }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            console.log("Icon props:", { color, size }); // Log props for debugging
            return <Icon name="person" color={color} size={size} />;
          }
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Icon name="list" color={color} size={32} />
            </View>
          )
        }}

      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Icon name="settings" color={color} size={size} />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default App;
