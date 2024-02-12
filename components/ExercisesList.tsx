import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ExercisesList = ({ data }: any) => {
  const router = useRouter();
  return (
    <View>
      <Text>ExercisesList</Text>
    </View>
  );
};

export default ExercisesList;
