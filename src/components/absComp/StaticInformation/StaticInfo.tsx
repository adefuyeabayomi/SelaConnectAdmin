import React from 'react'
import { View, Text, Image } from 'react-native'
import { layoutVals } from '../../styles/layout'
import { paraStyles } from '../../styles/textstyles'
import { paddings } from '../../styles/spacing'
import styles from './styles'
import { efficiency, utilityColors } from '../../styles/colordef'
interface SItemPropType {
    children: React.JSX.Element | string
}
export function InfoStatic ({children}: SItemPropType): React.JSX.Element {
    return (
        <View style={[layoutVals.flexRow, layoutVals.alignCenter, layoutVals.justifyCenter,styles.sInfoContainer]} id='noBookings'>
            <View style={[layoutVals.flex0]}>
                <Image style={{width: 80, height : 80}} source={require('../../assets/images/infoFeedback.png')} />
            </View>
            <View style={[layoutVals.flex1]}>
                <Text style={[paraStyles.para_bold,paddings.pl10,{color: utilityColors.infoDeep}]}>{children}</Text>
            </View>                    
        </View>
    )
}

