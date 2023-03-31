import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import ConfirmIcon from '../assets/icons/confirm';

const ListComponent = ({ header, details }: { header: string, details: string }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fixedRatio}>
        <Text style={styles.header}>{header}</Text>
        <View style={{flex:1}}/>
        <Text style={styles.details}>{details}</Text>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingVertical:15,
    paddingHorizontal:5,
    margin:5,
    width: 165,
    height: 165,
    backgroundColor: 'white',
    // aspectRatio: 16 / 11,
    borderRadius: 20,
    maxWidth: Dimensions.get("window").width / 2 - 30,
    // padding: 10,
    // justifyContent: 'space-around',
    borderWidth: 1.5,
    borderColor: "black",
    borderStyle: "dashed",
    paddingLeft: 10,
  },
  fixedRatio: {

  },
  header: {
    // font: 'sans-serif',
    fontSize: 22,
    alignSelf:"flex-start",
    fontWeight: 500,
  },
  details: {
    // font: 'sans-serif',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf:"flex-end",
  },
  circle: {
    height: "50%",
    aspectRatio: 1,
    borderColor: "black",
    borderRadius: 50,
    borderWidth: 1,
  }
});

export default ListComponent;