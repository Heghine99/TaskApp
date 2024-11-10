import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeNavigator } from "./Home";

export type RootStackParamList = {
  Home: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

const screenOptions = {
  gestureEnabled: false,
  headerShown: false,
};

export const AppNavigation: React.FC = () => {
  return (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="Home" component={HomeNavigator} />
    </AppStack.Navigator>
  );
};
