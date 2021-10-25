import React from 'react'
import { View, Text,Image,StyleSheet,SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RNBackground } from '../../assets';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container} >
      <Image source={RNBackground} style={styles.bgHome} />
    </SafeAreaView>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems:"center",
    flex:1
  },
  bgHome:{
    width:globalStyle.widthScreen
  }
});