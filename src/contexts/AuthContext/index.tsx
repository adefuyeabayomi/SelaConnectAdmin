import React, { createContext, useState, useContext, useEffect } from "react";
import authService from "../../functions/services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { hasTimeReached } from "../../functions/utils";

// Define the shape of your auth context
interface AuthContextType {
  isAuthenticated: boolean;
  login: (
    token: string,
    email: string,
    accountVerified: boolean,
    tokenExpiresAt: number,
  ) => void;
  logout: () => void;
  email: string;
  verified: boolean;
  updateVerified: (val: boolean) => void;
  accessToken: string;
  reAuth: (token: string) => Promise<any>;
}

// Create the context with initial values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component to wrap your app and provide context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // isAuthenticated is false by default
  // email is also '' by default
  // accessToken is also '' by default
  // verified is also false by default
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [accessToken, setAccessToken] = useState<string>("");
  const [verified, setVerified] = useState<boolean>(false);

  function updateVerified(val: boolean) {
    setVerified(val);
    if (val) {
      AsyncStorage.setItem("verified", "user_verified");
    } else {
      AsyncStorage.setItem("verified", "user_unverified");
    }
  }
  async function initializeAuthState() {
    try {
      const accessToken = await AsyncStorage.getItem("token");
      const userMail = await AsyncStorage.getItem("email");
      const emailVerified = await AsyncStorage.getItem("verified");
      const tokenExpiry = await AsyncStorage.getItem("tokenExpiresAt");
      console.log({ accessToken, userMail, emailVerified, tokenExpiry });
      if (emailVerified && emailVerified == "user_verified") {
        setVerified(true);
      }
      if (userMail) {
        setEmail(userMail);
      }
      if (accessToken) {
        let tokenExpired = hasTimeReached(Number(tokenExpiry));
        console.log({ tokenExpired });
        if (!tokenExpired) {
          reAuth(accessToken);
          setIsAuthenticated(true);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    initializeAuthState();
  }, []);

  const reAuth = async (accessToken: string) => {
    try {
      let reAuthResponse = await authService.reAuthenticate(accessToken);
      console.log({ reAuthResponse });
      let { token, tokenExpiresAt, verified } = reAuthResponse;
      AsyncStorage.setItem("token", token as string);
      AsyncStorage.setItem("tokenExpiresAt", String(tokenExpiresAt));
      await AsyncStorage.setItem(
        "verified",
        verified ? "user_verified" : "user_unverified",
      );
      console.log({ reauthenticateResponse: reAuthResponse });
      return reAuthResponse;
    } catch (error) {
      console.error({ reauthenticateError: error });
    }
  };
  const login = async (
    accessToken: string,
    email: string,
    accountVerified: boolean,
    tokenExpiresAt: number,
  ) => {
    console.log("Initial login values", {
      accessToken,
      email,
      accountVerified,
      tokenExpiresAt,
    });

    try {
      setIsAuthenticated(true);
      setEmail(email);
      setAccessToken(accessToken);
      setVerified(accountVerified);

      await AsyncStorage.setItem("accessToken", accessToken);
      await AsyncStorage.setItem("token", accessToken);
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("tokenExpiresAt", String(tokenExpiresAt));

      await AsyncStorage.setItem(
        "verified",
        accountVerified ? "user_verified" : "user_unverified",
      );

      console.log("Authentication data stored successfully");
    } catch (err) {
      console.error("Error storing authentication data:", err);
    }
  };

  const logout = async () => {
    try {
      setIsAuthenticated(false);
      await AsyncStorage.clear();
    } catch (err) {
      console.error("Error clearing local storage data:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        email,
        verified,
        updateVerified,
        accessToken,
        reAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
