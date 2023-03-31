
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

interface Theme {
  id: number;
  name: string;
}

const ThemesList = () => {
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
    <View style={{ flex: 1, alignItems: "center"}}>
      {themes.map((theme) => (
        <TouchableOpacity style={{
              marginVertical: 8,
              marginHorizontal: 24,
              backgroundColor: 'white',
              borderRadius: 32
            }}
              onPress={() => {
                const navigation = useNavigation()
                navigation.navigate(" ", { options: { theme: theme } })
              }}
            >
            <View style={{ paddingVertical: 16, paddingHorizontal: 24, borderRadius: 32, width: 342, display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={[styles.details, {width: 240}]} key={theme.id}>{theme.name}</Text>
              <Text style={styles.details}>0/5</Text>
            </View>
        </TouchableOpacity >
      ))}
    </View>
  );
};

export default ThemesList;

const styles = StyleSheet.create({
  list__container: {
    marginBottom: 80,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  details: {
    fontSize: 24,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});