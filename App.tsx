//import main dependencies
import React from "react";
import { StatusBar } from "react-native";
import { store } from "./src/contexts/store";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-toast-notifications";
import { LoadingProvider } from "./src/contexts/loading";
import RootNavigation from "./src/navigation";
import { AuthProvider } from "./src/contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

function App(): React.JSX.Element {
  AsyncStorage.setItem("user", "device_initialized");
  return (
    <Provider store={store}>
      <StatusBar />
      <ToastProvider>
        <LoadingProvider>
          <AuthProvider>
            <RootNavigation />
          </AuthProvider>
        </LoadingProvider>
      </ToastProvider>
    </Provider>
  );
}

export default App;
