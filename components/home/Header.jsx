import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View className="flex-row w-full px-5 items-center justify-between  bg-gray-100  pt-2">
      <View className="flex-row items-center justify-center  ">
        <TouchableOpacity className="mr-4">
          <Ionicons name="person-circle-outline" size={50} color="gray " />
        </TouchableOpacity>
        <View className=" flex items-start justify-start mr-4 ">
          <Text className="text-lg text-primary-700  font-JakartaBold">Md Mamun</Text>
          <TouchableOpacity>
            <Text className="text-primary-600   underline">
              8801826098968
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row items-center  justify-center ">
        <TouchableOpacity className="mr-1">
          <Ionicons name="search" size={30} color="#FF3B30" />
        </TouchableOpacity>
        <TouchableOpacity className="ml-6">
          <Ionicons name="menu" size={30} color="#FF3B30" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
