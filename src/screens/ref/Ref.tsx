import React from "react";
import { SafeAreaView,ScrollView } from 'react-native'
import { RootStackParamList } from "../../types/navTypes";
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type ScreenProps = NativeStackScreenProps<RootStackParamList,'Ref'>

import styles from './style'

export default function Ref (): React.JSX.Element{
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <ScrollView>
                
            </ScrollView>
        </SafeAreaView>
    )
}


