import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "ChatPage">;
import { AdminMessageItem, UserMessageItem } from "../../components/Items/item";
import { paddings, margins } from "../../styles/spacing";
import styles from "./style";

export default function ChatPage({
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
      <AbsHeader backFn={goBack} headerVal={"Customer Support Page"} />
      <AbsNav
        location="support"
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>
      <ScrollView>
        <PageHeadInfo pageName={"Chat Page"} />
        <View style={paddings.pt10}>
          <View style={[paddings.ph10, paddings.pt10]}>
            <UserMessageItem>
              I want to complain about my delivery which i booked some two days
              ago. I didnt get it on time.
            </UserMessageItem>
          </View>
          <View style={[paddings.ph10, paddings.pt10]}>
            <AdminMessageItem>
              Hi, Damie, Sorry for the inconvinience. the fault is ours and we
              sincerely apologise.
            </AdminMessageItem>
          </View>
          <View style={[paddings.ph10, paddings.pt10]}>
            <AdminMessageItem>
              Hi, Damie, Sorry for the inconvinience. the fault is ours and we
              sincerely apologise.
            </AdminMessageItem>
          </View>
          <View style={[paddings.ph10, paddings.pt10]}>
            <UserMessageItem>
              I want to complain about my delivery which i booked some two days
              ago. I didnt get it on time.
            </UserMessageItem>
          </View>
          <View style={[paddings.ph10, paddings.pt10]}>
            <AdminMessageItem>
              Hi, Damie, Sorry for the inconvinience. the fault is ours and we
              sincerely apologise.
            </AdminMessageItem>
          </View>
          <View style={[paddings.ph10, paddings.pt10]}>
            <UserMessageItem>
              I want to complain about my delivery which i booked some two days
              ago. I didnt get it on time.
            </UserMessageItem>
          </View>
          <View style={[paddings.ph10, paddings.pt10]}>
            <AdminMessageItem>
              Hi, Damie, Sorry for the inconvinience. the fault is ours and we
              sincerely apologise.
            </AdminMessageItem>
          </View>
          <View style={[paddings.ph10, paddings.pt10]}>
            <AdminMessageItem>
              Hi, Damie, Sorry for the inconvinience. the fault is ours and we
              sincerely apologise.
            </AdminMessageItem>
          </View>
        </View>
        <View style={margins.mt50} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
