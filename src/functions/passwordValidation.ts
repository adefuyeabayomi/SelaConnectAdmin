import checkPasswordStrength from "./passwordStrength";
import { InputStateType } from "../types/navTypes";

export default function validatePassword(password: string) {
  let strength = checkPasswordStrength(password);
  // Check if password is empty
  if (!password) {
    return { state: "default" as InputStateType, text: "" };
  } else if (strength.strength == "weak") {
    return { state: "error" as InputStateType, text: strength.tip };
  } else if (strength.strength == "medium") {
    return { state: "warning" as InputStateType, text: strength.tip };
  } else if (strength.strength == "strong") {
    return { state: "success" as InputStateType, text: strength.tip };
  } else {
    return { state: "success" as InputStateType, text: strength.tip };
  }
}

export function validatePassmatch(password1: string, password2: string) {
  if (password1 == password2) {
    return {
      state: "success" as InputStateType,
      text: "Password is a match! All set",
    };
  } else {
    return {
      state: "error" as InputStateType,
      text: "The password does not match what you provided above.",
    };
  }
}

export function validatePasswordGreaterThan8(password: string) {
  // Check if password is empty
  if (!password) {
    return { state: "default" as InputStateType, text: "" };
  }
  const texts = {
    error: "Password must contain at least 8 characters",
    success: "All Set!",
  };
  return password.length < 8
    ? { state: "error" as InputStateType, text: texts.error }
    : { state: "success" as InputStateType, text: texts.success };
}
