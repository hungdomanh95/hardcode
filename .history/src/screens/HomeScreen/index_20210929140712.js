import React from 'react'
import { View, Text,Button,StyleSheet,SafeAreaView } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container} >
      <Text>React Native</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    backgroundColor:"red",
    flex:1
  }
});