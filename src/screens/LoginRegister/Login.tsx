import { View, Text, TextInput, SafeAreaView } from "react-native";
import React, {useState, useContext, createContext, Children } from 'react';
import styles from "../../misc/Styles";
import { TouchableOpacity } from "react-native";
import { FancyTextInput } from "../../components/FancyTextInput";
import { useToast } from "react-native-toast-notifications";
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login({ route, navigation }) {

    const apiUrl = 'http://localhost:3000/api'
    const AuthContext = createContext();

    const AuthState = ({ children }) => {
        const [token, setToken] = useState('')

        return (
            <AuthContext.Provider
                value={{
                    token: token,
                    setToken
                }}
            >
                {children}
            </AuthContext.Provider>
        )
        
    }


    const [email, onChangeLogin] = React.useState('')
    const [password, onChangePassword] = React.useState('')
    // const [token, setToken] = React.useState('')
    const [userId, setUserId] = React.useState(0)
    const [userName, setUserName] = React.useState('')

    const setToken = useContext(AuthContext)
    

    async function saveData(tok) {
        console.log("Saving", tok)
        _storeData = async () => {{
            try {
              await AsyncStorage.setItem('token', tok);
              console.log("Saved token", tok);
            } catch (error) {
              console.log(error);
            }
          }
          
          // Call the saveData function with the token
          saveData(json.jti);


          _retrieveData = async () => {
            try {
              const t = await AsyncStorage.getItem('token');
              if (t !== null) {
                console.log("Retrieved token", t);
              }
            } catch (error) {
              console.log(error);
            }
          }
        }  

    }


    // function signIn() { doSignIn() }
    
    function signOut() { 
        setToken('')
        setUserId(0)
        setUserName('')
        saveData('')
        alert('You are successfully sign out')
    }
    

    async function doSignIn() { // async
        try {
            const user = {'user' : {'email': email, 'password': password}}
            // const user = {'user' : {'email': 'aalisa@gmail.com', 'password': '123456'}}

            const response = await fetch(apiUrl + "/v1/login", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
              });
              
              let json = await response.json();
              console.log(json); // Log the response object for debugging
            alert(json.jti + ' ' + json.email)
            
            // if (typeof json['jti'] !== 'undefined') {
            //     setUserId(json.id)
            //     setUserName(json.email)
            //     setToken(json.jti)
            //     // saveData(json.token)
            //     alert('ccc')
            //     alert('You are successfully logged in as a user "' +
            //           json.email +'"')
            // } else if (typeof json['message'] !== 'undefined') {
            //     alert('bbb')
            //     alert(json.message)
            // } else console.log("...")
        } catch (error) {
            // alert('aaa')
            alert(error)
        }
        
        //console.log(JSON.stringify( {'login': login, 'password': password} ))
        // await fetch(apiUrl + '/auth/signin',
        //     {
        //         method:'POST',
        //         headers:
        //             {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             }
        //     },
        //     { body: JSON.stringify( {'login': login, 'password': password} ) }
        // ).then(res => res.json()).then(resData => {
        //     console.log(res)
            // console.log(resData)
            //var d = JSON.parse(resData); // convert it to an object
            // alert(d.data);
            // alert(resData['token']);
            // console.log(resData);
            // console.log(resData['token']);
            // console.log(d.data);
        // })
    }




    return <SafeAreaView style={styles.screenContainer}>
            <View style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "left", marginHorizontal: 30 }}>
                <Text style={[styles.bigText, { textAlign: "center", marginBottom: 30, marginLeft:-10 }]}>
                    вход
                </Text>
                <Text style={styles.littleText}>
                    эл. почта
                </Text>
                <TextInput style={[styles.wideInput, { marginBottom: 20 }]} value={email} onChangeText={onChangeLogin} placeholder="Введите почту" />


                <Text style={styles.littleText}>
                    пароль
                </Text>
                <TextInput style={styles.wideInput}  onChangeText={onChangePassword} placeholder="Введите пароль" />



                <TouchableOpacity style={[styles.textButtonPrimary, { marginHorizontal: 0, marginTop: 32, marginBottom: 20 }]}
                     onPress={() => {
                            doSignIn(),
                            navigation.navigate("Main")
                        }}
                    >
                    <Text style={styles.textButtonTextWhite}>
                        войти
                    </Text>

                </TouchableOpacity>
                <TouchableOpacity style={[styles.textWhiteButton, { marginHorizontal: 0, marginBottom: 40, }]}>
                    <Text style={[styles.Small, { color: "black", width: 140, marginLeft: 85,textAlign: "center" }]}>
                        или войдите через Google аккаунт
                    </Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
};

