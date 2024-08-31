export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
  VerifyEmail: undefined;
  AuthLoading: undefined;
  UserLoading: undefined;
  AppHome: undefined;
  ManageRiders: undefined;
  RiderDetails: { id: string };
  RiderRegistration: undefined;
  PendingDeliveries: undefined;
  ManageBookings: { ids: string[]; date: string };
  BookingDetails: { id: string };
  BookingRecords: undefined;
  BookingRecordsList: { ids: string[]; date: string };
  IRMain: undefined;
  IRList: undefined;
  ChatList: undefined;
  ChatPage: undefined;
  Notification: undefined;
  Ref: undefined;
  CSView: undefined;
};

export type InputStateType = "default" | "success" | "warning" | "error";
export type signupFunction = (
  email: string,
  password: string,
  successCallback: (val: object) => void,
  errorCallback: (err: object) => void,
) => void;

interface inputValidatePropType {
  state: "default" | "success" | "warning" | "error";
  text: string;
}
export interface SCBasicTextInputProps {
  defaultValue?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  validate: (text: string) => {
    state: "default" | "success" | "warning" | "error";
    text: string;
  };
  leftIcon?: React.JSX.Element;
  value: string;
  type?: string;
}

export const navLocations = {
  home: "home",
  records: "records",
  pending: "pending",
  support: "support",
  info: "info",
  others: "others",
};

export const paymentOptions = {
  online: "online",
  onDelivery: "ondelivery",
  onPickup: "onpickup",
};

export let CSTypes = {
  whatsapp: "whatsapp",
  call: "call",
  inApp: "inApp",
};

export const notificationTypes = {
  bookingSuccess: "bookingSuccess",
};
