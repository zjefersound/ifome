import { Image, ScrollView, Text, TextInput, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import featuredService from "../services/featuredService";
import IFeatured from "../models/IFeatured";
import colors from "../theme/colors";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState<IFeatured[]>([]);

  useEffect(() => {
    featuredService.getAll().then((data) => setFeaturedCategories(data));
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white pt-5">
      {/* Header */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 p-4 rounded-full bg-gray-300"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <View className="flex-row items-center">
            <Text className="font-bold text-xl">Current location</Text>
            <ChevronDownIcon size={20} color={colors.main} />
          </View>
        </View>
        <UserIcon size={35} color={colors.main} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 mx-4">
        <View className="flex-row space-x-2 items-center flex-1 rounded-md bg-gray-200 p-3">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>

        <AdjustmentsIcon color={colors.main} />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100 mt-3">
        {/* Categories */}
        <Categories />
        {/* Featured Rows */}
        {featuredCategories.map((featured) => (
          <FeaturedRow
            key={featured._id}
            id={featured._id}
            title={featured.name}
            description={featured.short_description}
            restaurants={featured.restaurants}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
