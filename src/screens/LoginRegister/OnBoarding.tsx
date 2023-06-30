import { View, Text, SafeAreaView } from "react-native";
import * as React from 'react';
import { TouchableOpacity, ScrollView } from "react-native";
import OnbPic1 from "../../assets/pics/onb1";
import OnbPic2 from "../../assets/pics/onb2";
import OnbPic3 from "../../assets/pics/onb3";
import styles from "../../misc/Styles";


export default function OnBoarding({ route, navigation }) {
    const images = [<OnbPic1/>, <OnbPic2/>, <OnbPic3/>]
    const headers = ["тематические уроки",
        "система достижений",
        "дополнительные материалы"]
    const texts = ["Все уроки разделены по темам, что поможет вам структурировать знания и находить нужный контент быстрее!",
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
        <ScrollView style={{ marginHorizontal: 30, flex: 1, width: "110%", left: -50, top: -70 }}
            showsVerticalScrollIndicator={false}>
            <View style={[{ flex: 1, justifyContent: "center", alignItems: "center", top: 50, left: 0, zIndex: -10, height: 320 }]}>
                {images[page]}
            </View>
            <Text style={[styles.littleText, {color: "black", fontSize: 16, marginTop: 70, left: 50,}]}>
                {(page + 1) + "/" + images.length}
            </Text>
            <Text style={[styles.headerText, {fontSize: 32, lineHeight: 38, color: "black", textTransform: "uppercase", marginBottom: 12, left: 50, width: 342}]}>
                {headers[page]}
            </Text>
            {/* <View style={{ height:1000, backgroundColor:"red"}}> */}
            <Text style={{ flex: 1, flexWrap: 'wrap', color: "black", fontSize: 16, lineHeight: 19, left: 50, width: 342, height: 170  }}>
                {texts[page]}
            </Text>
            {/* </View> */}
        </ScrollView>
        <View style={{ flex: 0.3, marginHorizontal: 30, justifyContent: "flex-end" }}>
            <TouchableOpacity style={[styles.textButtonPrimary, { marginHorizontal: 0, marginTop: 20, marginBottom: 12 }]}
                onPress={() => {
                    next()
                }}
            >
                <Text style={styles.textButtonTextWhite}>
                    далее
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.textWhiteButton, { marginHorizontal: 0,  height: 58, backgroundColor: "white",  marginBottom: 30, borderRadius:  60, borderColor: "#F2F2F5", borderWidth: 1.5, borderStyle: "dashed", }]}
                onPress={() => {
                    skip()
                }}
            >
                <Text style={[styles.textButtonText, { color: "black", paddingTop: 16 }]}>
                    пропустить
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
}