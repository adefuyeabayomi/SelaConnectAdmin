import React from "react";
import { SafeAreaView,ScrollView,View } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AbsNav,AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList,'ManageBookings'>

import styles from './style'
import { paddings,margins } from "../../styles/spacing";
import { AdminBookingItem } from "../../components/Items/item";

export default function ManageBookings ({navigation}: ScreenProps): React.JSX.Element{
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

    function assignRiders(){

    }

    function goToBookingDetails(){
        navigation.navigate('BookingDetails')
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
           
            <AbsHeader backFn={goBack} headerVal={'Manage Bookings'} />
            <AbsNav location="" goToHome={goToHome} goToNotifications={goToNotifications} goToSupport={goToSupport} goToRecords={goToBookingRecords} goToPending={goToPending}></AbsNav>
            <ScrollView>
                <PageHeadInfo pageName={'April 30, 2024'}/>  
                <View id="bookings-container">
                    <View style={paddings.pt30} />
                    <View style={paddings.p10}>
                        <AdminBookingItem assignRiders={assignRiders} goToBookingDetails={goToBookingDetails} details="Delivery of electronics to Mr Chuks" ></AdminBookingItem>
                    </View>                
                    <View style={paddings.p10}>
                        <AdminBookingItem assignRiders={assignRiders} goToBookingDetails={goToBookingDetails} details="Delivery of electronics to Mr Chuks" ></AdminBookingItem>
                    </View>                
                    <View style={paddings.p10}>
                        <AdminBookingItem assignRiders={assignRiders} goToBookingDetails={goToBookingDetails} details="Delivery of electronics to Mr Chuks" ></AdminBookingItem>
                    </View>                
                    <View style={paddings.p10}>
                        <AdminBookingItem assignRiders={assignRiders} goToBookingDetails={goToBookingDetails} details="Delivery of electronics to Mr Chuks" ></AdminBookingItem>
                    </View>                
                    <View style={paddings.p10}>
                        <AdminBookingItem assignRiders={assignRiders} goToBookingDetails={goToBookingDetails} details="Delivery of electronics to Mr Chuks" ></AdminBookingItem>
                    </View>                
                    <View style={paddings.p10}>
                        <AdminBookingItem assignRiders={assignRiders} goToBookingDetails={goToBookingDetails} details="Delivery of electronics to Mr Chuks" ></AdminBookingItem>
                    </View>                
                </View>
                
                <View style={margins.mt50} />
                <View style={margins.mt10} />
                <View style={margins.mt50} />
            </ScrollView>
        </SafeAreaView>
    )
}


