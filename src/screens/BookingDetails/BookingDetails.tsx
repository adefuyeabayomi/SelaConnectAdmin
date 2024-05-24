import React from "react";
import { SafeAreaView,ScrollView, View, Text } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AbsNav,AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList,'BookingDetails'>
import { DataSummaryMain, MBDataItem1 } from "../../components/ManageBookings/ManageBookingsComponents";

import styles from './style'
import { paddings } from "../../styles/spacing";

export default function BookingDetails ({navigation}: ScreenProps): React.JSX.Element{
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

    return (
        <SafeAreaView style={styles.safeAreaView}>
           
            <AbsHeader backFn={goBack} headerVal={'Manage Booking'} />
            <AbsNav location="" goToHome={goToHome} goToNotifications={goToNotifications} goToSupport={goToSupport} goToRecords={goToBookingRecords} goToPending={goToPending}></AbsNav>
            
            <ScrollView>
                <PageHeadInfo pageName={'Booking Details'}/>
                <View style={[paddings.p10]}>
                    <View style={[paddings.pv10]}>
                    <DataSummaryMain title="Booking Data Summary 1">
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                    </DataSummaryMain>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


