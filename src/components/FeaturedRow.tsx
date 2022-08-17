import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

interface Props {
  id: string;
  title: string;
  description: string;
}
const FeaturedRow: React.FC<Props> = ({ description, title }) => {
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
        <RestaurantCard 
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Yoi Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Little short description for this"
          dishes={[]}
          lat={209}
          long={32}

        />
        <RestaurantCard 
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Yoi Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Little short description for this"
          dishes={[]}
          lat={209}
          long={32}

        />
        <RestaurantCard 
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Yoi Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Little short description for this"
          dishes={[]}
          lat={209}
          long={32}

        />
        <RestaurantCard 
          id={123}
          imageUrl="https://links.papareact.com/gn7"
          title="Yoi Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main St"
          short_description="Little short description for this"
          dishes={[]}
          lat={209}
          long={32}

        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
