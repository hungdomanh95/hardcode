import React from 'react'
import { View, Text,Button,StyleSheet,SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
  const navigation = useNavigation();
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
    alignItems:"center",
    flex:1
  }
});