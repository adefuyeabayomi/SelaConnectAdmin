import React from "react";
import { SafeAreaView,ScrollView, View, Text } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AbsNav,AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList,'BookingRecords'>
import { BookingGroup } from "../../components/Items/item";
import { paddings, margins } from "../../styles/spacing";
import { h5Styles,centerText } from "../../styles/textstyles";
import { efficiency } from "../../styles/colordef";
import styles from './style'

export default function BookingRecords ({navigation}: ScreenProps): React.JSX.Element{
    function goToPending(){
        navigation.navigate('PendingDeliveries')
    }

    function goToBookingRecords(){
        navigation.navigate('BookingRecords')
    }

    function goToSupport(){
        navigation.navigate('ChatList')
    }

    function goToHome(){
        navigation.navigate('AppHome')
    }

    function goToNotifications(){
        navigation.navigate('Notification')
    }
    function goBack(){
        navigation.goBack()
    }
    function goToBookinsRecordsList(){
        navigation.navigate('BookingRecordsList')
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
           
            <AbsHeader backFn={goBack} headerVal={'View All Records'} />
            <AbsNav location="records" goToHome={goToHome} goToNotifications={goToNotifications} goToSupport={goToSupport} goToRecords={goToBookingRecords} goToPending={goToPending}></AbsNav>
            
            <ScrollView>
                <PageHeadInfo pageName={'Booking Records'}/>
                <View style={[paddings.pt10,margins.mt20]}>
                    <Text style={[{color: efficiency.efficiencyMain},h5Styles.h5_bold,centerText.center]}>All Booking Records</Text>
                </View>
                <View style={[paddings.p10]}>
                    <BookingGroup detailsText={'There were 12 bookings on this date.'} buttonText="View Bookings" actionFn={goToBookinsRecordsList} date="April 12 2024" amount={26}></BookingGroup>
                </View>
                <View style={[paddings.p10]}>
                    <BookingGroup detailsText={'There were 12 bookings on this date.'} buttonText="View Bookings" actionFn={goToBookinsRecordsList} date="April 12 2024" amount={26}></BookingGroup>
                </View>
                <View style={[paddings.p10]}>
                    <BookingGroup detailsText={'There were 12 bookings on this date.'} buttonText="View Bookings" actionFn={goToBookinsRecordsList} date="April 12 2024" amount={26}></BookingGroup>
                </View>
                
                <View style={margins.mt50} />
                <View style={margins.mt10} />
                <View style={margins.mt50} />
            </ScrollView>
        </SafeAreaView>
    )
}


