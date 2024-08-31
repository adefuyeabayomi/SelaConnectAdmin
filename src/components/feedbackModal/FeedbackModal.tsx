import React, { useState } from "react";
import { View, Image, StyleSheet, Text, ActivityIndicator } from "react-native";
import {
  SCButtonSuccess,
  SCButtonError,
  SCButtonInfo,
  SCButtonWarning,
} from "../button/button";
import { Overlay } from "@rneui/themed";

import { centerText, paraStyles } from "../../styles/textstyles";
import { efficiency } from "../../styles/colordef";
import { margins, paddings } from "../../styles/spacing";
import { borderStyles } from "../../styles/borders";

const styles = StyleSheet.create({
  main: {
    width: "80%",
  },
  spacerTop: {
    marginTop: 40,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    flex: 0,
    alignItems: "center",
  },
  container: {
    marginTop: 20,
  },
});
interface FeedbackOverlayPropType {
  visible: boolean;
  body: string | React.JSX.Element;
  buttonText: string;
  actionFn: () => void;
  backdropPressFn?: () => void;
  type?: "info" | "warning" | "success" | "error";
  children?: React.JSX.Element;
}
export function FeedbackOverlay({
  visible = false,
  body = "",
  buttonText = "",
  actionFn = () => {}, // Default action function as an empty function
  backdropPressFn = () => {}, // Default backdrop press function as an empty function
  type = "info", // Default type as "info"
}: FeedbackOverlayPropType): React.ReactElement {
  let successButton = (
    <SCButtonSuccess onPress={actionFn}>
      <Text>{buttonText}</Text>
    </SCButtonSuccess>
  );
  let warnButton = (
    <SCButtonWarning onPress={actionFn}>
      <Text>{buttonText}</Text>
    </SCButtonWarning>
  );
  let infoButton = (
    <SCButtonInfo onPress={actionFn}>
      <Text>{buttonText}</Text>
    </SCButtonInfo>
  );
  let errorButton = (
    <SCButtonError onPress={actionFn}>
      <Text>{buttonText}</Text>
    </SCButtonError>
  );
  let successImage = (
    <Image
      style={styles.imageStyle}
      source={require("../../assets/images/successFeedback.png")}
    />
  );
  let warningImage = (
    <Image
      style={styles.imageStyle}
      source={require("../../assets/images/warningFeedback.png")}
    />
  );
  let infoImage = (
    <Image
      style={styles.imageStyle}
      source={require("../../assets/images/infoFeedback.png")}
    />
  );
  let errorImage = (
    <Image
      style={styles.imageStyle}
      source={require("../../assets/images/errorFeedback.png")}
    />
  );
  let images = {
    warning: warningImage,
    success: successImage,
    info: infoImage,
    error: errorImage,
  };
  let buttons = {
    warning: warnButton,
    info: infoButton,
    error: errorButton,
    success: successButton,
  };

  return (
    <View>
      <Overlay
        overlayStyle={{ borderRadius: 16 }}
        onBackdropPress={backdropPressFn}
        isVisible={visible}
      >
        <View style={[styles.main, borderStyles.r30]}>
          <View
            style={[styles.imageContainer, styles.container, paddings.pb10]}
          >
            {images[type]}
          </View>
          <View style={[margins.mt10, , paddings.pb5]}>
            <Text
              style={[
                centerText.center,
                paraStyles.para_regular,
                { color: efficiency.efficiencyShade5 },
              ]}
            >
              {body}
            </Text>
          </View>
          <View style={[styles.container]}>{buttons[type]}</View>
          <View style={[styles.spacerTop]} />
        </View>
      </Overlay>
    </View>
  );
}

export function Modal({
  children,
  visible,
  backdropPressFn, // Default type as "info"
}: {
  children: React.JSX.Element;
  visible: boolean;
  backdropPressFn: () => void;
}): React.ReactElement {
  return (
    <View>
      <Overlay
        overlayStyle={{ borderRadius: 16 }}
        onBackdropPress={backdropPressFn}
        isVisible={visible}
      >
        <View style={[styles.main, borderStyles.r30, paddings.pb30]}>
          {children}
        </View>
      </Overlay>
    </View>
  );
}
interface FeedbackLoadingPropType {
  visible: boolean;
  toggleOverlay?: () => void;
}

export function FeedbackLoading({
  visible,
  toggleOverlay,
}: FeedbackLoadingPropType): React.JSX.Element {
  return (
    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
      <ActivityIndicator color={efficiency.efficiencyTint5} />
    </Overlay>
  );
}
