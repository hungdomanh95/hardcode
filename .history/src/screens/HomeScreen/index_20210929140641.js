import React from 'react'
import { View, Text,Button,StyleSheet,SafeAreaView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView  >
      <Text>React Native</Text>
    </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
  }
});