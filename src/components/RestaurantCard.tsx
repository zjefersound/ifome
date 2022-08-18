import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import ISanityImage from "../models/ISanityImage";
import { urlFor } from "../config/sanity";

interface Props {
  id: string;
  image: ISanityImage;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
  dishes: any[];
  long: number;
  lat: number;
}

const RestaurantCard: React.FC<Props> = ({
  image,
  title,
  rating,
  genre,
  address,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-lg">
      <Image source={{ uri: urlFor(image).url() }} className="h-36 w-64" />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="#16a34a" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-600">{rating}</Text> - {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
