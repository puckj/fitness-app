import React from "react";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="exercises"
        options={{ presentation: "fullScreenModal" }}
      />
    </Stack>
  );
};

export default _layout;
