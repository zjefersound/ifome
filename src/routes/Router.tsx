import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import ISanityImage from "../models/ISanityImage";
import IDish from "../models/IDish";
import BasketScreen from "../screens/BasketScreen";
import PreparingOrderScreen from "../screens/PreparingOrderScreen";
import DeliveryScreen from "../screens/DeliveryScreen";

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
  PreparingOrder: {};
  Delivery: {};
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
      <Stack.Screen
        name="PreparingOrder"
        options={{ presentation: "fullScreenModal", headerShown: false }}
        component={PreparingOrderScreen}
      />
      <Stack.Screen
        name="Delivery"
        options={{ presentation: "fullScreenModal", headerShown: false }}
        component={DeliveryScreen}
      />
    </Stack.Navigator>
  );
};

export default Router;
