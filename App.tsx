import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./src/Screens/WelcomeScreen/WelcomeScreen.tsx";
import LoginPage from "./src/Screens/LoginPage/LoginPage.tsx";
import HomePage from "./src/Screens/HomeScreen/HomeScreen.tsx";


import { AppRegistry } from "react-native";

const Stack = createStackNavigator();
AppRegistry.registerComponent("App", () => App);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"HomePage"}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;
