import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../config/sanity";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
} from "react-native-heroicons/outline";
import colors from "../theme/colors";
import { StarIcon } from "react-native-heroicons/solid";
import { IRestaurantScreenParams } from "../routes/Router";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setRestaurant } from "../features/restaurant/restaurantSlice";

const RestaurantScreen = () => {
  const { params } = useRoute();
  const { image, title, rating, genre, address, short_description, dishes } =
    params as IRestaurantScreenParams;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRestaurant(params as IRestaurantScreenParams));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{ uri: urlFor(image).url() }}
            className="w-full h-64 bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-8 left-4 bg-white rounded-full p-2"
          >
            <ArrowLeftIcon size={20} color={colors.main} />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row space-x-4 my-1 items-center">
              <View className="flex-row space-x-2 my-1 items-center">
                <StarIcon size={22} color={colors.green} opacity={0.5} />
                <Text className="text-xs text-gray-500">
                  <Text className="text-green-600">{rating}</Text> - {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <LocationMarkerIcon color="gray" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  Nearby - {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" opacity={0.5} size={22} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food alergy?
            </Text>
            <ChevronRightIcon color={colors.main} size={20} />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>

          {dishes.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              image={dish.image}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
