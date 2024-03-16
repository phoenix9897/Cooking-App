import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryPage from "./src/Screens/CategoryPage/CategoryPage.tsx";
import WelcomeScreen from "./src/Screens/WelcomeScreen/WelcomeScreen.tsx";
import HomePage from "./src/Screens/HomePage/HomePage.tsx";
import ProductsPage from "./src/Screens/ProductsPage/ProductsPage.tsx";
import ProductDetailScreen from "./src/Screens/ProductDetailScreen/ProductDetailScreen.tsx";
import { AppRegistry } from "react-native";

const Stack = createStackNavigator();
AppRegistry.registerComponent('App', () => App);
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="HomePage" component={HomePage} options={{headerShown:false}} />
        <Stack.Screen name="CategoryPage" component={CategoryPage} />
        <Stack.Screen name="ProductsPage" component={ProductsPage} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;
