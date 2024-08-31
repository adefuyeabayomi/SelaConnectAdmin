import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AbsNav, AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList, "BookingRecords">;
import { BookingGroup } from "../../components/Items/item";
import { paddings, margins } from "../../styles/spacing";
import { h5Styles, centerText, paraStyles } from "../../styles/textstyles";
import { efficiency } from "../../styles/colordef";
import styles from "./style";
import deliveryOrder, { DeliveryByDay } from "../../functions/services/deliveryOrder";
import { isToday, sortDeliveriesByDay } from "../../functions/utils";
import InputGrouping from "../../components/InputGrouping/InputGrouping";
import moment from "moment";
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { SCButton, SCButtonOutlineColorVary } from "../../components/button/button";
import { layoutVals } from "../../styles/layout";
import { boxWidth } from "../../styles/width";
import { InfoStatic } from "../../components/StaticInformation/StaticInfo";

export default function BookingRecords({
  navigation,
}: ScreenProps): React.JSX.Element {
  let [pendingInfo, setPendingInfo] = useState<DeliveryByDay[]>([]);

  //date pick config
  const [date, setDate] = useState(new Date());
  const [date2, setdate2] = useState(new Date());
  const [dateF, setDateF] = useState('No date selected');
  const [dateF2, setdateF2] = useState('No Time selected');
  const [showDate, setShowDate] = useState(false);
  const [showDate2, setShowDate2] = useState(false);
  
  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    event; //declare event for fpeace to reign
    const currentDate = selectedDate;
    if (currentDate) {
      setShowDate(false);
      setDate(currentDate);
      let dateF = moment(selectedDate).format('ll');
      setDateF(dateF);
      console.log({ selectedDate });
    }
  };
  const onChangeTime = (event: DateTimePickerEvent, Time: Date | undefined) => {
    const currentTime = Time;
    if (currentTime) {
      setShowDate2(false);
      setdate2(currentTime);
      let dateF2 = moment(Time).format('ll');
      setdateF2(dateF2);
      console.log({ Time });
    }
  };

  const showDateF = () => {
    setShowDate(true);
  };

  const showDate2F = () => {
    setShowDate2(true);
  };


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
  function goToBookinsRecordsList(ids: string[], date: string) {
    navigation.navigate("BookingRecordsList",{ids,date});
  }

  useEffect(() => {
    deliveryOrder
      .getSortedDeliveryOrders("dropped")
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
      <AbsHeader backFn={goBack} headerVal={"View All Records"} />
      <AbsNav
        location="records"
        goToHome={goToHome}
        goToNotifications={goToNotifications}
        goToSupport={goToSupport}
        goToRecords={goToBookingRecords}
        goToPending={goToPending}
      ></AbsNav>

      <ScrollView>
        <PageHeadInfo pageName={"Booking Records"} />
        
        <View style={[styles.dataContainer, styles.secContainer]}>
          <View>
            <InputGrouping headText={'Records Time Range'}>
              <View>
                <View>
                  {showDate && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="date"
                      is24Hour={true}
                      onChange={onChangeDate}
                    />
                  )}
                </View>
                <View>
                  {showDate2 && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date2}
                      mode="date"
                      is24Hour={true}
                      onChange={onChangeTime}
                    />
                  )}
                </View>
              </View>
              
              <View>
                <View style={[layoutVals.flexRow, paddings.pv10]}>
                  <View style={layoutVals.flex0}>
                    <Text
                      style={[
                        paraStyles.para_bold,
                        { color: efficiency.efficiencyMain },
                      ]}
                    >
                      From:{' '}
                    </Text>
                  </View>
                  <View style={layoutVals.flex1}></View>
                  <View style={layoutVals.flex0}>
                    <Text
                      style={[
                        paraStyles.para_regular,
                        { color: efficiency.efficiencyMain },
                      ]}
                    >
                      {dateF2}
                    </Text>
                  </View>
                </View>
                <View style={[layoutVals.flexRow, paddings.pv10]}>
                  <View style={layoutVals.flex0}>
                    <Text
                      style={[
                        paraStyles.para_bold,
                        { color: efficiency.efficiencyMain },
                      ]}
                    >
                      To:{' '}
                    </Text>
                  </View>
                  <View style={layoutVals.flex1}></View>
                  <View style={layoutVals.flex0}>
                    <Text
                      style={[
                        paraStyles.para_regular,
                        { color: efficiency.efficiencyMain },
                      ]}
                    >
                      {dateF}
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={[layoutVals.flexRow]}>
                  <View style={[layoutVals.flex1]}>
                    <View>
                      <SCButtonOutlineColorVary
                        onPress={showDate2F}
                        borderColor={efficiency.efficiencyTint3}
                      >
                        Change From Date
                      </SCButtonOutlineColorVary>
                    </View>
                  </View>
                  <View style={boxWidth.w10} />
                  <View style={[layoutVals.flex1]}>
                    <View>
                      <SCButtonOutlineColorVary
                        onPress={showDateF}
                        borderColor={efficiency.efficiencyTint3}
                      >
                        Change To Date
                      </SCButtonOutlineColorVary>
                    </View>
                  </View>
                </View>
              </View>
            </InputGrouping>
          </View>

        </View>
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
                          goToBookinsRecordsList(x.deliveryIds, moment(x.date).format("MMM Do YYYY"))
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
                    detailsText={`There was ${x.total} fulfilled deliveries on ${moment(x.date).format("MMM Do YYYY")}`}
                    buttonText="View Deliveries"
                    actionFn={() => {
                      goToBookinsRecordsList(x.deliveryIds, moment(x.date).format("MMM Do YYYY"))
                    }}
                    date={moment(x.date).format("MMM Do YYYY")}
                    amount={x.total}
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
