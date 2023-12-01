import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
        paddingTop: 10,
        padding: 20,
    },
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
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
        width: '50%'
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
    }
});

export default styles;