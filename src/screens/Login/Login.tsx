import React, { useState } from "react";
//UI Components : Native & External Libraries
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from "react-native";
import { SCButton } from "../../components/button/button";
import SCInput from "../../components/input/input";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

// functions imports
import validateEmail from "../../functions/emailValidation";
import { validatePasswordGreaterThan8 } from "../../functions/passwordValidation";

import authService from "../../functions/services/authService";
import { useToast } from "react-native-toast-notifications";

// styles imports
import styles from "./style";
import { efficiency, utilityColors } from "../../styles/colordef";
import { h1Styles, paraStyles, centerText } from "../../styles/textstyles";

//types definitions
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FeedbackLoading } from "../../components/feedbackModal/FeedbackModal";
import { useAuth } from "../../contexts/AuthContext";
type loginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

// icon components
let envelope = (
  <FontAwesome5 name="envelope" size={17} color={efficiency.efficiencyTint4} />
);

function Login({ navigation }: loginScreenProps): React.JSX.Element {
  const auth = useAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let toast = useToast();
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  function goToSignup() {
    navigation.navigate("Signup");
  }

  function goToForgotPassword() {
    navigation.navigate("ForgotPassword");
  }

  function errorFn() {
    setVisible(false);
  }

  function sendLogin() {
    if (validateEmail(email).state !== "success") {
      toast.show("Please input a valid email to continue.", {
        type: "normal",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    if (validatePasswordGreaterThan8(password).state !== "success") {
      toast.show("Password must be greater than 8 characters.", {
        type: "normal",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    setVisible(true);
    authService
      .login(email, password, "admin")
      .then((response) => {
        auth.login(
          response.token as string,
          email,
          response.verified as boolean,
          response.tokenExpiresAt as number,
        );
      })
      .catch((error) => {
        toast.show(error.message, {
          type: "normal",
          placement: "bottom",
          duration: 4000,
          animationType: "slide-in",
        });
        errorFn();
      });
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      accessible={false}
    >
      <View style={styles.main}>
        <View style={{ flex: 1 }}>
          <View style={styles.spacerTop} />
          <View style={{ flex: 0 }}>
            <Text
              style={[
                h1Styles.h1_bold,
                centerText.center,
                { color: efficiency.efficiencyShade5 },
              ]}
            >
              Login
            </Text>
            <Text
              style={[
                paraStyles.para_regular,
                centerText.center,
                { color: efficiency.efficiencyShade5 },
              ]}
            >
              Please input your valid email and password.
            </Text>
          </View>
          <View style={{ flex: 0 }}>
            <View style={styles.inputParent}>
              <SCInput
                value={email}
                onChangeText={setEmail}
                validate={validateEmail}
                leftIcon={envelope}
                placeholder="Please input your email address"
              />
            </View>
            <View style={styles.inputParent}>
              <SCInput
                value={password}
                type="password"
                validate={validatePasswordGreaterThan8}
                onChangeText={setPassword}
                placeholder="Password here"
              />
            </View>
          </View>
          <View style={{ flex: 0 }}>
            <View style={styles.utilTextGroup}>
              <SCButton onPress={sendLogin}>Login</SCButton>
            </View>
          </View>
          <View style={{ flex: 0 }}>
            <View style={styles.utilTextGroup}>
              <View
                style={{
                  flex: 0,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <View>
                  <Text
                    style={[
                      paraStyles.para_regular,
                      { color: efficiency.efficiencyShade5 },
                    ]}
                  >
                    Don&apos;t have an account?{" "}
                  </Text>
                </View>
                <View>
                  <TouchableOpacity onPress={goToSignup}>
                    <Text
                      style={[
                        paraStyles.para_medium,
                        { color: utilityColors.infoDeep },
                      ]}
                    >
                      Register Here
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity onPress={goToForgotPassword}>
                <Text
                  style={[
                    paraStyles.para_medium,
                    centerText.center,
                    { color: utilityColors.errorDeep },
                  ]}
                >
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              borderTopWidth: 1.5,
              flex: 0,
              marginVertical: 15,
              borderColor: efficiency.efficiencyTint3,
            }}
            id="divider"
          />
          <View style={{ flex: 0 }}>
            <View>
              <View>
                <Text
                  style={[
                    paraStyles.para_bold,
                    centerText.center,
                    { color: efficiency.efficiencyShade5 },
                  ]}
                >
                  Or Continue With
                </Text>
              </View>
              <View
                style={{
                  flex: 0,
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 13,
                }}
              >
                <TouchableOpacity>
                  <View
                    style={[
                      styles.altImgParent,
                      { backgroundColor: "#FFDEDC" },
                    ]}
                  >
                    <Image
                      style={styles.altImages}
                      source={require("../../assets/images/google_logo.png")}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.altImgParent,
                      { backgroundColor: "#AACFFF" },
                    ]}
                  >
                    <Image
                      style={styles.facebookImage}
                      source={require("../../assets/images/facebookLogo.png")}
                    />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View
                    style={[
                      styles.altImgParent,
                      { backgroundColor: "#B8B8B8" },
                    ]}
                  >
                    <Image
                      style={styles.altImages}
                      source={require("../../assets/images/appleLogo.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.spacerBottom} />
        </View>
        <FeedbackLoading
          visible={visible}
          toggleOverlay={toggleOverlay}
        ></FeedbackLoading>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
