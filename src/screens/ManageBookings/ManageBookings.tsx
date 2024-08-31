import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
import CheckBox from "react-native-check-box";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "ManageBookings">;

import styles from "./style";
import { paddings, margins } from "../../styles/spacing";
import { AdminBookingItem } from "../../components/Items/item";
import deliveryOrder, {
  DeliveryOrder,
} from "../../functions/services/deliveryOrder";
import { centerText, paraStyles } from "../../styles/textstyles";
import {
  FeedbackOverlay,
  Modal,
} from "../../components/feedbackModal/FeedbackModal";
import authService, { User } from "../../functions/services/authService";
import { removeDomainFromEmail } from "../../functions/utils";
import { ParaBold } from "../../components/TextComp/TextComp";
import { SCTransFill } from "../../components/button/button";
import { useAuth } from "../../contexts/AuthContext";

export default function ManageBookings({
  navigation,
  route,
}: ScreenProps): React.JSX.Element {
  let { ids, date } = route.params;
  let [orders, setOrders] = useState<DeliveryOrder[]>();
  let [riders, setRiders] = useState<User[]>([]);
  let [selectedRider, setSelectedRider] = useState<User>();
  let [visible, setVisible] = useState(false);
  let [orderInFocus, setOrderInFocus] = useState("");
  const toggleVisible = (id: string) => {
    setOrderInFocus(id);
    setVisible((val) => !val);
  };

  let auth = useAuth();

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

  function assignRiders() {
    deliveryOrder
      .updateDeliveryOrder(
        orderInFocus,
        { assignedRider: selectedRider?._id },
        auth.accessToken,
      )
      .then((res) => {
        console.log({ res });
        toggleVisible("");
      })
      .catch((x) => {
        console.error(x);
      });
  }

  function goToBookingDetails(id: string) {
    navigation.navigate("BookingDetails", { id });
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

  useEffect(() => {
    authService
      .getAccounts(1, 30, false, false, "rider")
      .then((res) => {
        console.log({ res });
        setRiders(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AbsHeader backFn={goBack} headerVal={"Manage Bookings"} />
      <AbsNav
        location=""
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>
      <ScrollView>
        <PageHeadInfo pageName={date} />
        <Modal visible={visible} backdropPressFn={() => toggleVisible("")}>
          <View style={[paddings.pt15, paddings.ph25]}>
            <ParaBold>
              <Text style={[centerText.center]}>Select A Rider</Text>
            </ParaBold>
            <View>
              {riders.map((x, index) => {
                let ridername = removeDomainFromEmail(x.email);
                return (
                  <View key={index} style={[paddings.pt15]}>
                    <CheckBox
                      style={{ width: 200 }}
                      onClick={() => {
                        setSelectedRider(x);
                      }}
                      isChecked={selectedRider?.email == x.email}
                      rightText={ridername}
                    />
                  </View>
                );
              })}
            </View>
            <View style={[paddings.pt20]}>
              <SCTransFill
                onPress={() => {
                  assignRiders();
                }}
              >
                Assign This Task
              </SCTransFill>
            </View>
          </View>
        </Modal>
        <View id="bookings-container">
          <View style={paddings.pt30} />
          {orders?.map((x, index) => {
            return (
              <View key={index} style={paddings.p10}>
                <AdminBookingItem
                  assignRiders={() => toggleVisible(x._id as string)}
                  goToBookingDetails={() => {
                    goToBookingDetails(x._id as string);
                  }}
                  details={`Delivery of ${x.packageDescription} from ${x.pickupArea} to ${x.dropoffArea}`}
                >
                  <View>
                    <View style={[paddings.pt5]}>
                      <Text>
                        <Text style={paraStyles.para_bold}>Type : </Text>
                        <Text style={paraStyles.para_regular}>
                          {x.deliveryType.toUpperCase()} delivery
                        </Text>
                      </Text>
                    </View>
                    <View style={[paddings.pt5]}>
                      <Text>
                        <Text style={paraStyles.para_bold}>Sender: </Text>
                        <Text style={paraStyles.para_regular}>
                          {x.senderName}
                        </Text>
                      </Text>
                    </View>
                    <View style={[paddings.pt5]}>
                      <Text>
                        <Text style={paraStyles.para_bold}>
                          Sender Phone No:{" "}
                        </Text>
                        <Text style={paraStyles.para_regular}>
                          {x.senderPhoneNo}
                        </Text>
                      </Text>
                    </View>
                    <View style={[paddings.pt5]}>
                      <Text>
                        <Text style={paraStyles.para_bold}>Receiver: </Text>
                        <Text style={paraStyles.para_regular}>
                          {x.receiverName}
                        </Text>
                      </Text>
                    </View>
                    <View style={[paddings.pt5]}>
                      <Text>
                        <Text style={paraStyles.para_bold}>
                          Receiver Phone No:{" "}
                        </Text>
                        <Text style={paraStyles.para_regular}>
                          {x.receiverPhoneNo}
                        </Text>
                      </Text>
                    </View>
                    <View style={[paddings.pt5]}>
                      <Text>
                        <Text style={paraStyles.para_bold}>
                          Pickup Address:{" "}
                        </Text>
                        <Text style={paraStyles.para_regular}>
                          {x.pickupAddress}
                        </Text>
                      </Text>
                    </View>
                    <View style={[paddings.pt5]}>
                      <Text>
                        <Text style={paraStyles.para_bold}>
                          Dropoff Address:{" "}
                        </Text>
                        <Text style={paraStyles.para_regular}>
                          {x.dropoffAddress}
                        </Text>
                      </Text>
                    </View>
                    <View style={[paddings.pt5]}>
                      <Text>
                        <Text style={paraStyles.para_bold}>
                          Assigned Rider:{" "}
                        </Text>
                        <Text style={paraStyles.para_regular}>
                          {x.assignedRider || "Not Assigned"}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </AdminBookingItem>
              </View>
            );
          })}
        </View>
        <View style={margins.mt50} />
        <View style={margins.mt10} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
