import { StyleSheet } from "react-native";

let styles = StyleSheet.create({

    headerWrapper: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 10
    }, 
    headerFixedImage: {
        width: '100%',
        height: 60,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    backContainer: {
        height: 65, 
        position: 'absolute',
        top: 0,
        width: '100%',
        flex: 1,
        paddingHorizontal: 15,
        paddingLeft: 0,
        flexDirection: 'row',
        alignItems:'center'
    },
    headerImage: {

    },   
    navWrapper: {
        flex: 1,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        backgroundColor: 'white'
    },
})

export default styles