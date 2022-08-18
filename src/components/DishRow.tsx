import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import ISanityImage from "../models/ISanityImage";

interface Props {
  id: string;
  image: ISanityImage;
  name: string;
  description: string;
  price: number;
}
const DishRow = ({ id, image, name, description, price }) => {
  return (
    <TouchableOpacity>
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400">{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DishRow;
