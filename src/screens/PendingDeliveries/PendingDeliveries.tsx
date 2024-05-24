import React from "react";
import { SafeAreaView,ScrollView,View,Text } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AbsNav,AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList,'PendingDeliveries'>
import { margins, paddings } from "../../styles/spacing";
import styles from './style'
import { ParaBold } from "../../components/TextComp/TextComp";
import { h6Bold } from "../../components/TextComp/TextComp";
import { efficiency } from "../../styles/colordef";
import { centerText, h5Styles } from "../../styles/textstyles";
import { InfoStatic } from "../../components/StaticInformation/StaticInfo";
import {BookingGroup } from "../../components/Items/item";

export default function PendingDeliveries ({navigation}: ScreenProps): React.JSX.Element{
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
    function goToManageBookings(){
        navigation.navigate('ManageBookings')
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
           
            <AbsHeader backFn={goBack} headerVal={'Manage Pending/Ongoing orders'} />
            <AbsNav location="pending" goToHome={goToHome} goToNotifications={goToNotifications} goToSupport={goToSupport} goToRecords={goToBookingRecords} goToPending={goToPending}></AbsNav>
            
            <ScrollView>
                <PageHeadInfo pageName={'Pending Deliveries'}/>     
                <View style={[paddings.p10,margins.mt10]}>
                    <InfoStatic>No Pending Deliveries At the moment</InfoStatic>
                </View>
                <View style={[paddings.pt10,margins.mt20]}>
                    <Text style={[{color: efficiency.efficiencyMain},h5Styles.h5_bold,centerText.center]}>All pending deliveries</Text>
                </View>
                <View style={[paddings.p10]}>
                    <BookingGroup detailsText="There are 26 deliveries today" buttonText="View Deliveries" actionFn={goToManageBookings} date="April 12 2024" amount={26}></BookingGroup>
                </View>
                <View style={[paddings.p10]}>
                    <BookingGroup detailsText="There are 26 deliveries today" buttonText="View Deliveries" actionFn={goToManageBookings} date="April 12 2024" amount={26}></BookingGroup>
                </View>
                <View style={[paddings.p10]}>
                    <BookingGroup detailsText="There are 26 deliveries today" buttonText="View Deliveries" actionFn={goToManageBookings} date="April 12 2024" amount={26}></BookingGroup>
                </View>
                
                <View style={margins.mt50} />
                <View style={margins.mt10} />
                <View style={margins.mt50} />
            </ScrollView>
        </SafeAreaView>
    )
}


