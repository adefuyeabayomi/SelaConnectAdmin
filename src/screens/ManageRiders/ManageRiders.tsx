import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "ManageRiders">;
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
import styles from "./style";
import { margins, paddings } from "../../styles/spacing";
import { InfoStatic } from "../../components/StaticInformation/StaticInfo";
import { RidersItemComponent } from "../../components/Items/item";
import { SCButton } from "../../components/button/button";
import authService, { User } from "../../functions/services/authService";
import moment from "moment";

export default function ManageRiders({
  navigation,
}: ScreenProps): React.JSX.Element {
  let [riders, setRiders] = useState<User[]>([]);

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

  function goToRiderDetails(id: string) {
    navigation.navigate("RiderDetails", { id });
  }

  function goToRegisterRider() {
    navigation.navigate("RiderRegistration");
  }

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
      <AbsHeader backFn={goBack} headerVal={"Manage Riders"} />
      <AbsNav
        location=""
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Manage Riders"} />
        {riders.length == 0 ? (
          <View style={paddings.p10}>
            <InfoStatic>No Approved Riders Yet.</InfoStatic>
          </View>
        ) : (
          <View style={[paddings.ph10, paddings.pt15]}>
            {riders.map((x, index) => {
              return (
                <View key={index} style={margins.mv10}>
                  <RidersItemComponent
                    actionFn={() => {
                      goToRiderDetails(x._id as string);
                    }}
                    name={x.email}
                    employmentHistory={`Employed since ${moment(x.created).format("MMM Do YYYY")} - Present`}
                    buttonText="View Details"
                  />
                </View>
              );
            })}
            <View style={margins.mv20}>
              <SCButton onPress={goToRegisterRider}>
                Approve Pending Rider Accounts
              </SCButton>
            </View>
          </View>
        )}
        <View style={margins.mt50} />
        <View style={margins.mt10} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
