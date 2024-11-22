import React from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Icon library
import Swiper from "react-native-swiper";
const services = [
  // Static data for the services
  [
    { id: "1", title: "Internet Packs", icon: "analytics-outline" },
    { id: "2", title: "Bundles", icon: "cube-outline" },
    { id: "3", title: "Minute Packs", icon: "call-outline" },
    { id: "4", title: "EasyPlan", icon: "settings-outline" },
    { id: "5", title: "bdtickets", icon: "pricetag-outline" },
    { id: "6", title: "My Family", icon: "people-outline" },
    { id: "7", title: "Call History", icon: "time-outline" },
    { id: "8", title: "Redeem Points", icon: "gift-outline" },
  ],
  [
    { id: "1", title: "Internet Packs", icon: "analytics-outline" },
    { id: "2", title: "Bundles", icon: "cube-outline" },
    { id: "3", title: "Minute Packs", icon: "call-outline" },
    { id: "4", title: "EasyPlan", icon: "settings-outline" },
    { id: "5", title: "bdtickets", icon: "pricetag-outline" },
    { id: "6", title: "My Family", icon: "people-outline" },
    { id: "7", title: "Call History", icon: "time-outline" },
    { id: "8", title: "Redeem Points", icon: "gift-outline" },
  ],
  [
    { id: "1", title: "Internet Packs", icon: "analytics-outline" },
    { id: "2", title: "Bundles", icon: "cube-outline" },
    { id: "3", title: "Minute Packs", icon: "call-outline" },
    // { id: "4", title: "EasyPlan", icon: "settings-outline" },
    // { id: "5", title: "bdtickets", icon: "pricetag-outline" },
    // { id: "6", title: "My Family", icon: "people-outline" },
    // { id: "7", title: "Call History", icon: "time-outline" },
    // { id: "8", title: "Redeem Points", icon: "gift-outline" },
  ],
];
const ServiceCard = ({ title, icon }) => (
  <View className="w-1/4 items-center justify-center my-4">
    <Ionicons name={icon} size={30} color="#FF3B30" />
    <Text className="text-gray-700 text-sm mt-2 text-center">{title}</Text>
  </View>
);

const Services = () => {
  return (
    <View className="flex  justify-center h-[250px] items-center  bg-white rounded-2xl   px-4">
      <Swiper
        loop={false}
        horizontal
        dotStyle={{ backgroundColor: "#E0E0E0", width: 8, height: 8 }}
        activeDotStyle={{ backgroundColor: "#FF3B30", width: 25, height: 8 }}
        paginationStyle={{ bottom: 10 }}
      >
        {services.map((serviceGroup, index) => (
          <FlatList
            key={index}
            data={serviceGroup}
            numColumns={4}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <ServiceCard title={item.title} icon={item.icon} />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ justifyContent: "center" }}
          />
        ))}
      </Swiper>
    </View>
  );
};

export default Services;
