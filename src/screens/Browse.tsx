// Home.js
import { useIsFocused } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import List from "../components/List";
import styles from "../misc/Styles";

export default function Browse({ route, navigation }) {
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
      <SafeAreaView style={[styles.screenContainer]}>
      {(
        <List/>
      )}
    </SafeAreaView>
    </ScrollView>
  );
};

