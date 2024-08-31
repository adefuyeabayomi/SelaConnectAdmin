import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "IRList">;
import { margins, paddings } from "../../styles/spacing";
import styles from "./style";
import { InvoiceItem } from "../../components/Items/item";
import InputGrouping from "../../components/InputGrouping/InputGrouping";
import { MBDataItem1 } from "../../components/ManageBookings/ManageBookingsComponents";
import { centerText, paraStyles } from "../../styles/textstyles";

export default function IRList({ navigation }: ScreenProps): React.JSX.Element {
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
      <AbsHeader backFn={goBack} headerVal={"Invoice List"} />
      <AbsNav
        location=""
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Invoices"} />
        <View style={[paddings.pt15]}></View>

        <View style={[paddings.p10]}>
          <InputGrouping headText="Summary for April 24, 2024">
            <MBDataItem1 field="Total Invoices" value="38" />
          </InputGrouping>
          <Text
            style={[paraStyles.para_bold, centerText.center, paddings.pt20]}
          >
            All invoices
          </Text>
        </View>

        <View style={[paddings.p10]}>
          <InvoiceItem
            paid={true}
            bookingId="XXiewo39901j02f"
            details="Delivery of electronics to Mr Chuks."
            paymentMethod="Pay Online"
            date="April 25, 2024"
            amount="5500"
          />
        </View>
        <View style={[paddings.p10]}>
          <InvoiceItem
            paid={false}
            bookingId="XXiewo39901j02f"
            details="Delivery of electronics to Mr Chuks."
            paymentMethod="Pay Online"
            date="April 25, 2024"
            amount="5500"
          />
        </View>
        <View style={[paddings.p10]}>
          <InvoiceItem
            paid={false}
            bookingId="XXiewo39901j02f"
            details="Delivery of electronics to Mr Chuks."
            paymentMethod="Pay Online"
            date="April 25, 2024"
            amount="5500"
          />
        </View>
        <View style={[paddings.p10]}>
          <InvoiceItem
            paid={true}
            bookingId="XXiewo39901j02f"
            details="Delivery of electronics to Mr Chuks."
            paymentMethod="Pay Online"
            date="April 25, 2024"
            amount="5500"
          />
        </View>

        <View style={margins.mt50} />
        <View style={margins.mt10} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
