import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Action = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.btnEdit}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Action
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:15,
    marginTop:12
  },
  btnEdit:{
    borderWidth:1,
    borderColor:"#CBCBCB",
    justifyContent:"center",
    alignItems:"center",
    padding:10,
    borderRadius:5
  }
});
