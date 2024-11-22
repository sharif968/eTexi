import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const BalanceSection = () => {
  return (
    <View className="bg-white  rounded-3xl mt-5 p-4">
      <View className="flex-row justify-between items-center mb-2">
        <Text className="text-2xl font-bold">৳0.01</Text>
        <TouchableOpacity className="bg-red-500 text-white px-4 py-2 rounded">
          <Text className="text-sm text-white">Recharge</Text>
        </TouchableOpacity>
      </View>
      <Text className="text-sm mb-2 text-gray-500">
        Valid till 11 December 2024
      </Text>

      <View className="flex-row justify-between mt-4">
        <View className="text-center">
          <Text className="text-lg font-bold">0 MB</Text>
          <Text className="text-sm text-gray-500">View more</Text>
        </View>
        <View className="text-center">
          <Text className="text-lg font-bold">6 Mins</Text>
          <Text className="text-sm text-gray-500">View more</Text>
        </View>
        <TouchableOpacity>
          <View className="text-center">
            <Text className="text-lg font-bold">Points</Text>
            <Text className="text-sm text-gray-500">Tap to see</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BalanceSection;

const styles = StyleSheet.create({});
