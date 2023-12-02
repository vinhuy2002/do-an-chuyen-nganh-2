import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    imgProfile: {
        width: 100, 
        height: 100, 
        borderRadius: 10000, 
        borderWidth: 1, 
        borderColor: '#dadce0'
    },
    imgContainer: {
        alignContent: 'center', 
        alignItems: 'center',
        marginBottom: 30
    },
    profileInfo: {
        borderWidth: 1, 
        borderColor: '#dadce0', 
        borderRadius: 10, 
        padding: 10
    },
    setting: {
        marginTop: 20, 
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        borderColor: '#dadce0', 
        height: 50, 
        justifyContent: 'center',
    },
    updateSetting: {
        padding: 10,
        borderTopWidth: 1, 
        borderBottomWidth: 1, 
        borderColor: '#dadce0', 
        height: 60, 
        marginBottom: 5,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    blue: {
        color: '#0077b6',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    logout: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    textBlack: {
        color: 'black',
        fontSize: 16,
        marginTop: 3,
        marginBottom: 3
    },
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
        
    //     paddingTop: 10,
    //     padding: 20,
    // },
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
        fontSize: 18
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        padding: 10,
        fontSize: 18
        // borderRadius: 4,
    },
    formStyle: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: '#0077b6',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center",
        width: '30%',
    },
});
export default styles;