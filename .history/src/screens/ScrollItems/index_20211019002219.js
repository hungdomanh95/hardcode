import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import {RNBackground}  from "../../assets"
const BG_IMG = "https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/"
const ScrollItems = () => {
  return (
    <View style={{flex:1}} >
      <Image
        source={{uri:BG_IMG}}
        style={StyleSheet.absoluteFillObject}
      />
    </View>
  )
}

export default ScrollItems
