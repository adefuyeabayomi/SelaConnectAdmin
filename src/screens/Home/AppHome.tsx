import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "AppHome">;

import styles from "./style";
import { miniStyles, smallStyles, h3Styles } from "../../styles/textstyles";
import { efficiency, smart, gold } from "../../styles/colordef";
import { AbsNav } from "../../components/absComp/Abs";
import { paddings } from "../../styles/spacing";
import { Item1 } from "../../components/Items/item";
import { useAuth } from "../../contexts/AuthContext";
import { removeDomainFromEmail } from "../../functions/utils";

let imageComponent1 = (
  <Image
    style={styles.item1Image}
    source={require("../../assets/images/item1.png")}
  />
);
let imageComponent2 = (
  <Image
    style={styles.item1Image}
    source={require("../../assets/images/item2.png")}
  />
);
let imageComponent3 = (
  <Image
    style={styles.item1Image}
    source={require("../../assets/images/Item3.png")}
  />
);
let imageComponent4 = (
  <Image
    style={styles.item1Image}
    source={require("../../assets/images/Item4.png")}
  />
);

export default function AppHome({
  navigation,
}: ScreenProps): React.JSX.Element {
  const auth = useAuth();
  function sily() {}
  function goToManageRiders() {
    navigation.navigate("ManageRiders");
  }

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

  function goToIRMain() {
    navigation.navigate("IRMain");
  }
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer} id="logo_container">
            <View>
              <Image
                style={styles.logoImg}
                source={require("../../assets/images/selaLogo.png")}
              />
            </View>
          </View>
          <View style={styles.headerSpace} id="header-spacer" />
          <TouchableOpacity style={styles.userContainer} onPress={() => {}}>
            <View style={styles.userContainer} id="user_link_container">
              <View id="iconContainer">
                <View>
                  <Image
                    style={styles.avatarDim}
                    source={require("../../assets/images/userAvatar.png")}
                  />
                </View>
              </View>
              <View>
                <Text
                  style={[
                    smallStyles.small_bold,
                    { color: efficiency.efficiencyShade4 },
                  ]}
                >
                  {removeDomainFromEmail(auth.email)}
                </Text>
                <Text
                  style={[
                    miniStyles.mini_regular,
                    { color: efficiency.efficiencyShade4 },
                  ]}
                >
                  Admin Role
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <AbsNav
        location="home"
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>
      <ScrollView style={paddings.ph15}>
        <View style={paddings.pt50}></View>
        <View style={paddings.pt30}></View>
        <View style={[styles.topOffset15]}>
          <Text
            style={[h3Styles.h3_bold, { color: efficiency.efficiencyShade4 }]}
          >
            Welcome, Admin
          </Text>
        </View>
        <View>
          <View id="items1_container">
            <View style={[styles.topOffset10]}>
              <Item1
                actionFn={goToManageRiders}
                title={"Company Riders"}
                body={"Manage Sela connect riders"}
                imageComponent={imageComponent1}
                buttonText={"Manage Riders"}
                buttonColor={"#A7CAF9"}
              />
            </View>
            <View style={[styles.topOffset15]}>
              <Item1
                actionFn={goToPending}
                title={"Pending Deliveries"}
                body={"View pending deliveries"}
                imageComponent={imageComponent2}
                buttonText={"Manage pending deliveries"}
                buttonColor={smart.smartTint3}
              />
            </View>
            <View style={[styles.topOffset15]}>
              <Item1
                actionFn={goToBookingRecords}
                title={"Booking Records"}
                body={"Record of all completed bookings"}
                imageComponent={imageComponent4}
                buttonText={"View Records"}
                buttonColor={efficiency.efficiencyTint3}
              />
            </View>
            <View style={[styles.topOffset10]}>
              <Item1
                actionFn={goToSupport}
                title={"Customer Service Chats"}
                body={
                  "In app customer service. Respond to messages from users."
                }
                imageComponent={imageComponent1}
                buttonText={"Go to chats"}
                buttonColor={"#A7CAF9"}
              />
            </View>
            {/*
            <View style={[styles.topOffset15]}>
              <Item1
                actionFn={sily}
                title={"Manage Admins"}
                body={"Organize your supply now. Set a delivery schedule!"}
                imageComponent={imageComponent2}
                buttonText={"Request This Service"}
                buttonColor={smart.smartTint3}
              />
            </View>
            <View style={[styles.topOffset15]}>
              <Item1
                actionFn={sily}
                title={"Inter State"}
                body={"Get your goods to customer all around Nigeria."}
                imageComponent={imageComponent4}
                buttonText={"Request This Service"}
                buttonColor={efficiency.efficiencyTint3}
              />
            </View>
            <View style={[styles.topOffset15]}>
              <Item1
                actionFn={sily}
                title={"International"}
                body={"Send goods to your clients who are overseas."}
                imageComponent={imageComponent3}
                buttonText={"Request This Service"}
                buttonColor={gold.goldTint3}
              />
            </View>
              */}
          </View>
        </View>

        <View style={paddings.pt50}></View>
        <View style={paddings.pt50}></View>
        <View style={paddings.pt50}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
