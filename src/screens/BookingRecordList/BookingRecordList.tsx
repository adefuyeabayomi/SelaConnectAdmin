import React from "react";
import { SafeAreaView,ScrollView,View } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AbsNav,AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList,'BookingRecordsList'>

import styles from './style'
import { paddings,margins } from "../../styles/spacing";
import { HistoryItem } from "../../components/Items/item";

export default function BookingRecordsList ({navigation}: ScreenProps): React.JSX.Element{
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
           
            <AbsHeader backFn={goBack} headerVal={'Booking Records List'} />
            <AbsNav location="" goToHome={goToHome} goToNotifications={goToNotifications} goToSupport={goToSupport} goToRecords={goToBookingRecords} goToPending={goToPending}></AbsNav>
            
            <ScrollView>
                <PageHeadInfo pageName={'Booking Records List'}/>
                <View style={paddings.p10}>
                    <HistoryItem title="Delivery of electronict to Mr Chucks" actionFn={()=>{}}></HistoryItem>
                </View>
                <View style={paddings.p10}>
                    <HistoryItem title="Delivery of electronict to Mr Chucks" actionFn={()=>{}}></HistoryItem>
                </View>
                <View style={paddings.p10}>
                    <HistoryItem title="Delivery of electronict to Mr Chucks" actionFn={()=>{}}></HistoryItem>
                </View>
                <View style={paddings.p10}>
                    <HistoryItem title="Delivery of electronict to Mr Chucks" actionFn={()=>{}}></HistoryItem>
                </View>

                <View style={margins.mt50} />
                <View style={margins.mt10} />
                <View style={margins.mt50} />
            </ScrollView>
        </SafeAreaView>
    )
}


