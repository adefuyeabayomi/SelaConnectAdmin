import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "IRMain">;

import styles from "./style";
import { paddings, margins } from "../../styles/spacing";
import { InvoicesDayItem } from "../../components/Items/item";

export default function IRMain({ navigation }: ScreenProps): React.JSX.Element {
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
  function goToIRList() {
    navigation.navigate("IRList");
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AbsHeader backFn={goBack} headerVal={"Invoices and Reciepts Records"} />
      <AbsNav
        location=""
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Invoices and Reciepts"} />
        <View style={[paddings.pt15]} />
        <View style={[paddings.p10]}>
          <InvoicesDayItem
            actionFn={goToIRList}
            date="April 24, 2024"
            amount={14}
            paid={13}
            unpaid={1}
          />
        </View>
        <View style={[paddings.p10]}>
          <InvoicesDayItem
            actionFn={goToIRList}
            date="April 24, 2024"
            amount={14}
            paid={13}
            unpaid={1}
          />
        </View>
        <View style={[paddings.p10]}>
          <InvoicesDayItem
            actionFn={goToIRList}
            date="April 24, 2024"
            amount={14}
            paid={13}
            unpaid={1}
          />
        </View>

        <View style={margins.mt50} />
        <View style={margins.mt10} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
