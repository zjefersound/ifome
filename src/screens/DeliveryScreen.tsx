import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurant/restaurantSlice";
import { RootStackParamList } from "../routes/Router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import colors from "../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { XIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const DeliveryScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View
      style={{
        backgroundColor: colors.main,
      }}
      className="flex-1"
    >
      <SafeAreaView className="z-50">
        <View className="flex-row items-center justify-between p-5">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="rounded-full "
          >
            <XIcon size={24} color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 shadow-xl">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated arrival</Text>
              <Text className="text-4xl font-bold">50-75 minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar indeterminate color={colors.main} />
          <Text className="mt-3 text-md text-gray-400">
            Your order is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className="flex-1 z-0 -mt-10"
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{ latitude: restaurant.lat, longitude: restaurant.long }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor={colors.main}
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-24 pb-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Juninho Silva</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <Text style={{ color: colors.main }} className="text-lg font-bold mr-5">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
