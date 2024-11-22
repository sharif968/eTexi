import { Text,View, TouchableOpacity } from "react-native";
import React from "react";

const getBgVarientStyle = (bgVarient) => {
  switch (bgVarient) {
    case "primary":
      return "bg-[#2b7ae0]";
    case "secondary":
      return "bg-[#e2e8f0]";
    case "success":
      return "bg-[#38A169]";
    case "danger":
      return "bg-[#DC2626]";
    case "outline":
      return "bg-transparent border-[0.5px] border-neutral-400 text-neutral-400";
    default:
      return "bg-[#2b7ae0]";
  }
};
const getTextVarientStyle = (textVarient) => {
  switch (textVarient) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "success":
      return "text-green-100";
    case "danger":
      return "text-red-100";

    default:
      return "text-white";
  }
};
const CustomButton = ({
  onClick,
  title,
  bgVarient = "primary",
  textVarient = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      className={` rounded-full p-3  flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVarientStyle(
        bgVarient
      )} ${className} {...props}`}
    >
      {IconLeft && (
        <View className="mr-2">
          {IconLeft}
        </View>
      )}
      <Text
        className={` text-lg font-bold ${getTextVarientStyle(textVarient)}`}
      >
        {title}
      </Text>
      {IconRight && (
        <View className="ml-2">
          {IconRight}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
