import React, { useEffect } from "react";

// import stacks
import UserStack from "./userStack";
import AuthStack from "./authStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../contexts/AuthContext";

export default function RootNavigation() {
  useEffect(() => {
    AsyncStorage.clear();
  });
  const auth = useAuth();
  return auth.isAuthenticated ? <UserStack /> : <AuthStack />;
}
