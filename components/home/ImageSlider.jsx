import { Text, View, Image, FlatList, Dimensions } from "react-native";
import React from "react";

const screenWidth = Dimensions.get("window").width;

const images = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];
const ImageSlider = () => {
  return (
    <View className="flex-1    my-5">
      <Text className=" text-xl ml-2 text-primary-700 font-JakartaSemiBold  mb-2">
        Just For You
      </Text>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.url }}
            style={{
              width: screenWidth * 0.8,
              height: 160,
              marginHorizontal: 4,
              borderRadius: 15,
              resizeMode: "cover",
            }}
          />
        )}
        snapToAlignment="start"
        decelerationRate="normal"
      />
    </View>
  );
};

export default ImageSlider;
