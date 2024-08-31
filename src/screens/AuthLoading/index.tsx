import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navTypes";
import { useLoading } from "../../contexts/loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

type LoadPageScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "AuthLoading"
>;

function AuthLoading({ navigation }: LoadPageScreenProps): React.JSX.Element {
  const { setLoading } = useLoading();

  useEffect(() => {
    const checkUser = async () => {
      setLoading(true);
      try {
        const value = await AsyncStorage.getItem("user");
        console.log({ value });
        navigation.navigate("Login");
      } catch (error) {
        console.error("Failed to fetch user from AsyncStorage", error);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  return (
    <SafeAreaView>
      {/* Loading spinner or splash screen could be shown here */}
    </SafeAreaView>
  );
}

export default AuthLoading;
