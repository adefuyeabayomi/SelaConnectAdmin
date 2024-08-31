import React, { useState } from "react";
// UI Components : Native &
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FeedbackLoading } from "../../components/feedbackModal/FeedbackModal";
import { SCButton } from "../../components/button/button";
import SCInput from "../../components/input/input";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

//functions imports
import { useAuth } from "../../contexts/AuthContext";
import { useToast } from "react-native-toast-notifications";
import validateEmail from "../../functions/emailValidation";
import validatePassword from "../../functions/passwordValidation";
import { validatePassmatch } from "../../functions/passwordValidation";

// styles imports
import styles from "./style";
import { efficiency, utilityColors } from "../../styles/colordef";
import {
  h1Styles,
  paraStyles,
  centerText,
  smallStyles,
} from "../../styles/textstyles";

// types definitions
import { InputStateType, RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import authService from "../../functions/services/authService";
import profileService from "../../functions/services/profileService";
type signUpScreenProps = NativeStackScreenProps<RootStackParamList, "Signup">;

// icon components
let envelope = (
  <FontAwesome5 name="envelope" size={17} color={efficiency.efficiencyTint4} />
);
let user = (
  <FontAwesome5 name="user" size={17} color={efficiency.efficiencyTint4} />
);

function SignUp({ navigation }: signUpScreenProps): React.JSX.Element {
  const auth = useAuth();
  let [email, setEmail] = useState("");
  let [username, setUsername] = useState("");
  let [password1, setPassword1] = useState("");
  let [password2, setPassword2] = useState("");
  const [visible, setVisible] = useState(false);

  const toast = useToast();

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  function goToLogin() {
    navigation.navigate("Login");
  }

  function signUp() {
    if (validateEmail(email).state !== "success") {
      toast.show("Please input a valid email to continue.", {
        type: "normal",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    if (username.length < 3) {
      toast.show("Username should be have 4 or more characters", {
        type: "normal",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    if (password1 == "" && password2 == "") {
      toast.show("Please provide a password to proceed", {
        type: "normal",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    if (validatePassword(password1).state == "error") {
      toast.show(
        "Your password is not strong enough, please update it to proceed",
        {
          type: "normal",
          placement: "bottom",
          duration: 4000,
          animationType: "slide-in",
        },
      );
      return;
    }
    if (validatePassmatch(password1, password2).state !== "success") {
      toast.show("Please confirm and make sure the password fields match.", {
        type: "normal",
        placement: "bottom",
        duration: 4000,
        animationType: "slide-in",
      });
      return;
    }
    setVisible(true);
    function errorCallback(err: object) {
      setVisible(false);
      // add afeedback modal here
    }
    authService
      .signupWithEmailAndPassword(email, password1, "admin")
      .then((response) => {
        console.log({ authSignupResponse: JSON.stringify(response) });
        auth.login(
          response.token as string,
          email,
          false,
          response.tokenExpiresAt as number,
        );
        setVisible(false);
        profileService
          .createProfile({ username }, response.token as string)
          .then((res) => {
            console.log("profile created successfully", res);
          })
          .catch((err) => {
            toast.show(err.message, {
              type: "normal",
              placement: "bottom",
              duration: 5000,
              animationType: "slide-in",
            });
          });
      })
      .catch((err) => {
        errorCallback(err);
        toast.show(err.message, {
          type: "normal",
          placement: "bottom",
          duration: 5000,
          animationType: "slide-in",
        });
      });
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ marginTop: 40 }} />
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
                  Create Account
                </Text>
                <Text
                  style={[
                    paraStyles.para_regular,
                    centerText.center,
                    { color: efficiency.efficiencyShade5 },
                  ]}
                >
                  Please input your correct details.
                </Text>
              </View>
              <View style={{ flex: 0 }}>
                <View style={styles.inputParent}>
                  <SCInput
                    value={email}
                    onChangeText={(text) => {
                      setEmail(text.replaceAll(" ", ""));
                    }}
                    validate={validateEmail}
                    leftIcon={envelope}
                    placeholder="Please input your email address"
                  />
                </View>
                <View style={styles.inputParent}>
                  <SCInput
                    value={username}
                    onChangeText={setUsername}
                    validate={() => {
                      return { state: "default" as InputStateType, text: "" };
                    }}
                    leftIcon={user}
                    placeholder="Add your username."
                  />
                </View>
                <View style={styles.inputParent}>
                  <SCInput
                    value={password1}
                    type="password"
                    validate={validatePassword}
                    onChangeText={setPassword1}
                    placeholder="Create Password"
                  />
                </View>
                <View style={styles.inputParent}>
                  <SCInput
                    value={password2}
                    type="password"
                    validate={() => {
                      return validatePassmatch(password1, password2);
                    }}
                    onChangeText={setPassword2}
                    placeholder="Confirm Password"
                  />
                </View>
                <View style={styles.inputParent}>
                  <Text
                    style={[
                      smallStyles.small_regular,
                      centerText.center,
                      { color: efficiency.efficiencyMain },
                    ]}
                  >
                    By clicking{" "}
                    <Text style={smallStyles.small_bold}>create account </Text>
                    or using the alternative sign in options below, you agree to
                    our terms of use and services. Visit our legal page to learn
                    more.
                  </Text>
                </View>
              </View>
              <View style={{ flex: 0 }}>
                <View style={styles.utilTextGroup}>
                  <SCButton onPress={signUp}>Sign Up</SCButton>
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
                        Already have an account?{" "}
                      </Text>
                    </View>
                    <View>
                      <TouchableOpacity onPress={goToLogin}>
                        <Text
                          style={[
                            paraStyles.para_medium,
                            { color: utilityColors.infoDeep },
                          ]}
                        >
                          Login now
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
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
          </View>
        </TouchableWithoutFeedback>
        <View style={{ marginTop: 40 }} />
        <FeedbackLoading
          visible={visible}
          toggleOverlay={toggleOverlay}
        ></FeedbackLoading>
      </ScrollView>
    </SafeAreaView>
  );
}
export default SignUp;
