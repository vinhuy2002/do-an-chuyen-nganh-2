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
        color: 'black',
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
        width: 180
    },
    imgStyle: {
        width: "100%",
        height: 200,
    },
    itemTitle: {
        flexShrink: 1,
        flex: 1,
        flexWrap: 'wrap'
    },
    boxSize: {
        width: '100%',
        minHeight: 'auto',
        padding: 5,
        borderWidth: 1,
        marginBottom: 10,
        borderColor: "#dadce0"
    },
    imgDetailStyle: {
        width: "100%",
        height: 300,
    },
    imgCarousel: {
        width: 75,
        height: 75,
        marginRight: 10,
        padding: 20,
        borderWidth: 1,
        borderColor: "#dadce0"
    },
    footerDetail: {
        height: 65,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0077b6"
    },
    footerText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold'
    },
    textColor: {
        color: "black",
        // fontSize: 16
    },
    itemName: {
        color: "black",
        fontSize: 20,
        marginBottom: 5
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        height: 180,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      },
});
export default styles;