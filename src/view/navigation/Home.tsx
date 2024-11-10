import { ParamListBase } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";

import { HomeScreen } from "../screens/HomeScreen";

type StackNavigationProps<
  T extends ParamListBase,
  K extends keyof T = keyof T
> = NativeStackScreenProps<T, K>;

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type HomeStackScreenProps<
  Screen extends keyof HomeStackParamList = keyof HomeStackParamList
> = StackNavigationProps<HomeStackParamList, Screen>;

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const homeScreenScreenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  title: "Wellness Package",
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

export const HomeNavigator: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={screenOptions}>
      <HomeStack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={homeScreenScreenOptions}
      />
    </HomeStack.Navigator>
  );
};
