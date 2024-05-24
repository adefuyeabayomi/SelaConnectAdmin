import React,{useState} from "react";
import { SafeAreaView,ScrollView,View } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AbsNav,AbsHeader } from "../../components/absComp/Abs";
import PageHeadInfo from "../../components/PageHeadInfo/PageHeadInfo";
type ScreenProps = NativeStackScreenProps<RootStackParamList,'RiderRegistration'>

import styles from './style'
import { margins,paddings } from "../../styles/spacing";
import InputGrouping from "../../components/InputGrouping/InputGrouping";
import { Label1 } from "../../components/Label/Label";
import SCInput from "../../components/input/input";
import { InputStateType } from "../../types/navTypes";
import { SCButton } from "../../components/button/button";

export default function RiderRegistration ({navigation}: ScreenProps): React.JSX.Element{
    let [name,setName] = useState('')
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

    function validate(){
        return {state: 'default' as InputStateType, text: 'None'}
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
           
            <AbsHeader backFn={goBack} headerVal={'New Rider'} />
            <AbsNav location="" goToHome={goToHome} goToNotifications={goToNotifications} goToSupport={goToSupport} goToRecords={goToBookingRecords} goToPending={goToPending}></AbsNav>
            
            <ScrollView>
                <PageHeadInfo pageName={'Register New Rider'}/>     
                <View style={[margins.mh15,margins.mt30]}>
                    <InputGrouping headText="Input Group">
                        <View style={paddings.pv10}>
                            <Label1>Label</Label1>
                            <SCInput validate={validate} placeholder="Input..." value={name} onChangeText={setName} ></SCInput>
                        </View>
                        <View style={paddings.pv10}>
                            <Label1>Label</Label1>
                            <SCInput validate={validate} placeholder="Input..." value={name} onChangeText={setName} ></SCInput>
                        </View>
                        <View style={paddings.pv10}>
                            <Label1>Label</Label1>
                            <SCInput validate={validate} placeholder="Input..." value={name} onChangeText={setName} ></SCInput>
                        </View>
                        <View style={paddings.pv10}>
                            <Label1>Label</Label1>
                            <SCInput validate={validate} placeholder="Input..." value={name} onChangeText={setName} ></SCInput>
                        </View>
                    </InputGrouping>
                    
                    <View style={paddings.pt50}>
                        <SCButton onPress={()=>{}}>Register Rider</SCButton>
                    </View>
                </View>
                
                <View style={paddings.pt50} />
                <View style={paddings.pt50} />
                <View style={paddings.pt20} />
            </ScrollView>
        </SafeAreaView>
    )
}


