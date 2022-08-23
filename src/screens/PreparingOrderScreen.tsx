import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../theme/colors";
import * as Animatable from "react-native-animatable";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../routes/Router";

const PreparingOrderScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="flex-1 justify-center items-center bg-white">
      <Animatable.Image
        source={require("../../assets/delivery-bike.gif")}
        animation="slideInUp"
        iterationCount={1}
      />
      <Animatable.Text
        style={{ color: colors.main }}
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 font-bold"
      >
        We are preparing your order!
      </Animatable.Text>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
