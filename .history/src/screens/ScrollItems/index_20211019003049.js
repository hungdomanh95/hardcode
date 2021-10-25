import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import {RNBackground}  from "../../assets"
const BG_IMG = "https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/"
const {width, height} = Dimensions.get("screen")
const ScrollItems = () => {
  return (
    <View style={{flex:1 }} >
      <Image
        source={{uri:BG_IMG}}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={{flex:1}}  />

    </View>
  )
}

export default ScrollItems
