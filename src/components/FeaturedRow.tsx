import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";
import IRestaurant from "../models/IRestaurant";

interface Props {
  id: string;
  title: string;
  description: string;
  restaurants: IRestaurant[];
}
const FeaturedRow: React.FC<Props> = ({ description, title, restaurants }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-sm text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 16,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4 pb-5"
      >
        {/* Restaurant Cards */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant._id}
            id={restaurant._id}
            image={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            address={restaurant.address}
            short_description={restaurant.short_description}
            dishes={restaurant.dishes}
            lat={restaurant.lat}
            long={restaurant.long}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
