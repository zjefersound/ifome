import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../features/basket/basketSlice";
import { toCurrency } from "../helpers";
import { RootStackParamList } from "../routes/Router";
import colors from "../theme/colors";

const BasketIcon: React.FC = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 z-50 w-full">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Basket");
        }}
        style={{ backgroundColor: colors.main }}
        className={`
          mx-5 p-4 rounded-lg 
          flex-row items-center space-x-2
        `}
      >
        <Text
          style={{ backgroundColor: colors.mainDark }}
          className="text-white font-extrabold text-lg py-1 px-2"
        >
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {toCurrency(basketTotal)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
