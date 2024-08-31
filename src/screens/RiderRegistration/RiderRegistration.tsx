import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "RiderRegistration"
>;

import styles from "./style";
import { margins, paddings } from "../../styles/spacing";
import { InputStateType } from "../../types/navTypes";
import { SCButton } from "../../components/button/button";
import authService, { User } from "../../functions/services/authService";
import { RidersItemComponent } from "../../components/Items/item";
import { InfoStatic } from "../../components/StaticInformation/StaticInfo";
import moment from "moment";
import { useAuth } from "../../contexts/AuthContext";
import { useLoading } from "../../contexts/loading";

export default function RiderRegistration({
  navigation,
}: ScreenProps): React.JSX.Element {
  let [name, setName] = useState("");
  let {setLoading,setLoadingText} = useLoading()
  let auth = useAuth();

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

  function validate() {
    return { state: "default" as InputStateType, text: "None" };
  }

  function goToRiderDetails(id: string) {
    navigation.navigate("RiderDetails", { id });
  }

  function approveRiderAccount(accountId: string) {
    setLoading(true);
    authService.updateUserDetails(auth.accessToken, {
      disabled: false,
      accountId,
    }).then(res=>{
      console.log({approveRes: res})
    }).catch(err=>{console.log(err)}).finally(()=>{setLoading(false)})
  }

  useEffect(() => {
    authService
      .getAccounts(1, 30, true, false, "rider")
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
      <AbsHeader backFn={goBack} headerVal={"New Rider"} />
      <AbsNav
        location=""
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Approve New Rider"} />
        <View style={[margins.mt10]}>
          {riders.length == 0 ? (
            <View style={paddings.p10}>
              <InfoStatic>No pending riders at the moment</InfoStatic>
            </View>
          ) : (
            <View style={[paddings.ph10, paddings.pt15]}>
              {riders.map((x, index) => {
                return (
                  <View key={index} style={margins.mv10}>
                    <RidersItemComponent
                      actionFn={() => {
                        approveRiderAccount(x._id as string);
                      }}
                      name={x.email}
                      employmentHistory={`Account Created: ${moment(x.created).format("MMM Do YYYY")}. Account is currently disabled.`}
                      buttonText="Approve"
                    />
                  </View>
                );
              })}
            </View>
          )}
        </View>

        <View style={paddings.pt50} />
        <View style={paddings.pt50} />
        <View style={paddings.pt20} />
      </ScrollView>
    </SafeAreaView>
  );
}
