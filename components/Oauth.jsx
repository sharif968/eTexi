import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Oauth = () => {
  return (
    <View className="flex flex-row justify-center items-center mx-5 mt-5">
      <View className="w-1/2 h-[1px] bg-general-100"/>
      <Text className="text-lg mx-2">Or</Text>
      <View className="w-1/2 h-[1px] bg-general-100"/>
      
    </View>
  )
}

export default Oauth

const styles = StyleSheet.create({})