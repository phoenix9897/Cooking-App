import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../ProfileScreen/ProfileScreen.tsx";
import SettingsScreen from "../SettingsScreen/SettingsScreen.tsx";
import CategoryScreen from "../CategoryPage/CategoryPage.tsx";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={{
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
        tabBarLabelStyle: { // Style the text for the tabs
          fontSize: 14 // Set font size
        }
      }}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default App;
