import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import ISanityImage from "../models/ISanityImage";
import { formatCurrency } from "react-native-format-currency";
import { urlFor } from "../config/sanity";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import colors from "../theme/colors";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from "../features/basket/basketSlice";
interface Props {
  id: string;
  image: ISanityImage;
  name: string;
  description: string;
  price: number;
}
const DishRow: React.FC<Props> = ({ id, image, name, description, price }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsById(state, id));

  const format = (amount) =>
    formatCurrency({ amount: amount.toFixed(2), code: "BRL" })[0];

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, image, name, description, price }));
  };
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id, image, name, description, price }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className="bg-white p-4 border-t border-gray-300"
      >
        <View className="flex-row space-x-2">
          <View className="flex-1">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-600 mt-2">{format(price)}</Text>
          </View>

          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-20 w-20 bg-gray-300 p-4 rounded-md"
          />
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-3">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={!items.length} onPress={removeItemFromBasket}>
              <MinusCircleIcon
                color={items.length ? colors.main : "gray"}
                size={40}
              />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon
                color={colors.main}
                size={40}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
