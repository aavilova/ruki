import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import React, { useContext,  useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
// import Achievement from '../components/Achievement';
// import AchievementList from '../components/AchievementList';
// import ProgressBar from '../components/Lession/ProgressBar';
// import LessonList from '../components/LessonList';
// import ProfileCard from '../components/ProfileCard';
// import IProfile from '../interfaces/IProfile';
import styles from '../misc/Styles';

export default function Profile({ route, navigation }) {

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
    

    const token = useContext(AuthContext)
    const setToken = useContext(AuthContext)
    const [username, setUsername] = useState('');

    useEffect(() => {
      // Since the async method Parse.User.currentAsync is needed to
      // retrieve the current user data, you need to declare an async
      // function here and call it afterwards
      async function getCurrentUser() {
        // This condition ensures that username is updated only if needed
        if (username === '') {
          const currentUser = await Parse.User.currentAsync();
          if (currentUser !== null) {
            setUsername(currentUser.getUsername());
          }
        }
      }
      getCurrentUser();
    }, [username]);

    
  // const [user, setUser] = React.useState<IProfile | null>(null)
  // const [progress, setProgress] = React.useState(null)

  // const isFocused = useIsFocused();

  // React.useEffect(() => {
  //   update()
  // }, [isFocused]) 

  // useFocusEffect(() => {
  //   update()
  // }) 

  

  // const update = () => {
    // getProfile().then((response) => {
    //   setUser(response)
      // console.log("got user profile: ")
      // console.log(response)
    // })
    // clearThemeProgress()
    // getThemeProgress().then((response) => {
    //   // storeThemeProgress(2,3,6)
    //   setProgress(response.data)
    //   console.log("got user profile: ")
    //   console.log(response.data)
    // })
  // }

  return (
    <SafeAreaView style={[styles.screenContainer, { color: "white"}]}>
      <View style={{ justifyContent: 'space-between', flexDirection: "row", height: 20, marginHorizontal: 24}} >
        <Text style={[styles.headerText, {color: "white", fontSize: 18}]}>
          Профиль
        </Text>
        <Text style={[styles.headerText, {color: "white", fontSize: 18}]} onPress={() => {
          navigation.navigate("Settings")
        }}>
          Настройки
        </Text>
      </View>
      <View style={styles.headerContainer}>

      </View>
      {/* <ProfileCard style={styles.profileCard}/>
      <AchievementList style={styles.list}/> */}
      <View profile={token} style={[ { color: "white" }]}/>
      <Text style={[ { color: "white" }]}>
        {username !== '' && <Text>{`Hello ${username}!`}</Text>} 
      </Text>
    </SafeAreaView>
  );
};
