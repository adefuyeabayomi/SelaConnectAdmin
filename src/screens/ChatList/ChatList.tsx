import React from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "ChatList">;
import { margins, paddings } from "../../styles/spacing";
import styles from "./style";
import { ChatMsgOverview } from "../../components/Items/item";

export default function ChatList({
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
  function goToChatPage() {
    navigation.navigate("ChatPage");
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
        <PageHeadInfo pageName={"Feedback & Complaints"} />
        <View style={margins.mt20} />
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game.I want to play a game.I want to play a game.I want to play a game."
          />
        </View>
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game. I want to play a game.I want to play a game."
          />
        </View>
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game."
          />
        </View>
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game.I want to play a game.I want to play a game.I want to play a game."
          />
        </View>
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game. I want to play a game.I want to play a game."
          />
        </View>
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game."
          />
        </View>
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game.I want to play a game.I want to play a game.I want to play a game."
          />
        </View>
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game. I want to play a game.I want to play a game."
          />
        </View>
        <View style={paddings.p10}>
          <ChatMsgOverview
            actionFn={goToChatPage}
            name="Ololademi Asake"
            message="I want to play a game."
          />
        </View>

        <View style={margins.mt50} />
        <View style={margins.mt50} />
        <View style={margins.mt50} />
      </ScrollView>
    </SafeAreaView>
  );
}
