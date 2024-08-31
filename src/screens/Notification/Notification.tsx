import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "Notification">;

import styles from "./style";
import { paddings, margins } from "../../styles/spacing";
import { InfoStatic } from "../../components/StaticInformation/StaticInfo";
import { NotificationItem } from "../../components/Items/item";
export default function Notification({
  navigation,
}: ScreenProps): React.JSX.Element {
  function goToPending() {
    navigation.navigate("PendingDeliveries");
  }

  function goToBookingRecords() {
    navigation.navigate("BookingRecords");
  }

  function goToSupport() {
    navigation.navigate("ChatList");
  }

  function goToHome() {
    navigation.navigate("AppHome");
  }

  function goToNotifications() {
    navigation.navigate("Notification");
  }
  function goBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AbsHeader backFn={goBack} headerVal={"Notifications"} />
      <AbsNav
        location="info"
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Notifications"} />
        <View>
          <View style={paddings.p10}>
            <InfoStatic>You do not yet have any Notifications.</InfoStatic>
          </View>
          <View style={paddings.p10}>
            <NotificationItem
              type={"bookingSuccess"}
              text={
                "Booking Successful. Booking saved as “Delivery of electronics to Aleliaide Kemi. ID : XXI32874HF8HF8943H34T"
              }
            />
          </View>
          <View style={paddings.p10}>
            <NotificationItem
              type={"bookingSuccess"}
              text={
                "Booking Successful. Booking saved as “Delivery of electronics to Aleliaide Kemi. ID : XXI32874HF8HF8943H34T"
              }
            />
          </View>
          <View style={paddings.p10}>
            <NotificationItem
              type={"bookingSuccess"}
              text={
                "Booking Successful. Booking saved as “Delivery of electronics to Aleliaide Kemi. ID : XXI32874HF8HF8943H34T"
              }
            />
          </View>
        </View>

        <View style={margins.mt50} />
        <View style={margins.mt10} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
