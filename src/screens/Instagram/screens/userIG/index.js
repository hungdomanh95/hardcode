import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import Action from './Action'
import Bio from './Bio'
import Header from './Header'
import MyStory from './MyStory'
import Tab from './Tab'
import UserData from './UserData'

const UserIG = () => {
  return (
    <SafeAreaView style={styles.container} >
      <Header/>
      <UserData/>
      <Bio/>
      <Action/>
      <MyStory/>
      <Tab/>
    </SafeAreaView>
  )
}

export default UserIG
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
});
