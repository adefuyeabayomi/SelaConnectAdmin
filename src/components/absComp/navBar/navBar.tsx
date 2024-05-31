import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
let homeIcon =  <Feather name="home" size={18} />
let bookIcon = <Feather name="book" size={18}/>

let pendingIcon = <MaterialCommunityIcons name="briefcase-clock-outline"  size={18} />
let messageIcon = <MaterialCommunityIcons name="message-minus-outline" size={18}/>
let bellIcon = <Feather name="bell" size={18}/>

import styles from './style'
import { centerText, miniStyles, smallStyles } from '../../styles/textstyles';
import { efficiency, gold } from '../../styles/colordef';


import { navLocations } from "../../types/navTypes"
interface AbsNavPropType {
    goToHome: ()=>void;
    goToRecords: ()=>void;
    goToPending: ()=>void;
    goToSupport:  ()=>void;
    goToNotifications:  ()=>void;
    location: string;
}
function NavBar({goToHome,goToRecords,goToPending,goToSupport,goToNotifications, location}: AbsNavPropType) : React.JSX.Element {
    let {home, records, pending, support, info} = navLocations
    let ifHome = location == home
    let ifRecords = location == records
    let ifPending = location == pending
    let ifSupport = location == support
    let ifInfo = location == info


    let activeIndicator = <View style={styles.idIndicator} id='activeIndicator' />
    return (
        <View style={styles.navContainerMain} >
            <View style={styles.navContainer}>
                <View style={styles.navItem}>
                    <TouchableOpacity style={[styles.homeTouchContainer,styles.navItem]} onPress={goToHome}>
                        <View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifHome? styles.activeText: {}]}>{homeIcon}</Text></View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifHome? styles.activeText: {}]}>Home</Text></View>                        
                        </View>
                        {ifHome ? activeIndicator: null}
                    </TouchableOpacity>
                </View>
                <View style={styles.navItem}>
                    <TouchableOpacity style={[styles.touchContainer,styles.navItem]} onPress={goToPending}>
                        <View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifPending? styles.activeText: {}]}>{pendingIcon}</Text></View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifPending? styles.activeText: {}]}>Pending</Text></View>
                        </View>
                        {ifPending ? activeIndicator: null}
                    </TouchableOpacity>                    
                </View>
                <View style={styles.navItem}>
                    <TouchableOpacity style={[styles.touchContainer,styles.navItem]} onPress={goToRecords}>
                        <View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifRecords? styles.activeText: {}]}>{bookIcon}</Text></View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifRecords? styles.activeText: {}]}>Records</Text></View>
                        </View>
                        {ifRecords? activeIndicator: null}
                    </TouchableOpacity>   
                </View>                
                <View style={styles.navItem}>
                    <TouchableOpacity style={[styles.touchContainer,styles.navItem]} onPress={goToSupport}>
                        <View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifSupport? styles.activeText: {}]}>{messageIcon}</Text></View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifSupport? styles.activeText: {}]}>CS-Support</Text></View>
                        </View>
                        {ifSupport? activeIndicator: null}
                    </TouchableOpacity>                    
                </View>
                <View style={styles.navItem}>
                    <TouchableOpacity style={[styles.infoTouchContainer,styles.navItem]} onPress={goToNotifications}>
                        <View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifInfo? styles.activeText: {}]}>{bellIcon}</Text></View>
                            <View><Text style={[centerText.center,{color: efficiency.efficiencyShade5},miniStyles.mini_regular,ifInfo? styles.activeText: {}]}>Info</Text></View>
                        </View>
                        {ifInfo ? activeIndicator: null}
                    </TouchableOpacity>                    
                </View>
            </View>
        </View>
    )
} 

export default NavBar