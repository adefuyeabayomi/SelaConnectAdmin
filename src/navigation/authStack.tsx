import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navTypes";

const Stack = createNativeStackNavigator<RootStackParamList>();

//import screens
import Login from "../screens/Login/Login";
import SignUp from "../screens/SignUp/SignUp";
import ForgotPassword from "../screens/ForgotPassword/ForgotPassword";
import AuthLoading from "../screens/AuthLoading";

export default function AuthStack(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthLoading" component={AuthLoading} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
