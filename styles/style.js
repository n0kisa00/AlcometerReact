import { StyleSheet } from "react-native";

export const BasicTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c4f9ff',
        padding: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      color: "#035680",
    },
    text: {
      fontSize: 30,
      color: "#035680",
    },
    button: {
      padding: 10,
      backgroundColor: "#5eb8e6",
      flexDirection: 'column',
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#4593ba",
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color:"#2B2B52",
      fontSize: 20
    },
    input: {
      borderColor: "gray",
      width: 100,
      borderWidth: 1,
      borderRadius: 5,
      padding: 2,
      fontSize: 20,
    },
    radio: {
      padding: 10,
      color: "#035680",
    },

    result: {
      marginBottom: 20,
      fontSize: 40,
      color: "#035680",
    },
    Center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    switch: {
      marginTop: 20,
    }
})

export const DarkTheme = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#035680',
        padding: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 50,
      textAlign: 'center',
      margin: 10,
      color: "#a8e2ff",
    },
    text: {
      fontSize: 30,
      color: "#a8e2ff",
    },
    button: {
      padding: 10,
      backgroundColor: "#5eb8e6",
      flexDirection: 'column',
      width: 250,
      borderRadius: 15,
      borderWidth: 2,
      borderColor: "#4593ba",
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color:"#2B2B52",
      fontSize: 20
    },
    input: {
      borderColor: "gray",
      width: 100,
      borderWidth: 1,
      borderRadius: 5,
      padding: 2,
      fontSize: 20,
    },
    radio: {
      padding: 10,
      color: "#a8e2ff",
    },
    numInput: {
      padding: 20,
    },
    result: {
      marginBottom: 20,
      fontSize: 40,
      color: "#a8e2ff",
    },
    Center: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    switch: {
      marginTop: 20,
    }
})