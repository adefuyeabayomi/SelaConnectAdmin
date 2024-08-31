import { InputStateType } from "../types/navTypes";
export default function validateEmail(email: string) {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Check if the email is empty
  if (!email) {
    return { state: "default" as InputStateType, text: "" }; // Default state
  }
  // Check if the email matches the regex pattern
  if (emailRegex.test(email)) {
    return { state: "success" as InputStateType, text: "Email is valid" }; // Success state
  } else {
    return {
      state: "error" as InputStateType,
      text: "Please enter a valid email address",
    }; // Error state
  }
}
