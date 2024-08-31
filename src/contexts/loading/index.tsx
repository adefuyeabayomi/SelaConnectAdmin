import { Overlay } from "@rneui/base";
import React, { useContext, createContext, useState, ReactNode } from "react";
import { ActivityIndicator, View, Text, StyleSheet } from "react-native";
import { efficiency } from "../../styles/colordef";

interface LoadingType {
  setLoading: (e: boolean) => void;
  setLoadingText: (e: string) => void;
}

const LoadingContext = createContext<LoadingType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoadingOpen] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  function setLoading(e: boolean) {
    setLoadingOpen(e);
    setTimeout(() => {
      setLoadingOpen(false);
      setLoadingText("");
    }, 20000);
  }
  function toggleOverlay() {
    setLoadingOpen(!loading);
  }

  return (
    <LoadingContext.Provider value={{ setLoading, setLoadingText }}>
      {loading && (
        <View style={styles.overlay}>
          <Overlay isVisible={loading} onBackdropPress={toggleOverlay}>
            <ActivityIndicator color={efficiency.efficiencyTint5} />
            {loadingText ? (
              <Text style={styles.text}>{loadingText}</Text>
            ) : null}
          </Overlay>
        </View>
      )}
      {children}
    </LoadingContext.Provider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  text: {
    color: "#ffffff",
    marginTop: 10,
  },
});
