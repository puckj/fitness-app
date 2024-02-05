import { View, Text } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>First screen</Text>
    </View>
  );
};

export default Index;
