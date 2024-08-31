import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type CVScreenProps = NativeStackScreenProps<RootStackParamList, "CSView">;
import { AbsHeader, AbsNav } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
import styles from "./styles";
import { ParaBold, SmallRegular } from "../../components/TextComp/TextComp";
import { margins, paddings } from "../../styles/spacing";
import { borderStyles } from "../../styles/borders";
import { efficiency } from "../../styles/colordef";
import {
  ChatMsgOverview,
  InvoicesDayItem,
  RidersBookingItem,
  RidersItemComponent,
  UpcomingDeliveries,
  UserMessageItem,
} from "../../components/Items/item";
import { BookingSummary } from "../../components/ManageBookings/ManageBookingsComponents";
export default function CSView({
  navigation,
}: CVScreenProps): React.JSX.Element {
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
        <View>
          <ParaBold>Components List</ParaBold>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Riders booking Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          >
            <RidersBookingItem
              tag1={"Express"}
              tag2={"Pay On Delivery"}
            ></RidersBookingItem>
          </View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Upcoming Deliveries Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          >
            <UpcomingDeliveries
              date={"April 12 2024"}
              amount={8}
            ></UpcomingDeliveries>
          </View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Rider Item Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          >
            <RidersItemComponent
              name={"Adeleye Emmanuel"}
              employmentHistory={
                "Employed from september 14th, 2024 till present"
              }
            ></RidersItemComponent>
          </View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Rider Details Summary Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          >
            <BookingSummary></BookingSummary>
          </View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Admin Bookings Item Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          ></View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Daily Invoices Item Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          >
            <InvoicesDayItem
              date={"April 12 2024"}
              amount={30}
              paid={25}
              unpaid={5}
            ></InvoicesDayItem>
          </View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Invoice Item Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          >
            <ChatMsgOverview
              name={"Ogharerunmi"}
              message={"I would like to complain about the blah..."}
            ></ChatMsgOverview>
          </View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Chat Overview Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          ></View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Riders booking Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          ></View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Riders booking Component</SmallRegular>
          <View
            style={[
              borderStyles.r15,
              { borderColor: efficiency.efficiencyShade4 },
            ]}
          ></View>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Riders booking Component</SmallRegular>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Riders booking Component</SmallRegular>
        </View>
        <View style={[paddings.p15, margins.m10, borderStyles.bWidth1]}>
          <SmallRegular>Riders booking Component</SmallRegular>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
