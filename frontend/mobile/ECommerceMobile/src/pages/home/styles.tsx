import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        margin: 5,
        borderRadius: 10,
        borderColor: "#dadce0",
        borderWidth: 1
    },
    container: {
        margin: 8,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    },
    title: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: '#20232a',
        borderRadius: 6,
        backgroundColor: '#61dafb',
        color: '#20232a',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
    boxCategory: {
        borderWidth: 1,
        borderColor: "#dadce0",
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    item: {
        borderWidth: 1,
        borderColor: "#dadce0",
        padding: 5,
        margin: 5,
        borderRadius: 5,
        width: 200,
    },
    imgStyle: {
        width: "100%", 
        height: 200, 
    },
    itemTitle: {
        flexShrink: 1,
        flex: 1, 
        flexWrap: 'wrap'
    }
});
export default styles;