import * as React from 'react'
import { useState, useEffect } from 'react'
import { SafeAreaView, TextInput, Button, View, Text, TouchableOpacity } from 'react-native'
import styles from "../../misc/Styles"

// import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'


// const doSignUp = async() => {
//     await fetch(apiUrl + '/data',
//       {
//         method:'GET',
//         headers:{
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + token
//         }
//       })
//     .then(res => res.json())
//     .then(resData => {
//         //var d = JSON.parse(resData); // convert it to an object
//         // alert(d.data);
//         alert(resData['data']);
//         // console.log(resData);
//         console.log(resData['data']);
//         // console.log(d.data);
//     });
// }


export default function RegisterEmail({ route, navigation }) {

    const AuthContext = React.createContext()

    const apiUrl = 'http://localhost:3000/api'

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
    // const [isLoading, setLoading] = useState(true)
    const [login, onChangeLogin] = React.useState('')
    const [password1, onChangePassword1] = React.useState('')
    const [email, onChangeEmail] = React.useState('')
    // const [token, setToken] = React.useState('')
    // const [userId, setUserId] = React.useState(0)
    // const [userName, setUserName] = React.useState('')
    // const [userPassword, setUserPassword] = React.useState('')
    // const [userEmail, setUserEmail] = React.useState('')

    const emptyUser = {
        id: 0,
        login: '',
        password: '',
        email: '',
        token: ''
    }
    const [user, setUser] = useState(emptyUser)


    function signUp() {
        // if (token.length > 0) 
        if (password1 === password1) {
            signOut()
            doSignUp()    
        } else {
            alert('Password 1 and password 2 must be equal')
        }
    }
    
    function signOut() {
        setUser(emptyUser)
        // setToken('')
        // setUserId(0)
        // setUserName('')
        // setUserPassword('')
        // setUserEmail('')
    }

    const doSignUp = async () => {
        try {
            const response = await fetch( 
                apiUrl + "/v1/signup",
                {
                    method:'POST',
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify( {'user' : {'name': login, 'email': email, 'password': password1}})
                }
            )
            const json = await response.json()

            if (typeof json['token'] !== 'undefined') {
                setUser(json)
                // setData(json)
                // const usr = {
                //     token: json.token,
                //     id: json.id,
                //     login: json.login,
                //     password: json.password,
                //     email: json.email
                // }
                // setUser(usr)
    
                // console.log(json)
                // console.log(json.message)
                // console.log(json.id)
                // console.log(json.login)
                // console.log(json.token)
                
                // setToken(json.token)
                // setUserId(json.id)
                // setUserName(json.login)
                // setUserPassword(json.password)
                // setUserEmail(json.email)
                alert('You are successfully signed up as a user "' +
                      json.login +'"')
            } else if (typeof json['message'] !== 'undefined') {
                alert(json.message)
            } else console.log(json)
        } catch (error) {
            console.error(error)
        } finally {
            // setLoading(false)
        }
    }

    return (
        <SafeAreaView style={styles.screenContainer}>
            <View style={{ flex: 1, marginHorizontal: 30, marginTop: 150, }}>
            <Text style={[styles.bigText, { textAlign: "left", marginBottom: 30, marginLeft: 50, }]}>
                 Регистрация
            </Text>
            <Text style={styles.littleText}>
                Имя
            </Text>
            <TextInput
                style={[styles.input, {width: 342,
                    height: 58,
                    color: "white",
                    borderRadius: 12,
                    borderWidth: 1.5,
                    borderStyle: "dashed",
                    borderColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    marginVertical: 5,}]}
                onChangeText={onChangeLogin}
                value={login}
                placeholder="Enter login"
            />

            <Text style={styles.littleText}>
                Эл. почта
            </Text>
            <TextInput
                style={[styles.input, {width: 342,
                    height: 58,
                    color: "white",
                    borderRadius: 12,
                    borderWidth: 1.5,
                    borderStyle: "dashed",
                    borderColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    marginVertical: 5,}]}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="Enter email"
            />

            <Text style={styles.littleText}>
                  Пароль
            </Text>
            <TextInput
                style={[styles.input, {width: 342,
                    height: 58,
                    color: "white",
                    borderRadius: 12,
                    borderWidth: 1.5,
                    borderStyle: "dashed",
                    borderColor: "white",
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    marginVertical: 5,}]}
                onChangeText={onChangePassword1}
                value={password1}
                placeholder="Enter password"
            />

                <TouchableOpacity style={[styles.textButtonPrimary, { marginHorizontal: 0, marginTop: 32, marginBottom: 20 }]}
                    onPress={() => {
                        signUp(),
                        navigation.navigate("OnBoarding")
                    }}
                >
                    <Text style={styles.textButtonText}>
                        Зарегистрироваться
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.textWhiteButton, { marginHorizontal: 0, marginBottom: 40, }]}>
                    <Text style={[styles.Small, { color: "white", width: 140, marginLeft: 0,textAlign: "center" }]}>
                        Или войдите через Google аккаунт
                    </Text>
                </TouchableOpacity>

            <View style={styles.text}>
                <Text> {user.token === '' ? '' : 'Token: ' + user.token} </Text>
                <Text> {user.id === 0 ? '' : 'User id: ' + user.id} </Text>
                <Text> {user.login === '' ? '' : 'User name: ' + user.login} </Text>
                <Text> {user.password === '' ? '' : 'User password: ' + user.password} </Text>
                <Text> {user.email === '' ? '' : 'User email: ' + user.email} </Text>
            </View>

            </View>
        </SafeAreaView>
    )
}


  




// import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
// import * as React from 'react';
// import LoginPic from "../../assets/pics/login";
// import { FancyTextInput } from "../../components/FancyTextInput";
// import { auth, storeProfile } from "../../misc/Firebase";
// import styles from "../../misc/Styles";
// import { storeAsyncStorageLoginPass } from "../../misc/AsyncStorage";
// import { useToast } from "react-native-toast-notifications";

// export default function RegisterEmail({ route, navigation }) {
//     const [name, setName] = React.useState("")
//     const [login, setLogin] = React.useState("")
//     const [pass, setPass] = React.useState("")
//     const toast = useToast()

//     const handleSignUp = () => {
//         auth.createUserWithEmailAndPassword(login, pass).then(userCredentials => {
//             const user = userCredentials.user
//             console.log("Registered with: " + user.email)
//             storeAsyncStorageLoginPass({login: login, pass:pass})
//             storeProfile({
//                 name: name,
//                 imageUri: "",
//                 email: login,
//                 phone: "",
//                 username: "user6t873845",
//                 pushClasses: false,
//                 pushUpdates: false,
//             }).then(() => navigation.navigate("OnBoarding"))
//         }).catch(error => toast.show(error.message, {
//             type: "normal",
//             placement: "top",
//             duration: 2000,
//             animationType: "slide-in",
//           }))
//     }

//     return (
//         <SafeAreaView style={styles.screenContainer}>

//             <View style={{ flex: 1, marginHorizontal: 30, marginTop: 150, }}>
//                 <Text style={[styles.bigText, { textAlign: "left", marginBottom: 30, marginLeft: 50, }]}>
//                     Регистрация
//                 </Text>
//                 <Text style={styles.littleText}>
//                     Имя
//                 </Text>
//                 <FancyTextInput style={[styles.wideInput, {marginBottom: 20}]} onChangeText={(text) => { setName(text) }} />
//                 <Text style={styles.littleText}>
//                     Эл. почта
//                 </Text>
//                 <FancyTextInput style={[styles.wideInput, {marginBottom: 20}]} onChangeText={(text) => { setLogin(text) }} />


//                 <Text style={styles.littleText}>
//                     Пароль
//                 </Text>
//                 <FancyTextInput style={styles.wideInput} onChangeText={(text) => { setPass(text) }} />



//                 <TouchableOpacity style={[styles.textButtonPrimary, { marginHorizontal: 0, marginTop: 32, marginBottom: 20 }]}
//                     onPress={() => {
//                         handleSignUp()
//                         // navigation.navigate("Main")
//                     }}
//                 >
//                     <Text style={styles.textButtonText}>
//                         Зарегистрироваться
//                     </Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.textWhiteButton, { marginHorizontal: 0, marginBottom: 40, }]}>
//                 <Text style={[styles.Small, { color: "white", width: 140, marginLeft: 0, textAlign: "center" }]}>
//                         Или войдите через Google аккаунт
//                     </Text>
//                 </TouchableOpacity>
//             </View>
//         </SafeAreaView>
//     )
// }