import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Services from "../../../components/home/Services";
import Header from "../../../components/home/Header";
import ImageSlider from "../../../components/home/ImageSlider";
import BalanceSection from "../../../components/home/BalanceSection";

const App = () => {
  return (
    <SafeAreaView className="flex-1 justify-center items-center  bg-gray-100 ">
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1  mx-5"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <BalanceSection />
        <ImageSlider />
        <Services />
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default App;
