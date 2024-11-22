import {
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { icons, images } from "../../constants/index";
import { Image } from "react-native";
import InputField from "../../components/InputField";
import CustomButton from "../../components/customButton";
import { Link, router } from "expo-router";
import Oauth from "../../components/Oauth";

const SignUp = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-1 bg-white">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            {/* Header Section */}
            <View className="relative w-full h-[250px]">
              <Image
                source={images.signUpCar}
                className="w-full z-0 h-[250px]"
              />
              <Text className="absolute text-black text-2xl font-JakartaBold bottom-1 left-5">
                Create Your Account.
              </Text>
            </View>

            {/* Form Section */}
            <View className="flex-1 p-5">
              <InputField
                label="Name"
                placeholder="Enter your name"
                icon={icons.person}
                value={form.name}
                onChangeText={(text) => setForm({ ...form, name: text })}
              />
              <InputField
                label="Email"
                keyboardtype="email-address"
                placeholder="Enter your email"
                icon={icons.email}
                value={form.email}
                onChangeText={(text) => setForm({ ...form, email: text })}
              />
              <InputField
                label="Password"
                placeholder="Enter your password"
                secureTextEntry={true}
                icon={icons.lock}
                value={form.password}
                onChangeText={(text) => setForm({ ...form, password: text })}
              />

              {/* Buttons */}
              <CustomButton
                title="Sign Up"
                onPress={() => {}}
                className={"mt-6"}
              />
              <Oauth />
              <CustomButton
                title="Sign Up with Google"
                onPress={() => {}}
                IconLeft={<Image source={icons.google} className="w-6 h-6" />}
                bgVarient="outline"
                textVarient="primary"
                className={"mt-6 "}
              />

              {/* Footer Section */}
              <View className="flex flex-row justify-center items-center mt-6">
                <Text className="text-general-200 text-lg">
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity
                onPress={() => {
                  router.replace("/(auth)/sign-in");
                }}
                
              >
                <Text className="text-primary-500 text-lg">
                Sign In
                </Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
