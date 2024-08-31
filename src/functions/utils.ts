import { DeliveryByDay, DeliveryOrder } from "./services/deliveryOrder";

export function hasTimeReached(givenTime: number) {
  // Get the current time as a timestamp
  const currentTime = Date.now();
  // Compare current time with the given time
  if (currentTime >= givenTime) {
    return true; // Current time has reached or passed the given time
  } else {
    return false; // Current time has not yet reached the given time
  }
}
export interface ValidationResult {
  isValid: boolean;
  errors: { fieldName: string; error: string }[];
}

export const validateDeliveryOrder = (
  order: DeliveryOrder,
): ValidationResult => {
  const errors: { fieldName: string; error: string }[] = [];

  // Validate Required String Fields
  const requiredStringFields: { field: keyof DeliveryOrder; name: string }[] = [
    { field: "senderName", name: "Sender Name" },
    { field: "senderPhoneNo", name: "Sender Phone Number" },
    { field: "receiverName", name: "Receiver Name" },
    { field: "receiverPhoneNo", name: "Receiver Phone Number" },
    { field: "pickupAddress", name: "Pickup Address" },
    { field: "dropoffAddress", name: "Dropoff Address" },
    { field: "pickupArea", name: "Pickup Area" },
    { field: "dropoffArea", name: "Dropoff Area" },
    { field: "paymentMethod", name: "Payment Method" },
  ];

  requiredStringFields.forEach(({ field, name }) => {
    const value = order[field];
    if (typeof value !== "string" || value.trim() === "") {
      errors.push({
        fieldName: field,
        error: `${name} is required and cannot be empty.`,
      });
    }
  });

  // Validate Required Number Fields
  const requiredNumberFields: { field: keyof DeliveryOrder; name: string }[] = [
    { field: "price", name: "Price" },
  ];

  requiredNumberFields.forEach(({ field, name }) => {
    const value = order[field];
    if (typeof value !== "number" || isNaN(value) || value <= 0) {
      errors.push({
        fieldName: field,
        error: `${name} is required and must be a positive number.`,
      });
    }
  });

  // Validate Phone Numbers Format (Optional Enhancement)
  const phoneFields: { field: keyof DeliveryOrder; name: string }[] = [
    { field: "senderPhoneNo", name: "Sender Phone Number" },
    { field: "receiverPhoneNo", name: "Receiver Phone Number" },
  ];

  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // E.164 format

  phoneFields.forEach(({ field, name }) => {
    const value = order[field] as string;
    if (!(value.length >= 11 && value.length <= 14)) {
      errors.push({
        fieldName: field,
        error: `${name} is invalid. Please provide a valid phone number.`,
      });
    }
  });

  // Validate Payment Method
  const validPaymentMethods: DeliveryOrder["paymentMethod"][] = [
    "online",
    "ondelivery",
    "onpickup",
  ];
  if (!validPaymentMethods.includes(order.paymentMethod)) {
    errors.push({
      fieldName: "paymentMethod",
      error: `Payment Method is invalid. Valid options are: ${validPaymentMethods.join(", ")}.`,
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export const validateFeedbackProvider = (
  fieldName: string,
  errorArray: { fieldName: string; error: string }[],
): { state: "default" | "success" | "warning" | "error"; text: string } => {
  const errorItem = errorArray.find((x) => x.fieldName === fieldName);
  if (errorItem) {
    return {
      state: "error",
      text: errorItem.error,
    };
  }

  return {
    state: "default",
    text: "",
  };
};

export const validateForLabel = (
  field: string,
): { state: "default" | "success" | "warning" | "error"; text: string } => {
  if (field.length == 0) {
    return {
      state: "error",
      text: "This field is required",
    };
  }

  return {
    state: "default",
    text: "",
  };
};

export function getReadablePaymentMethod(paymentMethod: string): string {
  switch (paymentMethod) {
    case "online":
      return "Pay Online";
    case "ondelivery":
      return "Pay On Delivery";
    case "onpickup":
      return "Pay On Pickup";
    default:
      return "Unknown Payment Method";
  }
}

export function removeDomainFromEmail(email: string): string {
  const atIndex = email.indexOf("@");

  if (atIndex === -1) {
    // If no '@' symbol is found, return the email as is
    return email;
  }

  // Return the part of the string before the '@' symbol
  return email.substring(0, atIndex);
}

export const sortDeliveriesByDay = (
  deliveries: DeliveryByDay[],
): DeliveryByDay[] => {
  return deliveries.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA.getTime() - dateB.getTime();
  });
};

export const isOverdue = (dateString: string): boolean => {
  const givenDate = new Date(dateString);
  const currentDate = new Date();

  // Reset the time part of both dates to only compare the date
  givenDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  return givenDate.getTime() < currentDate.getTime();
};

export const isToday = (dateString: string): boolean => {
  const givenDate = new Date(dateString);
  const currentDate = new Date();

  // Reset the time part of both dates to only compare the date
  givenDate.setHours(0, 0, 0, 0);
  currentDate.setHours(0, 0, 0, 0);

  return givenDate.getTime() === currentDate.getTime();
};
