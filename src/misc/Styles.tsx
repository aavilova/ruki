import { Platform, StatusBar, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
    screenContainer: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#000',
    },
    textButton: {
        backgroundColor: "black",
        alignItems: "center",
        padding: 17,
        height: 58,
        marginVertical: 8,
        borderRadius:  60,
        borderColor: "white",
        borderWidth: 1.5,
        borderStyle: "dashed",
    },
    textButtonWhite: {
        backgroundColor: "white",
        alignItems: "center",
        padding: 17,
        height: 58,
        marginVertical: 8,
        borderRadius:  60,
        borderColor: "black",
        borderWidth: 1.5,
        borderStyle: "dashed",
    },
    textWhiteButton: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
    },
    textButtonText: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: 500,
        
    },
    textButtonTextSmall: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: 500,
        
    },
    textButtonTextBlack: {
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontWeight: 500,
    },
    textButtonPrimary: {
        backgroundColor: "#FF5029",
        alignItems: "center",
        padding: 17,
        borderRadius:  60,
        borderColor: "black",
        borderWidth: 1.5,
        borderStyle: "dashed",
        width: 342,
        height: 58,
    },
    buttonStart: {
        backgroundColor: "#FF5029",
        alignItems: "center",
        padding: 17,
        borderRadius:  60,
        borderColor: "white",
        borderWidth: 1.5,
        borderStyle: "dashed",
        height: 58,
        width: 149,
      },
    bigText: {
        marginLeft: 10,
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        fontSize: 32,
        width: 342,
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    headerContainer: {
        flexDirection: "row",
        display: "flex",
        marginHorizontal: 20,
        marginBottom: 30,
    },
    headerText: {
        fontWeight: "bold",
        textAlign: "left",
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    littleText: {
        fontSize: 16,
        textAlign: "left",
        color: "#fff",
        marginVertical: 8,
    },
    wideInput: {
        width: 342,
        height: 58,
        color: "white",
        borderRadius: 12,
        borderWidth: 1.5,
        borderStyle: "dashed",
        borderColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    settingsContainer: {
        margin: 20,
        flexDirection: "column"
    },
    settingsButton: {
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginVertical: 5,
        marginHorizontal: 20,
        backgroundColor: "#E4E4E4"
    },
    avatar: {
        borderRadius: 70,
        width: 120,
        height: 120,
        borderWidth: 1,
        borderColor: "black"
    },
    hand: {
        width: 40,
        minWidth: 40,
        aspectRatio: 1,
        resizeMode: "contain"
    }

});

export default styles