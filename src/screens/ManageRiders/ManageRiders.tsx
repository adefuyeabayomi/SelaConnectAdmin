import React from "react";
import { SafeAreaView,ScrollView,View } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type ScreenProps = NativeStackScreenProps<RootStackParamList,'ManageRiders'>
import { AbsNav,AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
import styles from './style'
import { margins, paddings } from "../../styles/spacing";
import { InfoStatic } from "../../components/StaticInformation/StaticInfo";
import { RidersItemComponent } from "../../components/Items/item";
import { SCButton } from "../../components/button/button";

export default function ManageRiders ({navigation}: ScreenProps): React.JSX.Element{
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

    function goToRiderDetails(){
        navigation.navigate('RiderDetails')
    }

    function goToRegisterRider(){
        navigation.navigate('RiderRegistration')
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
           
            <AbsHeader backFn={goBack} headerVal={'Manage Riders'} />
            <AbsNav location="" goToHome={goToHome} goToNotifications={goToNotifications} goToSupport={goToSupport} goToRecords={goToBookingRecords} goToPending={goToPending}></AbsNav>
            
            <ScrollView>
                <PageHeadInfo pageName={'Manage Riders'}/>
                <View style={paddings.p10}>
                    <InfoStatic>No Riders Registered Yet</InfoStatic>
                </View>
                <View style={paddings.ph10}>
                    <View style={margins.mv10}>
                        <RidersItemComponent actionFn={goToRiderDetails} name="Adelaide Emmanuel" employmentHistory="Employed since May 12 2024 - Present" />
                    </View>
                    <View style={margins.mv10}>
                        <RidersItemComponent actionFn={goToRiderDetails} name="Adelaide Emmanuel" employmentHistory="Employed since May 12 2024 - Present" />
                    </View>
                    <View style={margins.mv10}>
                        <RidersItemComponent actionFn={goToRiderDetails} name="Adelaide Emmanuel" employmentHistory="Employed since May 12 2024 - Present" />
                    </View>
                    <View style={margins.mv20}>
                        <SCButton onPress={goToRegisterRider}>Register New Rider</SCButton>
                    </View>
                    
                </View>
                <View style={margins.mt50} />
                <View style={margins.mt10} />
                <View style={margins.mt50} />
            </ScrollView>
        </SafeAreaView>
    )
}


