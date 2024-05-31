import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: 150,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    backContainer: {
        height: 90, 
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 30,
        flexDirection: 'row',
        alignItems:'center',
    },
    
})

export default styles