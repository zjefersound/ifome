import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import ISanityImage from "../models/ISanityImage";
import { urlFor } from "../config/sanity";

interface Props {
  image: ISanityImage;
  title: string;
}

const CategoryCard: React.FC<Props> = ({ image, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 bg-black rounded">
      <Image
        source={{
          uri: urlFor(image).url(),
        }}
        className="h-20 w-20 rounded opacity-60"
      />
      <Text className="absolute text-white bottom-1 left-1 font-semibold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
