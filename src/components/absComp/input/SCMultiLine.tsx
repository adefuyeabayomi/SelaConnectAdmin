import React,{ useState }  from "react";
import { View, StyleSheet, TextInput, Text, TouchableWithoutFeedback } from "react-native";
import { efficiency, utilityColors} from "../../styles/colordef";
import {miniStyles, paraStyles } from "../../styles/textstyles";
import { SCBasicTextInputProps } from "../../types/navTypes";

let styles = StyleSheet.create({
    basicTI: {
        padding: 5,
        paddingHorizontal: 10,
        paddingRight: 38,
        borderWidth: 1,
        borderRadius: 14,
        height: 100,
        borderColor: efficiency.efficiencyTint3,        
        color: efficiency.efficiencyShade5
    },
})

export function SCMultiLine({ defaultValue="",value, onChangeText, placeholder = "Enter text", label="", validate, leftIcon, type="text" }: SCBasicTextInputProps){
    return (
        <>
            <TextInput multiline={true} style={styles.basicTI} value={value} onChangeText={onChangeText} placeholder={placeholder} ></TextInput>
        </>
    )
}