import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurant/restaurantSlice";
import { BasketItem, removeFromBasket, selectBasketItems, selectBasketTotal } from "../features/basket/basketSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { XIcon } from "react-native-heroicons/outline";
import colors from "../theme/colors";
import { urlFor } from "../config/sanity";
import { toCurrency } from "../helpers";

const BasketScreen = () => {
  const deliveryFee = 10;

  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const basketTotal = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, []);
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="bg-white flex-1 mt-4 rounded-lg shadow-xl">
      <View className="bg-gray-100 flex-1">
        <View className="p-5 pt-0 border-b border-gray-400 bg-white shadow-sm">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-gray-400 text-center">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5 p-2"
          >
            <XIcon size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 p-4 rounded-full bg-gray-300"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text style={{ color: colors.main }}>Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(
            ([key, items]: [string, BasketItem[]]) => (
              <View key={key} className="flex-row items-center bg-white space-x-3 py-2 px-5">
                <Text style={{ color: colors.mainDark }}>{items.length} x</Text>
                <Image 
                  source={{ uri: urlFor(items[0].image).url() }} 
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0].name}</Text>
                <Text className="text-gray-600">{toCurrency(items[0].price)}</Text>
                <TouchableOpacity onPress={() => dispatch(removeFromBasket(items[0]))}>
                  <Text 
                    className="text-red-600 text-xs"
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            )
          )}
        </ScrollView>
        <View className="bg-white p-5 mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{toCurrency(basketTotal)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">{toCurrency(deliveryFee)}</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order total</Text>
            <Text className="font-extrabold">{toCurrency(basketTotal + deliveryFee)}</Text>
          </View>
          <TouchableOpacity 
            style={{ backgroundColor: colors.mainDark }}
            className="rounded-lg p-4 "
          >
            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
