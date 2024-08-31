import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { efficiency, utilityColors } from "../../styles/colordef";
import { miniStyles, paraStyles } from "../../styles/textstyles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { InputStateType } from "../../types/navTypes";
import { SCBasicTextInputProps } from "../../types/navTypes";

let styles = StyleSheet.create({
  basicTI: {
    padding: 5,
    paddingHorizontal: 10,
    paddingRight: 38,
    borderWidth: 1,
    borderRadius: 12,
    height: 50,
    borderColor: efficiency.efficiencyTint3,
    color: efficiency.efficiencyShade5,
  },
  labelForBasic: {
    marginBottom: 3,
    color: efficiency.efficiencyShade5,
  },
  inputStateIcon: {
    position: "absolute",
    right: 5,
    top: 16,
  },
  leftIcon: {
    position: "absolute",
    left: 5,
    top: 16,
  },
});

enum StateType {
  Default = "default",
  Error = "error",
  Success = "success",
  Warning = "warning",
}

let colorVal = {
  default: efficiency.efficiencyTint3,
  error: utilityColors.errorDeep,
  success: efficiency.efficiencyMain,
  warning: utilityColors.warningDeep,
};

let stateIcons = {
  success: (
    <FontAwesome5
      name="check-circle"
      size={17}
      color={utilityColors.successDeep}
    />
  ),
  error: (
    <FontAwesome5 name="exclamation-circle" size={17} color={colorVal.error} />
  ),
  warning: (
    <FontAwesome5
      name="exclamation-triangle"
      size={17}
      color={colorVal.warning}
    />
  ),
  default: "",
};

let secureIcons = {
  padlock: (
    <FontAwesome5 name="lock" size={17} color={efficiency.efficiencyTint4} />
  ),
  eyeOpen: (
    <FontAwesome5 name="eye" size={17} color={efficiency.efficiencyTint4} />
  ),
  eyeClose: (
    <FontAwesome5
      name="eye-slash"
      size={17}
      color={efficiency.efficiencyTint4}
    />
  ),
};

function SCInput({
  defaultValue = "",
  value,
  onChangeText,
  placeholder = "Enter text",
  label = "",
  validate,
  leftIcon,
  type = "text",
}: SCBasicTextInputProps): React.ReactElement {
  const [inputState, setInputState] = useState<StateType>(StateType.Default);
  const [errorMessage, setErrorMessage] = useState("");
  const [warnMessage, setWarnMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  let [secure, setSecure] = useState<boolean>(true);
  // set input left padding
  let leftPadding = 0;
  leftIcon ? (leftPadding = 33) : (leftPadding = 10);
  type == "password" ? (leftPadding = 33) : true;

  function validateInput(): void {
    let text = value;
    let validated = validate(text);
    if (validated.state == "success") {
      setInputState(StateType.Success);
      setErrorMessage("");
      setWarnMessage("");
      setSuccessMessage(validated.text);
    } else if (validated.state == "warning") {
      setInputState(StateType.Warning);
      setWarnMessage(validated.text);
      setErrorMessage("");
      setSuccessMessage("");
    } else if (validated.state == "error") {
      setInputState(StateType.Error);
      setErrorMessage(validated.text);
      setWarnMessage("");
      setSuccessMessage("");
    } else if (validated.state == "default") {
      setInputState(StateType.Default);
      setErrorMessage("");
      setWarnMessage("");
      setSuccessMessage("");
    }
  }

  function setToDefault() {
    setInputState(StateType.Default);
    setErrorMessage("");
    setWarnMessage("");
  }

  let Msgs = {
    default: <Text></Text>,
    warning: (
      <Text
        style={[{ color: utilityColors.warningDeep }, miniStyles.mini_regular]}
      >
        {warnMessage}
      </Text>
    ),
    error: (
      <Text
        style={[{ color: utilityColors.errorDeep }, miniStyles.mini_regular]}
      >
        {errorMessage}
      </Text>
    ),
    success: (
      <Text
        style={[{ color: utilityColors.successDeep }, miniStyles.mini_regular]}
      >
        {successMessage}
      </Text>
    ),
  };

  let labelView = label ? (
    <Text
      style={[
        paraStyles.para_regular,
        styles.labelForBasic,
        { color: colorVal[inputState] },
      ]}
    >
      {label}
    </Text>
  ) : (
    <View />
  );
  let MsgDisplay = inputState == "default" ? <View></View> : Msgs[inputState];

  let SCTextInput = (
    <View>
      {labelView}
      <View>
        <TextInput
          onFocus={setToDefault}
          onBlur={validateInput}
          style={[
            styles.basicTI,
            { borderColor: colorVal[inputState], paddingLeft: leftPadding },
          ]}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
        <View style={styles.inputStateIcon}>
          <Text> {stateIcons[inputState]} </Text>
        </View>
        <View style={styles.leftIcon}>
          <Text> {leftIcon} </Text>
        </View>
      </View>
      {MsgDisplay}
    </View>
  );

  let SCPasswordInput = (
    <View>
      {labelView}
      <View>
        <TextInput
          onFocus={setToDefault}
          onBlur={validateInput}
          secureTextEntry={secure}
          style={[
            styles.basicTI,
            { borderColor: colorVal[inputState], paddingLeft: leftPadding },
          ]}
          defaultValue={defaultValue}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
        <View style={styles.inputStateIcon}>
          <TouchableWithoutFeedback
            onPress={() => {
              setSecure(!secure);
            }}
          >
            <Text> {secure ? secureIcons.eyeOpen : secureIcons.eyeClose} </Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.leftIcon}>
          <Text> {secureIcons.padlock} </Text>
        </View>
      </View>
      {MsgDisplay}
    </View>
  );

  if (type == "text") {
    return SCTextInput;
  } else if (type == "password") {
    return SCPasswordInput;
  }
  return <View />;
}

export default SCInput;
