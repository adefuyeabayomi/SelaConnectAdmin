import {StyleSheet} from 'react-native'
import { efficiency } from '../../styles/colordef'
let styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    },
    logoImg: {
        width: 110,
        height: 50 
    },
    headerMain: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerWrapper: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 10
    },
    navWrapper: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        backgroundColor: 'white'
    },
    headerContainer : {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingVertical: 5,
        paddingBottom: 10,
        backgroundColor: 'white',
        borderBottomLeftRadius: 26,
        borderBottomRightRadius: 26,
        shadowColor: efficiency.efficiencyTint4,
        shadowOffset: {width: 0,height: 0},
        shadowOpacity: 1,
        shadowRadius : 10,
        elevation: 2
    },
    navContainer: {
    },
    offsetMainContents: {
        paddingTop: 70
    },
    headerSpace: {
        flex: 1
    },
    logoContainer: {
        flex: 0
    },
    userContainer: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatarDim: {
        width: 40,
        height : 40,
        marginRight: 5
    },
    mainContentsContainer: {
        paddingHorizontal: 20,
    },
    topOffset: {
        paddingTop: 70
    },
    topOffset15: {
        paddingTop: 15
    },
    topOffset10: {
        paddingTop: 10
    },
    bottomOffset: {
        paddingTop: 120
    },
    item1Image: {
        width: 100, 
        height: 130,
        borderRadius: 10
    },
    item2Image: {
        width: 80,
        height: 100,
    },

    itemTwoStackContainer: {
        flexDirection: 'row'
    },
    item2Container: {
        flex: 1
    }
})

export default styles







