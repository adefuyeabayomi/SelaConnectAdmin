import React from "react";
import { SafeAreaView,ScrollView, View } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AbsNav,AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList,'RiderDetails'>

import styles from './style'
import { DataSummaryMain, MBDataItem1 } from "../../components/ManageBookings/ManageBookingsComponents";
import { paddings } from "../../styles/spacing";
import { SCButton, SCButtonError, SCButtonWarning } from "../../components/button/button";
import { efficiency, utilityColors } from "../../styles/colordef";

export default function RiderDetails ({navigation}: ScreenProps): React.JSX.Element{
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
           
            <AbsHeader backFn={goBack} headerVal={'Rider Information & Details'} />
            <AbsNav location="" goToHome={goToHome} goToNotifications={goToNotifications} goToSupport={goToSupport} goToRecords={goToBookingRecords} goToPending={goToPending}></AbsNav>
            
            <ScrollView>
                <PageHeadInfo pageName={'Rider Information'}/> 
                <View style={paddings.pt20} />
                <View style={[paddings.p10]}>
                    <DataSummaryMain title="Rider Data Summary 1">
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <MBDataItem1 field="Food" value="Rice"></MBDataItem1>
                        <View style={paddings.pv10}>
                            <SCButton onPress={()=>{}}>Update</SCButton>
                        </View>
                    </DataSummaryMain>
                    <View style={paddings.pt20} />
                    <DataSummaryMain title="Rider Account Management">
                    <View style={paddings.pt10} />
                        <SCButtonWarning style={{backgroundColor: utilityColors.errorLight , borderColor: '#FFA9A9'}} textStyle={{color: efficiency.efficiencyShade4}} onPress={()=>{}}>Suspend This Rider Account</SCButtonWarning>
                    <View style={paddings.pt20} />
                        <SCButtonError onPress={()=>{}}>Terminate This Rider</SCButtonError>
                    </DataSummaryMain>
                </View>
                
                <View style={paddings.pt50} />
                <View style={paddings.pt50} />
                <View style={paddings.pt20} />
            </ScrollView>
        </SafeAreaView>
    )
}


