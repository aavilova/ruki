import React from "react";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { Dimensions, ActivityIndicator } from "react-native";
import LoginPic from "../../assets/pics/login";
import { getAsyncStorageLoginPass, storeAsyncStorageLoginPass } from "../../misc/AsyncStorage";
import styles from "../../misc/Styles";

export default function Welcome({ route, navigation }) {
    const [loading, setLoading] = React.useState(false)

    useEffect(() => {
        setLoading(true)
        getAsyncStorageLoginPass().then((response) => {
            auth.signInWithEmailAndPassword(response.login, response.pass).then(userCredentials => {
                const user = userCredentials.user
                console.log("Logged in with: " + user.email)

                navigation.navigate("Main").then(() => setLoading(false))
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Main' }],
                })

            }).catch(() => { setLoading(false) })
        }).catch(() => { setLoading(false) })
    }, [])

    return (
        <SafeAreaView style={styles.screenContainer}>
            {!loading && <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
  
                <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}>
                    <LoginPic height={"200%"} />
                </View>
            </View>}
            {!loading && <View style={{ flex: 0 }}>
                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 20 }]}
                    onPress={() => {
                        navigation.navigate("Login")
                    }}
                >
                    <Text style={styles.textButtonText}>
                        войти
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.textButton, { marginHorizontal: 20, marginBottom: 40, }]}
                    onPress={() => {
                        navigation.navigate("RegisterEmail")
                    }}
                >
                    <Text style={styles.textButtonText}>
                        зарегистрироваться
                    </Text>
                </TouchableOpacity>
            </View>}
            {loading && <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size={"large"} color={"black"} />
            </View>}
        </SafeAreaView>
    )
}