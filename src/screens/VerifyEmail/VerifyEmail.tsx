import React, { useState } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import {
  FeedbackOverlay,
  FeedbackLoading,
} from "../../components/feedbackModal/FeedbackModal";
import { SCButton, SCButtonOutline } from "../../components/button/button";
import { RootStackParamList } from "../../types/navTypes";
import { efficiency } from "../../styles/colordef";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type VerifyEmailSreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyEmail"
>;
import { h1Styles, centerText, paraStyles } from "../../styles/textstyles";

import authService from "../../functions/services/authService";

import styles from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../contexts/AuthContext";

function VerifyEmail({ navigation }: VerifyEmailSreenProps): React.JSX.Element {
  const [visible, setVisible] = useState(false);
  const [feedbackV, setFeedbackV] = useState(false);
  let auth = useAuth();
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  const toggleF = () => {
    setFeedbackV(!feedbackV);
  };
  let [type, setType] = useState<
    "info" | "error" | "success" | "warning" | undefined
  >("info");
  let [body, setBody] = useState("");

  async function verifyAccount() {
    setVisible(true);
    let email = await AsyncStorage.getItem("email");
    console.log({ email, accessToken: auth.accessToken });
    auth
      .reAuth(auth.accessToken)
      .then((res) => {
        console.log({ res });
        setVisible(false);
        if (res) {
          if (res.verified) {
            auth.login(
              res.token as string,
              auth.email,
              res.verified,
              res.tokenExpiresAt,
            );
          } else {
            setType("info");
            setBody(
              "Your account is not verified yet. Kindly request for a resend of the verification link if you cannot find it.",
            );
            setFeedbackV(true);
          }
        }
      })
      .catch((err) => {
        toggleOverlay();
        console.error(err.message);
        setType("error");
        setBody(
          "An Error Occured while trying to reload data. Please ensure that you have a stable internet connection. ",
        );
        setFeedbackV(true);
      });
    authService.accountVerificationStatus(email as string);
  }

  async function resend() {
    let email = await AsyncStorage.getItem("email");
    console.log({ email });
    authService
      .sendVerifyMail(email as string)
      .then(() => {
        setType("success");
        setBody(
          "A verification email was just sent again, please check your mail and click the link to verify your account.",
        );
        setFeedbackV(true);
      })
      .catch((err: any) => {
        setType("error");
        setBody(
          "An Error Occured while trying to send a verification email. Please ensure that you have a stable internet connection. ",
        );
        setFeedbackV(true);
      });
  }

  function goToAppHome() {
    navigation.navigate("AppHome");
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
                Verify Email
              </Text>
              <Text
                style={[
                  paraStyles.para_regular,
                  centerText.center,
                  { color: efficiency.efficiencyShade5 },
                ]}
              >
                Final Step. A verification link has been sent to your email.
                Kindly check your mail and verify your account. If you have done
                so, Click "I have verified" to confirm. If you didn&apos;t get
                any mail or the link expired, click the "Resend Email Button."{" "}
              </Text>
            </View>
          </View>

          <View>
            <View style={styles.buttonContainer}>
              <SCButton onPress={verifyAccount}>
                I have verified my account
              </SCButton>
            </View>
          </View>
          <View>
            <View>
              <SCButtonOutline onPress={resend}>Resend Link</SCButtonOutline>
            </View>
          </View>
          <View style={styles.spacerBottom} />
        </View>
        <FeedbackLoading
          visible={visible}
          toggleOverlay={toggleOverlay}
        ></FeedbackLoading>
        <FeedbackOverlay
          type={type}
          visible={feedbackV}
          actionFn={toggleF}
          backdropPressFn={() => {}}
          body={body}
          buttonText={"Okay"}
        ></FeedbackOverlay>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default VerifyEmail;
