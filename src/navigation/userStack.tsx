import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navTypes";
const Stack = createNativeStackNavigator<RootStackParamList>();

//import the screens
import AppHome from "../screens/Home/AppHome";
import ManageRiders from "../screens/ManageRiders/ManageRiders";
import RiderDetails from "../screens/RiderDetails/RiderDetails";
import RiderRegistration from "../screens/RiderRegistration/RiderRegistration";
import PendingDeliveries from "../screens/PendingDeliveries/PendingDeliveries";
import ManageBookings from "../screens/ManageBookings/ManageBookings";
import BookingRecords from "../screens/BookingRecords/BookingRecords";
import BookingRecordsList from "../screens/BookingRecordList/BookingRecordList";
import BookingDetails from "../screens/BookingDetails/BookingDetails";
import IRMain from "../screens/IRMain/IRMain";
import IRList from "../screens/IRList/IRList";
import ChatList from "../screens/ChatList/ChatList";
import ChatPage from "../screens/ChatPage/ChatPage";
import Notification from "../screens/Notification/Notification";
import UserLoading from "../screens/UserLoading";
import VerifyEmail from "../screens/VerifyEmail/VerifyEmail";

export default function UserStack(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="UserLoading" component={UserLoading} />
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen name="ManageRiders" component={ManageRiders} />
        <Stack.Screen name="RiderDetails" component={RiderDetails} />
        <Stack.Screen name="RiderRegistration" component={RiderRegistration} />
        <Stack.Screen name="PendingDeliveries" component={PendingDeliveries} />
        <Stack.Screen name="ManageBookings" component={ManageBookings} />
        <Stack.Screen name="BookingRecords" component={BookingRecords} />
        <Stack.Screen
          name="BookingRecordsList"
          component={BookingRecordsList}
        />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
        <Stack.Screen name="IRMain" component={IRMain} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="IRList" component={IRList} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="VerifyEmail" component={VerifyEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
