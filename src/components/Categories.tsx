import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import ICategory from "../models/ICategory";
import categoryService from "../services/categoryService";

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    categoryService.getAll().then((data) => setCategories(data));
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 12,
        paddingHorizontal: 16,
      }}
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          image={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
