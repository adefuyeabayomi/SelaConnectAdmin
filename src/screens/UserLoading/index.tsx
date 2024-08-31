import React, { useEffect, useState } from "react";
import { SafeAreaView, Linking } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navTypes";
import { useAuth } from "../../contexts/AuthContext";

type LoadPageScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "UserLoading"
>;

const useInitialURL = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    const handleDeepLink = (event: any) => {
      const url: string = event.url;

      if (url.includes("confirmpayment")) {
        const orderId = 9192039;
        // Handle the order confirmation logic
        console.log("Payment Confirmation", `Order ID: ${url}`);
      }
    };
    const getUrlAsync = async () => {
      // Get the deep link used to open the app
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        handleDeepLink({ url: initialUrl });
      }
      // The setTimeout is just for testing purpose
      setTimeout(() => {
        setUrl(initialUrl);
        setProcessing(false);
      }, 1000);
    };

    getUrlAsync();
  }, []);

  return { url, processing };
};

function UserLoading({ navigation }: LoadPageScreenProps): React.JSX.Element {
  const auth = useAuth();
  const { url, processing } = useInitialURL();

  useEffect(() => {
    if (auth.isAuthenticated) {
      auth.verified
        ? navigation.navigate("AppHome")
        : navigation.navigate("VerifyEmail");
    }
    console.log("Url Incoming is : ", url, processing);
  }, [auth]);

  return <SafeAreaView></SafeAreaView>;
}

export default UserLoading;
