import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CategoryPage from "./src/Screens/CategoryPage/CategoryPage.tsx";
import WelcomeScreen from "./src/Screens/WelcomeScreen/WelcomeScreen.tsx";
import HomePage from "./src/Screens/HomePage/HomePage.tsx";
import ProductsPage from "./src/Screens/ProductsPage/ProductsPage.tsx";
import ProductDetailScreen from "./src/Screens/ProductDetailScreen/ProductDetailScreen.tsx";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="CategoryPage" component={CategoryPage} />
        <Stack.Screen name="ProductsPage" component={ProductsPage} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

};

export default App;
