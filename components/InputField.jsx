import { Link } from "expo-router";
import { useState } from "react";
import { TextInput, View, Text, Image, TouchableOpacity } from "react-native";
import { icons } from "../constants";

const InputField = ({
  label,
  icon,
  labelStyle,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="my-2 w-full">
      <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
        {label}
      </Text>
      <View
        className={`flex flex-row  items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500  ${containerStyle}`}
      >
        {icon && (
          <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
        )}
        <TextInput
          className={`rounded-full p-4 font-JakartaSemiBold text-[15px] flex-1 ${inputStyle} text-left`}
          {...props}
          placeholderTextColor="grey"
          secureTextEntry={label === "Password" && !showPassword}
        />
        {label === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyecross}
              className="w-6 h-6 mr-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default InputField;
