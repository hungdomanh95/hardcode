import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Bio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textBold} >hungK.dev</Text>
      <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, quasi.</Text>
      <Text style={styles.text}>Everything is coded.</Text>
    </View>
  )
}

export default Bio
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:15,
    marginTop:7
  },
  textBold:{
    fontWeight:"bold",
    lineHeight:20
  },
  text:{
    lineHeight:16
  }
});
