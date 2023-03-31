import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, TouchableOpacity, FlatList, } from 'react-native';
import styles from '../misc/Styles';

const { width } = Dimensions.get('screen');
import GlobalIcon from "../assets/pics/global";
import StartPic from '../assets/pics/main';
import MeetPic from '../assets/pics/meet';
import AdvPic from '../assets/pics/adv';
import LoginPic from '../assets/pics/login';
import WorkIcon from '../assets/pics/work';
import ListComponent from '../components/ListComponent';

export default function Home({ route, navigation }) {
  // const tabBarheight = useBottomTabBarHeight();
  // const isFocused = useIsFocused();
  const [theme, setTheme] = useState(null)
  // const [nextThemes, setNextThemes] = useState(null)
  // const [currentThemeProgress, setCurrentThemeProgress] = useState(0)

  interface Theme {
    id: number;
    name: string;
  }
  const [themes, setThemes] = useState<Theme[]>([]);
  
    const fetchThemes = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/themes');
        const data = await response.json();
        setThemes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

  useEffect(() => {
    fetchThemes();
  }, []);

  return (
    <ScrollView>
      <SafeAreaView style={[styles.screenContainer, { marginHorizontal: 20 }]}>
          <View style={styless.container}>
            <View style={styless.fixedRatio}>
              <Text style={styless.counter}>{theme?.name}</Text>
              <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}>
                {/* <GlobalIcon height={"100%"} width={'100%'} alignSelf={"center"} /> */}
                {(theme?.id % 4 == 0 || !theme) && <StartPic height={"280%"} width={'280%'} alignSelf={"center"} />}
                {(theme?.id % 4 == 1) && <WorkIcon height={"100%"} width={'100%'} alignSelf={"center"} />}
                {(theme?.id % 4 == 2) && <LoginPic height={"100%"} width={'100%'} alignSelf={"center"} />}
                {(theme?.id % 4 == 3) && <GlobalIcon height={"100%"} width={'100%'} alignSelf={"center"} />}
              </View>

              <View style={[{ marginTop: -40, flex: 1, justifyContent: "center", alignItems: "center"}]}>
                <Text style={[styles.textButtonText, { color: "black", marginBottom: 4}]}>10 жестов 3 мин.</Text>
                <Text style={[styles.textButtonText, { color: "black", fontSize: 44, marginBottom: 24,}]}>ПОВТОРЕНИЕ</Text>
                <TouchableOpacity style={[styles.buttonStart,{marginHorizontal:10,marginBottom:10,}]} onPress={() => {
                  navigation.navigate("Dictionary", { options: { theme: theme} })
                }}>
                  <Text style={styles.textButtonText}>Начать</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={[{ marginTop: 60}]}>
            <Text style={styless.header}>Знакомство</Text>
            <Text style={styless.title}>Продолжить обучение</Text>
            <FlatList style={styless.list}
              horizontal
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              legacyImplementation={false}
              data={themes}
              renderItem={({ item }) => <ListComponent style={styless.component} header={item.name} />}
              keyExtractor={(item) => item.id}
            />
        </View>

        <View>
          <MeetPic width={'100%'}></MeetPic>
        </View>

        <View>
          <Text style={styless.header}>Следующие темы</Text>
          <FlatList style={styless.list}
              showsVerticalScrollIndicator={false}
              maxToRenderPerBatch={4}
              data={themes.slice(0,4)}
              numColumns={2}
              renderItem={({ item }) => <ListComponent header={item.name} />}
              keyExtractor={(item) => item.id}
            />


          <TouchableOpacity style={[styles.textButtonWhite,{marginHorizontal:10,marginBottom:10,}]} onPress={() => {
            navigation.navigate("Dictionary", { options: { theme: theme} })
          }}>
            <Text style={styles.textButtonTextBlack}>Показать еще</Text>
          </TouchableOpacity>
        </View>

        <View>
          <AdvPic width={'100%'}></AdvPic>
        </View>
      </SafeAreaView>
    </ScrollView>
    
  );
};



const styless = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    maxWidth:Dimensions.get("window").width - 40,
    minWidth:Dimensions.get("window").width - 40,
    aspectRatio:7/6,
    alignItems: 'stretch'
  },
  header:{
    fontSize: 32,
    textTransform: "uppercase",
    color: "white",
  },
  list:{
    flex: 0,
    paddingTop:10
  },
  component: {
    backgroundColor: '#000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "black",
    borderWidth: 1.5,
    borderStyle: "dashed",
  },
  item: {
    backgroundColor: '#000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: "black",
    borderWidth: 1.5,
    borderStyle: "dashed",
  },
  title2: {
    fontSize: 32,
  },
  fixedRatio: {
    backgroundColor: '#f0f2f0',
    flex: 1,
    position: 'relative',
    // aspectRatio: 7 / 5,
    width: "100%",
    borderRadius: 20,
    // padding: 20,
    justifyContent: 'space-around',
    marginTop: 10,
    marginHorizontal: 20,
    alignSelf: 'center'
  },
  contentContainer: {
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
    orderColor: "black",
    borderWidth: 1.5,
    borderStyle: "dashed",
  },
  title: {
    fontSize: 16,
    color: 'gray',
  },
  name: {
    fontSize: 27,
    fontWeight: 'bold'

  },
  counter: {
    fontSize: 16,
    position: "absolute",
    top: 15,
    left: 20,
    fontWeight: 'bold'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
  }
});
