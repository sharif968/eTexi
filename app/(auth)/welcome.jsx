import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { onboarding } from "../../constants";
import CustomButton from "../../components/customButton";
import { Ionicons } from "@expo/vector-icons";

const Onboarding = () => {
  const swiperRef = React.useRef(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="flex items-center h-full justify-between ">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up");
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaBold">Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-2 h-2 mx-2 bg-[#e2e8f0] rounded-full" />}
        activeDot={<View className="w-10 h-2 mx-2 bg-[#2b7ae0] rounded-full" />}
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center justify-center">
            <Image source={item.image} className="w-64 h-64" />
            <View className="flex justify-center items-center mt-10 flex-row w-full">
              <Text className="text-black text-center text-3xl font-JakartaBold mx-10">
                {item.title}
              </Text>
            </View>
            <Text className="text-[#667085] mt-3 mx-10 text-lg text-center font-JakartaMedium">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>

      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onClick={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current.scrollBy(1)
        }
        className="w-11/12 mt-10 mb-3 "
        bgVarient="primary"
        textVarient="default"
        // IconLeft={<Ionicons name="person" size={24} color="white" />}
        // IconRight={<Ionicons name="search" size={24} color="white" />}
      />

      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Onboarding;
