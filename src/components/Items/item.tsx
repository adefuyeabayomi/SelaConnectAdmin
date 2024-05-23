import React from 'react'
import { View, Text, Image } from 'react-native'
import { SCButtonOutlineColorVary, SCDesignSmall, SCTransFill, SCTransOutline } from '../button/button'
import SCInput from '../input/input'
import styles from './style'
import { paraStyles, smallStyles } from '../../styles/textstyles'
import { efficiency, gold, utilityColors } from '../../styles/colordef'
import { layoutVals } from '../../styles/layout'
import { paddings } from '../../styles/spacing'
import { borderStyles } from '../../styles/borders'
import { boxWidth } from '../../styles/width'
import { FontAwesome5 } from '@expo/vector-icons';
let penIcon = <FontAwesome5 name="pen-alt" size={24} color={efficiency.efficiencyTint1} />
import { CSTypes,notificationTypes } from '../../types/navTypes'
import { nStyles } from './style'
import { ParaBold, ParaRegular } from '../TextComp/TextComp'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { FlexRow, Flex0, Flex1 } from '../LayoutComp/LayoutComp'

export function Item1({buttonText,imageComponent,buttonColor, title, body, actionFn}) : React.JSX.Element {
    return (
        <View style={[styles.itemContainer,{borderColor: buttonColor}]}>
            <View style={styles.imageContainer}>
                {imageComponent}
            </View>
            <View style={styles.textContainer}>
                <Text style={[paraStyles.para_bold,{color: efficiency.efficiencyShade4}]}>{title}</Text>
                <Text style={[smallStyles.small_regular]}>{body}</Text>
                <View style={[paddings.pt5]}>
                    <SCButtonOutlineColorVary onPress={actionFn} color={efficiency.efficiencyShade4} borderColor={buttonColor}>{buttonText}</SCButtonOutlineColorVary>
                </View>
            </View>
        </View>
    )
} 

export function Item2({imageComponent, title, body, buttonText, actionFn}) : React.JSX.Element {
    return (
        <View>
            <View style={styles.item2ImageContainer} id='imageContainer'>
                {imageComponent}
            </View> 
            <View id='textContainer'>
                <View style={[styles.offsetTop5]}>
                    <Text style={[paraStyles.para_bold, {color: efficiency.efficiencyShade4}]}>{title}</Text>
                    <Text style={[smallStyles.small_regular, {color: efficiency.efficiencyShade5}]}>{body}</Text>
                </View>
            </View>
            <View style={[styles.offsetTop5]} id='buttonContainer'>
                <SCDesignSmall buttonStyle={{borderColor: efficiency.efficiencyTint3,backgroundColor: efficiency.efficiencyTint2}} onPress={actionFn}> {buttonText}</SCDesignSmall>
            </View>
        </View>
    )
}
let bookingItemImageComponent =  <Image style={styles.BIImage} source={require('../../assets/images/bookingItem.png')} />
export function BookingItem({title,price,tag1,tag2,paid,actionFn}): React.JSX.Element {
    let paidIndicator = paid?  <Text style={{color: utilityColors.infoDeep}}>Paid</Text> : <Text style={{color: utilityColors.errorDeep}}>Not Paid</Text>
    return (
        <View style={[styles.BIContainer,layoutVals.flexRow,layoutVals.alignCenter,layoutVals.justifyCenter,borderStyles.bWidth2,paddings.p10,borderStyles.r15,{borderColor: efficiency.efficiencyTint5}]}>
            <View style={[layoutVals.flex0]}>
                <View style={borderStyles.r20}>
                    {bookingItemImageComponent}
                </View>
            </View>
            <View style={[layoutVals.flex1,paddings.pl10]}>
                <View>
                    <Text style={[smallStyles.small_bold,{color: efficiency.efficiencyMain}]}>{title}</Text>
                    <Text style={[smallStyles.small_regular,{color: efficiency.efficiencyMain},paddings.pb5]}>{price} {paidIndicator}</Text>
                    <View style={[layoutVals.flexRow,paddings.pb10]}>
                        <View style={[layoutVals.flex0]}>
                            <Text style={[styles.tagStyle]}>{tag1}</Text>
                        </View>
                        <View style={[layoutVals.flex0]}>
                            <Text style={[styles.tagStyle]}>{tag2}</Text>
                        </View>
                    </View>
                    
                </View>
                <View>
                    <SCTransFill onPress={actionFn}>View Details</SCTransFill>
                </View>
            </View>
        </View>
    ) 
}

let trackingItemImageComponent =  <Image style={styles.TIImage} source={require('../../assets/images/trackingItem.png')} />
export function TrackingItem({title,tag1,tag2,actionFn}): React.JSX.Element {
   
    return (
        <View style={[styles.BIContainer,layoutVals.flexRow,layoutVals.alignCenter,layoutVals.justifyCenter,borderStyles.bWidth2,paddings.p10,borderStyles.r15,{borderColor: efficiency.efficiencyTint5}]}>
            <View style={[layoutVals.flex0]}>
                <View style={borderStyles.r20}>
                    {trackingItemImageComponent}
                </View>
            </View>
            <View style={[layoutVals.flex1,paddings.pl10]}>
                <View>
                    <Text style={[smallStyles.small_bold,{color: efficiency.efficiencyMain}]}>{title}</Text>
                    <View style={[layoutVals.flexRow,paddings.pb10]}>
                        <View style={[layoutVals.flex0]}>
                            <Text style={[styles.tagStyle]}>{tag1}</Text>
                        </View>
                        <View style={[layoutVals.flex0]}>
                            <Text style={[styles.tagStyle]}>{tag2}</Text>
                        </View>
                    </View>                    
                </View>
                <View>
                    <SCTransFill onPress={actionFn}>Track</SCTransFill>
                </View>
            </View>
        </View>
    ) 
}


let historyItemImageComponent =  <Image style={styles.HIImage} source={require('../../assets/images/transactionItem.png')} />

export function HistoryItem({title, actionFn}): React.JSX.Element{
    return (
        <View style={[borderStyles.r15,borderStyles.bWidth2,{borderColor: efficiency.efficiencyTint5},paddings.p20]}>
            <View style={[layoutVals.flexRow,layoutVals.alignCenter,layoutVals.justifyCenter]}>
            </View>
            <View>
                <Text style={[smallStyles.small_bold,{color: efficiency.efficiencyMain}]}>{title}</Text>
            </View>
            <View style={[layoutVals.flexRow,paddings.pt15]}>
                <View style={layoutVals.flex1}>
                    <SCTransFill onPress={actionFn}>View Details</SCTransFill>
                </View>
                <View style={[layoutVals.flex0, boxWidth.w10]} />
                <View style={layoutVals.flex1}>
                    <SCTransOutline onPress={actionFn}>Download Reciept</SCTransOutline>
                </View>
            </View>

        </View>
    )
}

let whatsapp = <Image style={styles.CSImage} source={require('../../assets/images/cs-whatsapp.png')} />
let inApp = <Image style={styles.CSImage} source={require('../../assets/images/cs-inapp.png')} />
let call = <Image style={styles.CSImage} source={require('../../assets/images/cs-call.png')} />

let imgObj = {
    whatsapp,
    inApp,
    call
}

export function CSItem({type,text}): React.JSX.Element{
    let image = imgObj[type]
    return (
        <View>
            <View style={[layoutVals.flexRow]}>
                <View style={[layoutVals.flex0]}>{image}</View>
                <View style={boxWidth.w10}></View>
                <View style={[layoutVals.flex1,borderStyles.bWidth15, borderStyles.r20,styles[type],{justifyContent: 'center'}]}><Text style={[paraStyles.para_medium,paddings.p10,paddings.pl20,styles[type]]}>{text}</Text></View>
            </View>
        </View>
    )
}

let notifImages = {
    bookingSuccess: <Image style={[styles.NIImage]} source={require('../../assets/images/n-booking-success.png')} />
}


export function NotificationItem({type,text}): React.JSX.Element{
    let image = notifImages[type]
    return (
    <View style={[layoutVals.flexRow]}>
        <View style={[layoutVals.flex0]}>{image}</View>
        <View style={boxWidth.w10}></View>
        <View style={[layoutVals.flex1,borderStyles.bWidth2, borderStyles.r10,nStyles[type]]}><Text style={[smallStyles.small_regular,nStyles[type],paddings.p10]}>{text}</Text></View>
    </View>
    )
}

export function UserMessageItem({children}): React.JSX.Element{
        return (
            <View style={[layoutVals.flexRow,{justifyContent:  "flex-end"}]}>
                <View style={[borderStyles.r10,paddings.p15,boxWidth.wp70,{backgroundColor: efficiency.efficiencyTint2}]}>
                    <Text>{children}</Text>
                </View>
            </View>
        )
}

export function AdminMessageItem({children}): React.JSX.Element{
    return (
        <View style={[layoutVals.flexRow]}>
            <View style={[borderStyles.r10,paddings.p15,boxWidth.wp70,{backgroundColor: efficiency.efficiencyMain}]}>
                <Text style={[{color: efficiency.efficiencyTint1}]}>{children}</Text>
            </View>
        </View>
    )
}


export function AccountItem({actionFn=()=>{},children}): React.JSX.Element{
    return (
        <View style={[layoutVals.flexRow,layoutVals.alignCenter,paddings.p10,borderStyles.bWidth1,borderStyles.r20,{borderColor: efficiency.efficiencyTint2}]}>
            <View style={[layoutVals.flex1]}>
            <Text style={[paraStyles.para_regular]}>{children}</Text>
            </View>
            <View style={paddings.pl5}></View>
            <View style={[layoutVals.flex0]}>
                <SCTransFill style={{paddingTop: 9,paddingBottom: 7,paddingLeft: 12,paddingRight: 12,borderColor: efficiency.efficiencyTint2}} onPress={actionFn}>
                    {penIcon}
                </SCTransFill>
            </View>
        </View>
    )
}

export function RidersBookingItem({tag1,tag2}): React.JSX.Element{
    return (
        <View style={[borderStyles.bWidth2,borderStyles.r15,{borderColor: efficiency.efficiencyShade4},paddings.p10]}>
            <FlexRow>
                <Flex0>
                    <Image style={{width: 50, height: 50}} source={require('../../assets/images/icon10.png')} />
                </Flex0>
                <Flex0>
                    <View style={[boxWidth.w10]} />
                </Flex0>
                <Flex1>
                    <ParaBold>Delivery of Electronics to Mr Chuks at in Abule Egba Area.</ParaBold>
                </Flex1>
            </FlexRow>
            <View style={[layoutVals.flexRow,paddings.pv10]}>
                <View style={[layoutVals.flex0]}>
                    <Text style={[styles.tagStyle]}>{tag1}</Text>
                </View>
                <View style={[layoutVals.flex0]}>
                    <Text style={[styles.tagStyle]}>{tag2}</Text>
                </View>
            </View>
            <ParaBold>
                <Text>Status: <Text style={{color: utilityColors.errorDeep}}>Not Yet Delivered</Text></Text>                 
            </ParaBold>
            <View style={[paddings.pt10]} />
            <FlexRow>
                <Flex1>
                    <SCTransFill onPress={()=>{}}>View Details</SCTransFill>
                </Flex1>
                <Flex0>
                    <View style={[boxWidth.w10]} />
                </Flex0>
                <Flex1>
                    <SCTransOutline onPress={()=>{}}>Download Invoice</SCTransOutline>
                </Flex1>
            </FlexRow>
        </View>
    )
}

export function UpcomingDeliveries({date,amount}): React.JSX.Element{
    return (
        <View>
            <FlexRow>
                <Flex0>
                    <Image style={{width: 50, height: 50}} source={require('../../assets/images/icon11.png')} />
                </Flex0>
                    <Flex0>
                        <View style={[boxWidth.w10]} />
                    </Flex0>
                <Flex1>
                    <View style={[borderStyles.bWidth2,borderStyles.r15,{borderColor: gold.goldTint2},paddings.p10]}>
                        <ParaBold><Text>{date} ({amount})</Text></ParaBold>
                        <View style={paddings.pt5} />
                        <ParaRegular><Text>There are {amount} deliveries for this date.</Text></ParaRegular>
                        <View style={paddings.pt10}>
                            <SCDesignSmall onPress={()=>{}} buttonStyle={{borderRadius: 8}} textStyle={{color: gold.goldShade3} }>View Deliveries</SCDesignSmall>
                        </View>
                    </View>
                </Flex1>
            </FlexRow>
        </View>
    )
}
export function RidersItemComponent({name,employmentHitory}): React.JSX.Element{
    return (
        <View>
            <FlexRow>
                <Flex0>
                    <Image style={{width: 50, height: 50}} source={require('../../assets/images/icon12.png')} />
                </Flex0>
                    <Flex0>
                        <View style={[boxWidth.w10]} />
                    </Flex0>
                <Flex1>
                    <View style={[borderStyles.bWidth2,borderStyles.r15,{borderColor: utilityColors.info2},paddings.p10]}>
                        <ParaBold><Text>{name}</Text></ParaBold>
                        <View style={paddings.pt5} />
                        <ParaRegular><Text>{employmentHitory}</Text></ParaRegular>
                        <View style={paddings.pt10}>
                            <SCDesignSmall onPress={()=>{}} buttonStyle={{borderRadius: 8, borderColor: utilityColors.info2, backgroundColor: utilityColors.infoLight}} textStyle={{color: utilityColors.infoDeep} }>View Details</SCDesignSmall>
                        </View>
                    </View>
                </Flex1>
            </FlexRow>
        </View>
    )
}

export function InvoicesDayItem({date,amount,paid,unpaid}): React.JSX.Element{
    return (
        <View>
            <FlexRow>
                <Flex0>
                    <Image style={{width: 50, height: 50}} source={require('../../assets/images/icon13.png')} />
                </Flex0>
                    <Flex0>
                        <View style={[boxWidth.w10]} />
                    </Flex0>
                <Flex1>
                    <View style={[borderStyles.bWidth2,borderStyles.r15,{borderColor: gold.goldTint2},paddings.p10]}>
                        <ParaBold><Text>{date} ({amount})</Text></ParaBold>
                        <View style={paddings.pt5} />
                        <ParaRegular><Text>Total Order Invoices: {amount}</Text></ParaRegular>
                        <ParaRegular><Text>Paid : {paid}</Text></ParaRegular>
                        <ParaRegular><Text>Unpaid : {unpaid}</Text></ParaRegular>
                        <View style={paddings.pt10}>
                            <SCDesignSmall onPress={()=>{}} buttonStyle={{borderRadius: 8}} textStyle={{color: gold.goldShade3} }>View Invoices</SCDesignSmall>
                        </View>
                    </View>
                </Flex1>
            </FlexRow>
        </View>
    )
}

export function ChatMsgOverview({message,name}): React.JSX.Element{
    return (
        <View style={[borderStyles.bWidth2,borderStyles.r15,{borderColor: utilityColors.info2},paddings.p10]}>
            <FlexRow>
                <Flex0>
                    <Image style={{width: 50, height: 50}} source={require('../../assets/images/icon14.png')} />
                </Flex0>
                    <Flex0>
                        <View style={[boxWidth.w10]} />
                    </Flex0>
                <Flex1>
                    <View>
                        <ParaBold><Text>{name}</Text></ParaBold>
                        <ParaRegular><Text>{message}</Text></ParaRegular>
                    </View>
                </Flex1>
            </FlexRow>
        </View>
    )
}