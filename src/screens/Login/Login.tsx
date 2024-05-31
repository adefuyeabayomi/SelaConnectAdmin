import React from "react";
import { SafeAreaView,ScrollView,Text,View } from 'react-native'
import { InputStateType, RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type ScreenProps = NativeStackScreenProps<RootStackParamList,'Login'>

import styles from './style'
import { h1Styles,centerText,paraStyles } from "../../styles/textstyles";
import { efficiency } from "../../styles/colordef";
import { SCButton } from "../../components/button/button";
import { paddings } from "../../styles/spacing";

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
let envelope = <FontAwesome5 name="envelope" size={17} color={efficiency.efficiencyTint4} /> 
import { Label1 } from "../../components/Label/Label";
import SCInput from "../../components/input/input";
import { layoutVals } from "../../styles/layout";

export default function Login ({navigation}: ScreenProps): React.JSX.Element{
    let [email,setEmail] = React.useState('')
    let [passCode1,setPassCode1] = React.useState('')
    let [passCode2,setPassCode2] = React.useState('')

    function validate(){
        return {state: 'default' as InputStateType, text: 'None'}
    }

    function goHome(){
        navigation.navigate('AppHome')
    }
    
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <View style={[layoutVals.flex1,layoutVals.justifyCenter]}>                
                <View style={[paddings.p15]}>
                    <View style={[paddings.pb20]}>
                        <Text style={[h1Styles.h1_bold, centerText.center, {color: efficiency.efficiencyShade5}]}>Login</Text>
                        <Text style={[paraStyles.para_regular, centerText.center, {color: efficiency.efficiencyShade5}]}>Please Input Valid Login Credentials</Text>
                    </View>
                    <View>
                        <View style={[paddings.pv10]}>
                            <Label1>Email:</Label1>
                            <SCInput value={email} onChangeText={setEmail} validate={validate} placeholder={'Enter Your Email'} leftIcon={envelope} />
                        </View>
                        <View style={[paddings.pv10]}>
                            <Label1>Passcode A:</Label1>
                            <SCInput type="password" value={passCode1} onChangeText={setEmail} validate={validate} placeholder={'Enter Your Email'} leftIcon={envelope} />
                        </View>
                        <View style={[paddings.pv10]}>
                            <Label1>Passcode B:</Label1>
                            <SCInput type="password" value={passCode1} onChangeText={setEmail} validate={validate} placeholder={'Enter Your Email'} leftIcon={envelope} />
                        </View>
                    </View>
                    <View style={[paddings.pt30]}>
                        <SCButton onPress={()=>{goHome()}}>Login</SCButton>
                    </View>
                    <View style={[paddings.pt50]} />
                    <View style={[paddings.pt30]} />
                </View>
            </View>
        </SafeAreaView>
    )
}



