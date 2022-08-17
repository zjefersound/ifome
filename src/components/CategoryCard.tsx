import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface Props {
  imgUrl: string;
  title: string;
}

const CategoryCard: React.FC<Props> = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute text-white bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
