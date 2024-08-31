import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "BookingRecordsList"
>;

import styles from "./style";
import { paddings, margins } from "../../styles/spacing";
import { HistoryItem } from "../../components/Items/item";
import deliveryOrder, { DeliveryOrder } from "../../functions/services/deliveryOrder";

export default function BookingRecordsList({
  navigation, route
}: ScreenProps): React.JSX.Element {
  let { ids, date } = route.params;
  let [orders, setOrders] = useState<DeliveryOrder[]>();

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
  useEffect(() => {
    deliveryOrder
      .getDeliveryOrdersWithIds(ids)
      .then((res) => {
        setOrders(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  function goToBookingDetails(id: string) {
    navigation.navigate("BookingDetails", { id });
  }
   
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AbsHeader backFn={goBack} headerVal={"Booking Records List"} />
      <AbsNav
        location="records"
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Booking Records List"} />
        {orders?.map((x, index) => {
            return (
              <View key={index} style={paddings.p10}>
                <View style={paddings.p10}>
                  <HistoryItem
                    title={`Delivery of ${x.packageDescription} from ${x.pickupArea} to ${x.dropoffArea}- Sender ${x.senderName}, N ${x.price}`}
                    actionFn={() => {goToBookingDetails(x._id as string);}}
                  ></HistoryItem>
                </View>
              </View>
            );
          })}
        <View style={margins.mt50} />
        <View style={margins.mt10} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
