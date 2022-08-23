import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import ISanityImage from "../models/ISanityImage";
import IDish from "../models/IDish";
import BasketScreen from "../screens/BasketScreen";

export interface IRestaurantScreenParams {
  id: string;
  image: ISanityImage;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: IDish[];
  long: number;
  lat: number;
}

export type RootStackParamList = {
  Home: {};
  Basket: {};
  Restaurant: IRestaurantScreenParams;
};

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen
        name="Basket"
        options={{ presentation: "transparentModal", headerShown: false }}
        component={BasketScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;
