import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PendingDeliveries"
>;
import { margins, paddings } from "../../styles/spacing";
import styles from "./style";
import { InfoStatic } from "../../components/StaticInformation/StaticInfo";
import { BookingGroup } from "../../components/Items/item";
import deliveryOrder, {
  DeliveryByDay,
} from "../../functions/services/deliveryOrder";
import moment from "moment";
import { isOverdue, isToday, sortDeliveriesByDay } from "../../functions/utils";

export default function PendingDeliveries({
  navigation,
}: ScreenProps): React.JSX.Element {
  let [pendingInfo, setPendingInfo] = useState<DeliveryByDay[]>([]);

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
  function goToManageBookings(ids: string[], date: string) {
    navigation.navigate("ManageBookings", { ids, date });
  }
  useEffect(() => {
    deliveryOrder
      .getSortedDeliveryOrders("pending")
      .then((res) => {
        setPendingInfo(sortDeliveriesByDay(res.deliveriesByDay));
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AbsHeader backFn={goBack} headerVal={"Manage Pending/Ongoing orders"} />
      <AbsNav
        location="pending"
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Pending Deliveries"} />
        {pendingInfo.length == 0 ? (
          <View style={[paddings.p10, margins.mt10]}>
            <InfoStatic>No Pending Deliveries At the moment</InfoStatic>
          </View>
        ) : (
          <View>
            <View style={[paddings.p10, paddings.pt20]}>
              {pendingInfo
                .filter((x) => {
                  return isToday(x.date);
                })
                .map((x) => {
                  return (
                    <View key={x.date}>
                      <BookingGroup
                        detailsText={`There are ${x.total} deliveries today`}
                        buttonText="View Deliveries"
                        actionFn={() => {
                          goToManageBookings(
                            x.deliveryIds as string[],
                            moment().format("MMM Do YYYY"),
                          );
                        }}
                        date="Today"
                        amount={x.total as number}
                      ></BookingGroup>
                    </View>
                  );
                })}
            </View>
            {pendingInfo.map((x, index) => {
              if (isToday(x.date)) {
                return;
              }
              return (
                <View key={index} style={[paddings.p10]}>
                  <BookingGroup
                    detailsText={`There are ${x.total} deliveries ${moment(x.date).format("MMM Do YYYY")}`}
                    buttonText="View Deliveries"
                    actionFn={() => {
                      goToManageBookings(
                        x.deliveryIds,
                        moment(x.date).format("MMM Do YYYY"),
                      );
                    }}
                    date={moment(x.date).format("MMM Do YYYY")}
                    amount={x.total}
                    isOverdue={isOverdue(x.date)}
                  ></BookingGroup>
                </View>
              );
            })}
          </View>
        )}

        <View style={margins.mt50} />
        <View style={margins.mt10} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
