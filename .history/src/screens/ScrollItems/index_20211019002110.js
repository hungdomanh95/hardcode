import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import {RNBackground}  from "../../assets"
const ScrollItems = () => {
  return (
    <View>
      <Image
        source={RNBackground}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  )
}

export default ScrollItems
