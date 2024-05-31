import React from 'react'
import { Text, SafeAreaView,View, ScrollView } from 'react-native'

import styles from './styles'
import { centerText, h6Styles } from '../../styles/textstyles'
import { efficiency } from '../../styles/colordef'

interface InputGroupingPropTypes {
    headText: string;
    containerStyle?: object;
    headContainerStyle?: object;
    headTextStyle?: object;
    children: Array<React.JSX.Element> | React.JSX.Element
}
function InputGrouping({headText,containerStyle={},headContainerStyle={},headTextStyle={}, children}: InputGroupingPropTypes) : React.JSX.Element {
    return (
        <View style={[styles.inputContainer,containerStyle]}>
            <View style={[styles.headContainer,headContainerStyle]}><Text style={[h6Styles.h6_bold, centerText.center, {color: efficiency.efficiencyShade4},headTextStyle]}>{headText}</Text></View>
            <View style={styles.inputWrapper}>
                {children}
            </View>
        </View>
    )
}

export default InputGrouping