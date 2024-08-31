// deliveryOrder.ts

import axiosInstance from "./axiosInstance"; // Adjust the path as necessary
export interface SortedDeliveryOrdersResponse {
  pendingTotal: number; // Total number of pending deliveries
  today: number; // Total number of deliveries scheduled for today or created today
  todayDeliveries: string[]; // Array of delivery IDs for today's deliveries
  otherDays: {
    date: string; // The date of the deliveries in 'YYYY-MM-DD' format
    total: number; // Total number of deliveries for that date
    ids: string[]; // Array of delivery IDs for that date
  }[]; // Array of objects representing deliveries for each date
}
export interface DeliveryByDay {
  date: string; // The date in 'YYYY-MM-DD' format
  total: number; // The total number of deliveries for that date
  deliveryIds: string[]; // Array of delivery order IDs
}

export interface SortedResponse {
  pendingTotal: number; // Total number of pending deliveries
  deliveriesByDay: DeliveryByDay[]; // Array of deliveries grouped by day
}

// Define the DeliveryOrder interface
export interface DeliveryOrder {
  packageDescription?: string;
  packageWeight?: number;
  perishables?: boolean;
  fragile?: boolean;
  pickupIsResidential?: boolean;
  dropoffIsResidential?: boolean;
  pickupRestrictions?: string;
  dropoffRestrictions?: string;
  senderName: string;
  senderPhoneNo: string;
  receiverName: string;
  receiverPhoneNo: string;
  pickupAddress: string;
  dropoffAddress: string;
  pickupArea: string;
  dropoffArea: string;
  paymentMethod: "online" | "ondelivery" | "onpickup";
  paymentStatus?: "pending" | "paid";
  price: number;
  totalDistance?: number;
  user?: string; // assuming the User model uses a string ID
  deliveryId: string;
  vendor?: boolean;
  assignedRider?: string;
  deliveryTrackStatus?: "pending" | "started" | "picked" | "dropped";
  isExpress?: boolean;
  isBulk?: boolean;
  bulkOptions?: Record<string, any>;
  isSchedule?: boolean;
  scheduleOptions?: Record<string, any>;
  costData?: Record<string, any>;
  locationData?: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
  email: string;
  paymentReference?: string;
  transactionReference?: string;
  deliveryType: string;
  _id?: string;
}

// Service functions

const createDeliveryOrder = async (
  deliveryOrder: DeliveryOrder,
  token: string,
) => {
  console.log(deliveryOrder);
  try {
    const response = await axiosInstance.post(
      "/delivery-orders",
      deliveryOrder,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Error creating delivery order: ${error.message}`);
  }
};

const updateDeliveryOrder = async (
  orderId: string,
  updates: Partial<DeliveryOrder>,
  token: string,
) => {
  try {
    const response = await axiosInstance.put(
      `/delivery-orders/${orderId}`,
      updates,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Error updating delivery order: ${error.message}`);
  }
};

const getDeliveryOrders = async (
  page: number,
  status: string,
  user: string,
) => {
  try {
    const response = await axiosInstance.get("/delivery-orders", {
      params: { page, limit: 30, status, user },
    });
    return response.data as DeliveryOrder[];
  } catch (error: any) {
    throw new Error(`Error retrieving delivery orders: ${error.message}`);
  }
};

const getDeliveryOrdersWithIds = async (
  ids: string[],
): Promise<DeliveryOrder[]> => {
  try {
    // Make a POST request to the /orders-by-ids endpoint
    const response = await axiosInstance.post(`delivery-orders/orders-by-ids`, {
      ids,
    });
    // Return the response data
    return response.data as DeliveryOrder[];
  } catch (error: any) {
    // Handle errors (e.g., logging or throwing)
    throw new Error(`Error fetching orders by IDs: ${error.message}`);
  }
};

const getDeliveryOrderById = async (orderId: string) => {
  try {
    const response = await axiosInstance.get(`/delivery-orders/${orderId}`);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error retrieving delivery order by ID: ${error.message}`);
  }
};
const calculateDeliveryCost = async (deliveryDetails: {
  pickupArea: string;
  dropoffArea: string;
  type: string;
}) => {
  console.log(deliveryDetails);
  try {
    const response = await axiosInstance.post(
      "/delivery-orders/calculate-delivery-cost",
      deliveryDetails,
    );
    return response.data;
  } catch (error: any) {
    throw new Error(`Error calculating delivery cost: ${error.message}`);
  }
};
const getSortedDeliveryOrders = async (
  deliveryTrackStatus: "pending" | "dropped",
): Promise<SortedResponse> => {
  try {
    const response = await axiosInstance.get<SortedResponse>(
      "/delivery-orders/sorted",
      {
        params: {
          deliveryTrackStatus,
        },
      },
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};

export default {
  createDeliveryOrder,
  updateDeliveryOrder,
  getDeliveryOrders,
  getDeliveryOrderById,
  calculateDeliveryCost,
  getSortedDeliveryOrders,
  getDeliveryOrdersWithIds,
};
