import React, { Children, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { centerText, paraStyles, smallStyles } from "../../styles/textstyles";
import { efficiency,gold, utilityColors } from "../../styles/colordef";

let styles = StyleSheet.create({
    button: {
        borderWidth: 2,
        borderColor: gold.goldTint2,
        backgroundColor: gold.goldTint4,
        borderRadius: 16
    },
    buttonSuccess: {
        borderColor: utilityColors.successLight,
        backgroundColor: utilityColors.successDeep
    }, 
    buttonInfo: {
        borderColor: utilityColors.infoLight,
        backgroundColor: utilityColors.infoDeep
    },
    buttonWarning: {
        borderColor: utilityColors.warningLight,
        backgroundColor: utilityColors.warningDeep
    },
    buttonError: {
        borderColor: utilityColors.errorLight,
        backgroundColor: utilityColors.errorDeep
    },
    text: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 13,
        color: efficiency.efficiencyShade5
    },
    textSmall: {
       color: efficiency.efficiencyShade5,
       paddingTop: 4,
       paddingBottom: 7
    },
    buttonOutline: {
        borderWidth: 1,
        borderColor: efficiency.efficiencyShade5,
        borderRadius: 16, 
        backgroundColor : efficiency.efficiencyTint1,
        shadowColor: efficiency.efficiencyTint5,
        shadowOffset: { width: 0, height: 0 }, // Same as `0px 0px` in CSS
        shadowOpacity: 1,       
        shadowRadius: 10,       
        elevation: 2
    },
    buttonOutlineNoShadow:{        
        borderWidth: 1,
        borderRadius: 10, 
        backgroundColor : efficiency.efficiencyTint1,
    },
    buttonDesignSmall: {        
        borderRadius: 16,
        borderWidth: 1,
        borderColor:  gold.goldTint3,
        backgroundColor: gold.goldTint1,
        color: gold.goldShade5 ,
        paddingTop: 4,
        paddingBottom: 3
    },
    buttonTrans: {    
        borderRadius: 8,
        borderWidth: 1.5,
        paddingTop: 4,
        paddingBottom: 3
    },
    transFill: {
        color: efficiency.efficiencyTint1,
        backgroundColor: efficiency.efficiencyShade4
    },
    transOutline: {
        color: efficiency.efficiencyShade5,
        backgroundColor: efficiency.efficiencyTint1,
        borderColor: efficiency.efficiencyShade5
    }
})

    export function SCButton({onPress, children}): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={[paraStyles.para_regular,styles.text]}>{children}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    export function SCButtonSuccess({onPress, children}): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={[styles.button,styles.buttonSuccess]} onPress={onPress}>
                    <Text style={[paraStyles.para_regular,styles.text,{color: efficiency.efficiencyTint1}]}>{children}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    export function SCButtonInfo({onPress, children}): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={[styles.button,styles.buttonInfo]} onPress={onPress}>
                    <Text style={[paraStyles.para_regular,styles.text,{color: efficiency.efficiencyTint1}]}>{children}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    
    export function SCButtonWarning({onPress, children}): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={[styles.button,styles.buttonWarning]} onPress={onPress}>
                    <Text style={[paraStyles.para_regular,styles.text,{color: efficiency.efficiencyTint1}]}>{children}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    export function SCButtonError({onPress, children}): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={[styles.button,styles.buttonError]} onPress={onPress}>
                    <Text style={[paraStyles.para_regular,styles.text,{color: efficiency.efficiencyTint1}]}>{children}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    export function SCButtonOutline({onPress, children}): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={styles.buttonOutline} onPress={onPress}>
                    <Text style={[paraStyles.para_regular,styles.text]}>{children}</Text>
                </TouchableOpacity>            
            </View>
        )
    }
    
    export function SCButtonOutlineColorVary({onPress,borderColor,color = efficiency.efficiencyShade4, children }): React.JSX.Element {
        let colorVal = borderColor ? borderColor : efficiency.efficiencyTint4    
        return (
            <View>
                <TouchableOpacity style={[styles.buttonOutlineNoShadow,{borderColor: colorVal, borderRadius: 10 }]} onPress={onPress}>
                    <Text style={[smallStyles.small_regular,centerText.center,styles.textSmall,{color: efficiency.efficiencyShade4}]}>{children}</Text>
                </TouchableOpacity>            
            </View>
        )
    }

    export function SCDesignSmall({onPress,buttonStyle={},textStyle={}, children }): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={[styles.buttonDesignSmall,buttonStyle]} onPress={onPress}>
                    <Text style={[smallStyles.small_regular,centerText.center,styles.textSmall,textStyle]}>{children}</Text>
                </TouchableOpacity>            
            </View>
        )
    }
    export function SCTransFill({onPress, style={}, children }): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={[styles.buttonTrans,style,styles.transFill]} onPress={onPress}>
                    <Text style={[smallStyles.small_regular,centerText.center,styles.textSmall,{color: efficiency.efficiencyTint1}]}>{children}</Text>
                </TouchableOpacity>            
            </View>
        )
    }
    export function SCTransOutline({onPress, children }): React.JSX.Element {
        return (
            <View>
                <TouchableOpacity style={[styles.buttonTrans,styles.transOutline]} onPress={onPress}>
                    <Text style={[smallStyles.small_regular,centerText.center,styles.textSmall]}>{children}</Text>
                </TouchableOpacity>            
            </View>
        )
    }

// there should be outline buttons for the other types success, error info warning, and all and alll.
// then there will be buttons for the likes of items button small.  