import { View, Text, SafeAreaView } from "react-native";
import * as React from 'react';
import { TouchableOpacity, ScrollView } from "react-native";
import OnbPic from "../../assets/pics/onb";
import styles from "../../misc/Styles";


export default function OnBoarding({ route, navigation }) {
    const images = [<OnbPic/>, <OnbPic/>, <OnbPic/>]
    const headers = ["Тематические уроки",
        "Система достижений",
        "Дополнительные материалы"]
    const texts = ["Все уроки разделены по темам, что поможет вам структурировать знания и находить нужный контент гораздо быстрее!",
        "После прохождения определенного количества уроков вы можете получить достижения и призы, которые откроют доступ к новому контенту!",
        "Помимо обучения и словаря, вы найдете множество дополнительных материалов со статьями о РЖЯ и полезными лайфхаками"]
    const [page, setPage] = React.useState(0)

    // React.useEffect(() => {
    //     console.log("ONBOARDING")
    // }, [])

    const next = () => {
        if (page === images.length - 1) {
            skip()
            return
        }
        setPage(page + 1)
    }
    const skip = () => {
        navigation.navigate("Main")
    }

    return <SafeAreaView style={styles.screenContainer}>
        <ScrollView style={{ marginHorizontal: 30, flex: 1, height: "100%", }}
            showsVerticalScrollIndicator={false}>
            <View style={[{ flex: 1, justifyContent: "center", alignItems: "center", position: "absolut", top: -350, left: -100, zIndex: 10}]}>
                {images[page]}
            </View>
            <Text style={[styles.littleText, {color: "white", fontSize: 16, marginTop: -450}]}>
                {(page + 1) + "/" + images.length}
            </Text>
            <Text style={[styles.headerText, {fontSize: 32, lineHeight: 38, color: "white", textTransform: "uppercase", marginBottom: 12}]}>
                {headers[page]}
            </Text>
            {/* <View style={{ height:1000, backgroundColor:"red"}}> */}
            <Text style={{ flex: 1, flexWrap: 'wrap', color: "white", fontSize: 16, lineHeight: 19  }}>
                {texts[page]}
            </Text>
            {/* </View> */}
        </ScrollView>
        <View style={{ flex: 0.3, marginHorizontal: 30, justifyContent: "flex-end" }}>
            <TouchableOpacity style={[styles.textButtonPrimary, { marginHorizontal: 0, marginTop: 40, marginBottom: 12 }]}
                onPress={() => {
                    next()
                }}
            >
                <Text style={styles.textButtonText}>
                    Далее
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.textWhiteButton, { marginHorizontal: 0, marginBottom: 30, borderRadius:  60, borderColor: "white", borderWidth: 1.5, borderStyle: "dashed", }]}
                onPress={() => {
                    skip()
                }}
            >
                <Text style={[styles.textButtonText, { color: "white" }]}>
                    Пропустить
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}