import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Card  from '../../components/Card'

const Lessons = () => {
  return (
    <View>
      <Card/>
    </View>
  )
}

export default Lessons
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  }
});

