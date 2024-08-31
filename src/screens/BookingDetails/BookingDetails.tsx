import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "BookingDetails">;
import {
  BookingSummary,
  DataSummaryMain,
  MBDataItem1,
  PackageStatus,
  PaymentSummary,
} from "../../components/ManageBookings/ManageBookingsComponents";

import styles from "./style";
import { paddings } from "../../styles/spacing";
import deliveryOrder, {
  DeliveryOrder,
} from "../../functions/services/deliveryOrder";
import { SCTransFill, SCTransOutline } from "../../components/button/button";
import { getReadablePaymentMethod } from "../../functions/utils";
import { centerText, paraStyles } from "../../styles/textstyles";
import { efficiency } from "../../styles/colordef";
import { layoutVals } from "../../styles/layout";
import { boxWidth } from "../../styles/width";

export default function BookingDetails({
  navigation,
  route,
}: ScreenProps): React.JSX.Element {
  const { id } = route.params;
  let [deliveryData, setDeliveryData] = useState<DeliveryOrder>();

  console.log({ id });
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

  function silyFn() {}

  useEffect(() => {
    deliveryOrder
      .getDeliveryOrderById(id)
      .then((res) => {
        setDeliveryData(res);
        console.log({ deliveryData });
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <AbsHeader backFn={goBack} headerVal={"Manage Booking"} />
      <AbsNav
        location=""
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Booking Details"} />
        <View style={[paddings.p10]}>
          <View>
            <View style={[paddings.ph10, paddings.pv30]}>
              <PaymentSummary>
                <View>
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Delivery ID"}
                      value={deliveryData?._id as string}
                    />
                  </View>
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Payment Method"}
                      value={getReadablePaymentMethod(
                        deliveryData?.paymentMethod as string,
                      )}
                    />
                  </View>
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Paid"}
                      value={
                        (deliveryData?.paymentMethod as string) == "paid"
                          ? "Paid"
                          : "Not Paid"
                      }
                    />
                  </View>
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Tranx ref"}
                      value={
                        (deliveryData?.transactionReference as string) || ""
                      }
                    />
                  </View>

                  {/* Payment Reference */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Payment_Ref"}
                      value={deliveryData?.paymentReference || "N/A"}
                    />
                  </View>
                  <View style={[paddings.pt30]}>
                    <Text
                      style={[
                        centerText.center,
                        paraStyles.para_bold,
                        { color: efficiency.efficiencyShade4 },
                      ]}
                    >
                      Invoices & Reciepts
                    </Text>
                  </View>
                  <View style={[layoutVals.flexRow, paddings.pt20]}>
                    <View style={[layoutVals.flex1]}>
                      <SCTransFill onPress={silyFn}>
                        Download Invoice
                      </SCTransFill>
                    </View>
                    <View style={[boxWidth.w10]}></View>
                    <View style={[layoutVals.flex1]}>
                      <SCTransOutline onPress={silyFn}>
                        Download Reciept
                      </SCTransOutline>
                    </View>
                  </View>
                  {deliveryData?.paymentMethod == "online" &&
                  deliveryData.paymentStatus == "paid" ? null : (
                    <View>
                      <View style={[paddings.pt30]}>
                        <Text
                          style={[
                            centerText.center,
                            paraStyles.para_bold,
                            { color: efficiency.efficiencyShade4 },
                          ]}
                        >
                          {getReadablePaymentMethod(
                            deliveryData?.paymentMethod as string,
                          )}{" "}
                          -{" "}
                          {(deliveryData?.paymentMethod as string) == "paid"
                            ? "Paid"
                            : "Not Paid"}
                        </Text>
                      </View>
                    </View>
                  )}
                </View>
              </PaymentSummary>
            </View>
            <View style={[paddings.ph10, paddings.pb30]}>
              <BookingSummary>
                <View>
                  {/* Package Description */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Package Description"}
                      value={deliveryData?.packageDescription || "N/A"}
                    />
                  </View>

                  {/* Package Weight */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Package Weight"}
                      value={
                        deliveryData?.packageWeight === 0
                          ? "N/A"
                          : deliveryData?.packageWeight?.toString() + "kg" ||
                            "N/A"
                      }
                    />
                  </View>

                  {/* Perishables */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Perishables"}
                      value={deliveryData?.perishables ? "Yes" : "No"}
                    />
                  </View>

                  {/* Fragile */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Fragile"}
                      value={deliveryData?.fragile ? "Yes" : "No"}
                    />
                  </View>

                  {/* Pickup Is Residential */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Pickup Is Residential"}
                      value={deliveryData?.pickupIsResidential ? "Yes" : "No"}
                    />
                  </View>

                  {/* Dropoff Is Residential */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Dropoff Is Residential"}
                      value={deliveryData?.dropoffIsResidential ? "Yes" : "No"}
                    />
                  </View>

                  {/* Pickup Restrictions */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Pickup Restrictions"}
                      value={deliveryData?.pickupRestrictions || "N/A"}
                    />
                  </View>

                  {/* Dropoff Restrictions */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Dropoff Restrictions"}
                      value={deliveryData?.dropoffRestrictions || "N/A"}
                    />
                  </View>

                  {/* Sender Name */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Sender Name"}
                      value={deliveryData?.senderName || "N/A"}
                    />
                  </View>

                  {/* Sender Phone Number */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Sender Phone No"}
                      value={deliveryData?.senderPhoneNo || "N/A"}
                    />
                  </View>

                  {/* Receiver Name */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Receiver Name"}
                      value={deliveryData?.receiverName || "N/A"}
                    />
                  </View>

                  {/* Receiver Phone Number */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Receiver Phone No"}
                      value={deliveryData?.receiverPhoneNo || "N/A"}
                    />
                  </View>

                  {/* Pickup Address */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Pickup Address"}
                      value={deliveryData?.pickupAddress || "N/A"}
                    />
                  </View>

                  {/* Dropoff Address */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Dropoff Address"}
                      value={deliveryData?.dropoffAddress || "N/A"}
                    />
                  </View>

                  {/* Pickup Area */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Pickup Area"}
                      value={deliveryData?.pickupArea || "N/A"}
                    />
                  </View>

                  {/* Dropoff Area */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Dropoff Area"}
                      value={deliveryData?.dropoffArea || "N/A"}
                    />
                  </View>

                  {/* Payment Method */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Payment Method"}
                      value={getReadablePaymentMethod(
                        deliveryData?.paymentMethod || "online",
                      )}
                    />
                  </View>

                  {/* Payment Status */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Payment Status"}
                      value={deliveryData?.paymentStatus || "Pending"}
                    />
                  </View>

                  {/* Price */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Price"}
                      value={deliveryData?.price.toString() || "N/A"}
                    />
                  </View>

                  {/* Total Distance */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Total Distance"}
                      value={deliveryData?.totalDistance?.toString() || "N/A"}
                    />
                  </View>

                  {/* Delivery ID */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Delivery ID"}
                      value={deliveryData?.deliveryId || "N/A"}
                    />
                  </View>

                  {/* Vendor */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Vendor"}
                      value={deliveryData?.vendor ? "Yes" : "No"}
                    />
                  </View>

                  {/* Assigned Rider */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Assigned Rider"}
                      value={deliveryData?.assignedRider || "N/A"}
                    />
                  </View>

                  {/* Delivery Track Status */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Delivery Track Status"}
                      value={deliveryData?.deliveryTrackStatus || "Pending"}
                    />
                  </View>

                  {/* Is Express */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Is Express"}
                      value={deliveryData?.isExpress ? "Yes" : "No"}
                    />
                  </View>

                  {/* Is Bulk */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Is Bulk"}
                      value={deliveryData?.isBulk ? "Yes" : "No"}
                    />
                  </View>

                  {/* Is Schedule */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Is Schedule"}
                      value={deliveryData?.isSchedule ? "Yes" : "No"}
                    />
                  </View>

                  {/* Email */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Email"}
                      value={deliveryData?.email || "N/A"}
                    />
                  </View>

                  {/* Transaction Reference */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Transaction Reference"}
                      value={deliveryData?.transactionReference || "N/A"}
                    />
                  </View>

                  {/* Delivery Type */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Delivery Type"}
                      value={deliveryData?.deliveryType || "N/A"}
                    />
                  </View>

                  {/* Created At */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Created At"}
                      value={deliveryData?.createdAt?.toLocaleString() || "N/A"}
                    />
                  </View>

                  {/* Updated At */}
                  <View style={[paddings.pt5]}>
                    <MBDataItem1
                      field={"Updated At"}
                      value={deliveryData?.updatedAt?.toLocaleString() || "N/A"}
                    />
                  </View>
                </View>
              </BookingSummary>
            </View>
            <View style={[paddings.ph10, paddings.pb30]}>
              <PackageStatus>
                <View>
                  <MBDataItem1
                    field={"Tracking Status"}
                    value={
                      deliveryData?.deliveryTrackStatus?.toUpperCase() as string
                    }
                  />
                  <MBDataItem1
                    field={"Info"}
                    value={
                      "The rider is preparing to go and pick up your package"
                    }
                  />
                </View>
              </PackageStatus>
            </View>
          </View>
        </View>
        <View id="bottomOffset" style={paddings.pb50} />
        <View id="bottomOffset" style={paddings.pb50} />
        <View id="bottomOffset" style={paddings.pb20} />
      </ScrollView>
    </SafeAreaView>
  );
}
