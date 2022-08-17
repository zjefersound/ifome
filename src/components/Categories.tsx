import { ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 12,
        paddingHorizontal: 16,
      }}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 1" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 4" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 4" />
    </ScrollView>
  );
};

export default Categories;
