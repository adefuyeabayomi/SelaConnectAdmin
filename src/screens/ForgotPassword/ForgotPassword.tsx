import React, { useState } from "react";
// UI components : native and external libraries
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import SCInput from "../../components/input/input";
import { SCButton } from "../../components/button/button";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { FeedbackOverlay } from "../../components/feedbackModal/FeedbackModal";

// functions imports
import validateEmail from "../../functions/emailValidation";

// style imports
import { h1Styles, centerText, paraStyles } from "../../styles/textstyles";
import { efficiency } from "../../styles/colordef";
import styles from "./style";

// type definitions
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import authService from "../../functions/services/authService";
type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;

// icon components
let envelope = (
  <FontAwesome5 name="envelope" size={17} color={efficiency.efficiencyTint4} />
);

function ForgotPassword({
  navigation,
}: ForgotPasswordScreenProps): React.JSX.Element {
  let [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<"success" | "error">("success");
  const [body, setBody] = useState("");

  const toggleLoading = () => {
    setLoading(!loading);
  };

  const toggleFeedback = () => {
    setVisible(!visible);
  };

  function successFn() {
    toggleLoading();
    setType("success");
    setBody(
      "A reset email has been sent to your email. Please follow the instructions to change your password.",
    );
    toggleFeedback();
  }

  function errorFn() {
    toggleLoading();
    setType("error");
    setBody(
      "An error occured while trying to send reset link, please try again.",
    );
    toggleFeedback();
  }

  function sendResetLink() {
    toggleLoading();
    authService
      .forgotPassword(email)
      .then(() => {
        successFn();
      })
      .catch((err) => {
        errorFn();
      });
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.main}>
        <View style={{ flex: 1 }}>
          <View style={styles.spacerTop} />
          <View>
            <View>
              <Text
                style={[
                  h1Styles.h1_bold,
                  centerText.center,
                  { color: efficiency.efficiencyShade5 },
                ]}
              >
                Forgot Password
              </Text>
              <Text
                style={[
                  paraStyles.para_regular,
                  centerText.center,
                  { color: efficiency.efficiencyShade5 },
                ]}
              >
                Please enter the email you used to register the account, If the
                email exists in our database, you would receive a password reset
                link. The link is valid for only one day.
              </Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View>
              <SCInput
                value={email}
                leftIcon={envelope}
                placeholder="Input your email"
                onChangeText={setEmail}
                validate={validateEmail}
              ></SCInput>
            </View>
          </View>
          <View>
            <View>
              <SCButton onPress={sendResetLink}>Send Reset Link</SCButton>
            </View>
          </View>
          <View style={styles.spacerBottom} />
        </View>
        <FeedbackOverlay
          type={type}
          visible={visible}
          actionFn={toggleFeedback}
          backdropPressFn={() => {}}
          body={body}
          buttonText={"Okay"}
        ></FeedbackOverlay>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ForgotPassword;
